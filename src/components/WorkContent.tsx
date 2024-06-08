import Markdown from "react-markdown";
import type { CollectionEntry } from "astro:content";

import { mdClass } from "@/components/common/utils";

interface WorkProps {
  work: CollectionEntry<"work"> | CollectionEntry<"internships">;
}

const WorkContent = ({ work }: WorkProps) => {
  return (
    <section>
      <article className="flex flex-col py-4">
        <h1 className="text-xl font-bold underline underline-offset-auto">
          <a
            href={work.data.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            {work.data.employer}
          </a>
        </h1>
        <div className="flex flex-row justify-between text-slate-500 dark:text-slate-400 text-sm">
          <p>{work.data.position}</p>
          <p>{work.data.dates}</p>
        </div>
        <p className="text-sm">{work.data.description}</p>
        <Markdown className={mdClass}>{work.body}</Markdown>
      </article>
    </section>
  )
};

export default WorkContent;
