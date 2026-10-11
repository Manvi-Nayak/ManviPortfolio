import { Code2, ContactRound, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/data/contact";

export function ContactLinks({ showAddress = false }: { showAddress?: boolean }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
      {CONTACT.email ? (
        <Button
          asChild
          variant="link"
          size="sm"
          className="h-auto min-h-9 max-w-full px-0 text-xs text-muted-foreground"
        >
          <a href={`mailto:${CONTACT.email}`} className="whitespace-normal break-all">
            <Mail aria-hidden />
            {showAddress ? `EMAIL · ${CONTACT.email}` : "EMAIL"}
          </a>
        </Button>
      ) : null}
      <Button asChild variant="link" size="sm" className="px-0 text-xs text-muted-foreground">
        <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
          <ContactRound aria-hidden /> LINKEDIN
        </a>
      </Button>
      <Button asChild variant="link" size="sm" className="px-0 text-xs text-muted-foreground">
        <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
          <Code2 aria-hidden /> GITHUB
        </a>
      </Button>
    </div>
  );
}
