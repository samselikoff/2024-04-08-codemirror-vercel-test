import MarkdownEditor from "./markdown-editor";

let markdownCode = `
Hi!

Just testing this out...

## A title

And then some code...

\`\`\`tsx
let x = 1;
\`\`\`
`;

export default function Home() {
  return (
    <div>
      <p>hi</p>
      <MarkdownEditor initialValue={markdownCode} />
    </div>
  );
}
