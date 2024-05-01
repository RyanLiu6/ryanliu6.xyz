import classNames from "classnames";
import type { CollectionEntry } from "astro:content";

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
        <p>{work.data.description}</p>
        <div className="py-2">
          <ul className="list-disc list-inside pl-4">
            {work.body.trim().split("\n")
              .map((line) => (
                <li>{line.replace("*", "")}</li>
              ))
            }
          </ul>
        </div>
      </article>
    </section>
  )
};

export default WorkContent;
