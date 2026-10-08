import gsap from "gsap";
import { useEffect, useRef } from "react";

import { startBlueprintIdle } from "@/animations/hero/heroBlueprint";
import {
  BLUEPRINT_ACTIVITY,
  BLUEPRINT_EDGES,
  BLUEPRINT_NODES,
} from "@/data/hero";

const REACT_RADIUS = 22; // viewBox units

/**
 * Interactive engineering blueprint: layered node/edge system rendered as a
 * single lightweight SVG. Pointer proximity brightens nearby nodes and edges
 * and nudges the closest node a few pixels.
 */
export function HeroBlueprint() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    return startBlueprintIdle(svgRef.current);
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    const svg = svgRef.current;
    if (!wrap || !svg) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const nodes = Array.from(svg.querySelectorAll<SVGGElement>("[data-hero-node]"));
    const edges = Array.from(svg.querySelectorAll<SVGPathElement>("[data-hero-edge]"));

    const handleMove = (event: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      const px = ((event.clientX - rect.left) / rect.width) * 100;
      const py = ((event.clientY - rect.top) / rect.height) * 100;

      wrap.style.setProperty("--glow-x", `${px}%`);
      wrap.style.setProperty("--glow-y", `${py}%`);
      wrap.style.setProperty("--glow-opacity", "1");

      let closest = -1;
      let closestDist = Infinity;

      BLUEPRINT_NODES.forEach((node, i) => {
        const el = nodes[i];
        const dist = Math.hypot(node.x - px, node.y - py);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
        if (!el) return;
        const near = Math.max(0, 1 - dist / REACT_RADIUS);
        gsap.to(el, {
          opacity: 0.55 + near * 0.45,
          scale: 1 + near * 0.28,
          transformOrigin: "center",
          duration: 0.4,
          overwrite: "auto",
        });
      });

      nodes.forEach((node, i) => {
        const n = BLUEPRINT_NODES[i];
        if (n && i === closest && closestDist < REACT_RADIUS) {
          gsap.to(node, {
            x: (px - n.x) * 0.12,
            y: (py - n.y) * 0.12,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto",
          });
        } else {
          gsap.to(node, { x: 0, y: 0, duration: 0.6, ease: "power2.out" });
        }
      });

      BLUEPRINT_EDGES.forEach(([a, b], i) => {
        const nodeA = BLUEPRINT_NODES[a];
        const nodeB = BLUEPRINT_NODES[b];
        const edge = edges[i];
        if (!nodeA || !nodeB || !edge) return;
        const mx = (nodeA.x + nodeB.x) / 2;
        const my = (nodeA.y + nodeB.y) / 2;
        const near = Math.max(0, 1 - Math.hypot(mx - px, my - py) / REACT_RADIUS);
        const touchesClosest = a === closest || b === closest;
        gsap.to(edge, {
          opacity: 0.25 + near * 0.5 + (touchesClosest ? 0.25 : 0),
          duration: 0.4,
          overwrite: "auto",
        });
      });

    };

    const handleLeave = () => {
      wrap.style.setProperty("--glow-opacity", "0");
      gsap.to(nodes, { opacity: 1, scale: 1, x: 0, y: 0, duration: 0.6 });
      gsap.to(edges, { opacity: 0.35, duration: 0.6 });
    };

    wrap.addEventListener("pointermove", handleMove);
    wrap.addEventListener("pointerleave", handleLeave);
    return () => {
      wrap.removeEventListener("pointermove", handleMove);
      wrap.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="relative aspect-square w-full max-w-[300px] sm:max-w-[440px] lg:max-w-[540px] [--glow-opacity:0] [--glow-x:50%] [--glow-y:50%]"
    >
      {/* radial glow following the pointer */}
      <div
        className="pointer-events-none absolute inset-0 rounded-lg opacity-[var(--glow-opacity)] transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(240px circle at var(--glow-x) var(--glow-y), oklch(0.68 0.17 259 / 0.18), transparent 70%)",
        }}
      />
      {/* resting ambient glow */}
      <div className="pointer-events-none absolute inset-[12%] rounded-full bg-[radial-gradient(circle,oklch(0.6_0.23_302/0.12),transparent_70%)] blur-2xl" />

      <svg
        ref={svgRef}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        className="relative h-full w-full"
      >
        <defs>
          <pattern id="hero-grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path
              d="M 8 0 L 0 0 0 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.15"
            />
          </pattern>
          <radialGradient id="hero-grid-mask-gradient">
            <stop offset="35%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="hero-grid-mask">
            <rect width="100" height="100" fill="url(#hero-grid-mask-gradient)" />
          </mask>
        </defs>

        <g data-hero-grid className="text-foreground/25" mask="url(#hero-grid-mask)">
          <g data-hero-grid-drift>
            <rect x="-6" y="-6" width="112" height="112" fill="url(#hero-grid)" />
          </g>
        </g>

        {/* connections */}
        <g fill="none" strokeLinecap="round">
          {BLUEPRINT_EDGES.map(([a, b], i) => {
            const from = BLUEPRINT_NODES[a];
            const to = BLUEPRINT_NODES[b];
            if (!from || !to) return null;
            const dense = from.dense || to.dense;
            return (
              <path
                key={`edge-${i}`}
                id={`hero-edge-${i}`}
                data-hero-edge
                d={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
                stroke="oklch(0.68 0.17 259 / 0.75)"
                strokeWidth="0.22"
                opacity={0.35}
                className={dense ? "hidden sm:block" : undefined}
                pathLength={100}
                strokeDasharray="100"
              />
            );
          })}
        </g>

        {/* activity pulses travel along a few edges */}
        <g fill="none" strokeLinecap="round">
          {BLUEPRINT_ACTIVITY.map((edgeIndex, i) => {
            const edge = BLUEPRINT_EDGES[edgeIndex];
            const from = edge ? BLUEPRINT_NODES[edge[0]] : undefined;
            const to = edge ? BLUEPRINT_NODES[edge[1]] : undefined;
            if (!from || !to) return null;

            return (
              <g key={`pulse-${i}`}>
                <path
                  id={`hero-pulse-${i}`}
                  d={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
                  stroke={
                    i % 2 === 0
                      ? "oklch(0.68 0.17 259)"
                      : "oklch(0.6 0.23 302)"
                  }
                  strokeWidth="0.5"
                  strokeLinecap="round"
                />
                <g data-hero-pulse data-path-id={`hero-pulse-${i}`} />
              </g>
            );
          })}
        </g>

        {/* nodes */}
        {BLUEPRINT_NODES.map((node, i) => {
          const color =
            node.accent === "secondary"
              ? "oklch(0.6 0.23 302)"
              : "oklch(0.68 0.17 259)";
          return (
            <g
              key={`node-${i}`}
              data-hero-node
              className={node.dense ? "hidden sm:block" : undefined}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
            >
              <circle
                data-halo
                cx={node.x}
                cy={node.y}
                r={node.r * 1.7}
                fill={color}
                opacity={0.12}
              />
              <circle cx={node.x} cy={node.y} r={node.r} fill={color} />
              {node.label ? (
                <text
                  x={node.x}
                  y={node.y - node.r - 1.8}
                  textAnchor="middle"
                  fill="currentColor"
                  className="hidden fill-muted-foreground font-sans sm:block"
                  style={{ fontSize: 2.4, letterSpacing: "0.08em" }}
                >
                  {node.label}
                </text>
              ) : null}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
