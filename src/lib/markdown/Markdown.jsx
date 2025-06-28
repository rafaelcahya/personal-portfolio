import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "./CodeBlock";

export default function Markdown({ content }) {
    const markdown = typeof content === "string" ? content : "";

    if (!markdown) {
        return <p className="text-red-500">[Markdown kosong]</p>;
    }

    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                code: CodeBlock,
            }}
        >
            {markdown}
        </ReactMarkdown>
    );
}
