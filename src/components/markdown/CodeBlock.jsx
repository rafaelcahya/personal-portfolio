import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/esm/styles/prism/atom-dark.js";

export default function CodeBlock({ className, children }) {
    const language = className?.replace("language-", "") || "text";
    const code = Array.isArray(children) ? children.join("") : children;

    return (
        <SyntaxHighlighter
            language={language}
            style={atomDark}
            wrapLongLines
            showLineNumbers
            showInlineLineNumbers
        >
            {code.trimEnd()}
        </SyntaxHighlighter>
    );
}
