import ReactMarkdown from "react-markdown";
import { mdStyle } from "@ryanliu6/xi/styles";
import { useState } from "react";

const MarkdownPreview = () => {
  const [markdown, setMarkdown] = useState(`# Try writing some markdown!

You can use **bold**, *italic*, or create lists:
- Item 1
- Item 2
`);

  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-2 gap-6 w-[120ch] h-[calc(100vh-12rem)]">
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="w-full h-full p-4 font-mono resize-none bg-slate-100 dark:bg-zinc-800 border dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-fuchsia-500 dark:focus:ring-fuchsia-400"
          placeholder="Enter markdown here..."
        />
        <div className="overflow-auto p-4 border dark:border-zinc-600 rounded-lg">
          <ReactMarkdown className={mdStyle}>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MarkdownPreview;
