import classNames from "classnames";
import Markdown from "react-markdown";
import type { CollectionEntry } from "astro:content";

import { mdStyle, textStyle } from "@ryanliu6/xi/styles";

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
        <p className="text-sm text-slate-500 dark:text-slate-400">{work.data.description}</p>
        <Markdown
          className={mdStyle}
          components={{
            h4(props) {
              const {children, node, ...rest} = props
              const content = children as string;
              const [position, time] = content.split("::");
              const h4Class = classNames(textStyle, "flex flex-row justify-between m-0")

              return (
                <h4 {...rest} className={h4Class}>
                  <p className="font-bold m-0">{position.trim()}</p>
                  <p className="italic m-0">{time.trim()}</p>
                </h4>
              )
            }
          }}
        >
          {work.body}
        </Markdown>
      </article>
    </section>
  )
};

export default WorkContent;
