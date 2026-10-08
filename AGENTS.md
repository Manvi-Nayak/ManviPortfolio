<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the notebook workspaces on the existing index route and navigate through the shared workspace store; this preserves the locked page system.
- Store project details and repository links in a single data module, with fixed-format front/back faces and independent link events; this avoids layout shifts and accidental flips.
- Read the contact email from VITE_CONTACT_EMAIL through shared contact data and retain Formspree submission; this avoids duplicated contact values and a custom backend.
