import classNames from "classnames";
import Markdown from "react-markdown";
import type { CollectionEntry } from "astro:content";

import { TextLink } from "@ryanliu6/xi";
import { mdStyle, textStyle } from "@ryanliu6/xi/styles";

interface WorkProps {
  work: CollectionEntry<"work"> | CollectionEntry<"internships">;
}

const WorkContent = ({ work }: WorkProps) => {
  return (
    <section>
      <article className="flex flex-col py-4">
        <h1 className="text-xl font-bold flex flex-row gap-2">
          {/* {work.data.logo && (
            <>
              <img height="24" width="24" alt="Logo" src={`${work.data.logo}/475569`} className="flex dark:hidden" />
              <img height="24" width="24" alt="Logo" src={`${work.data.logo}/d4d4d8`} className="hidden dark:flex" />
            </>
          )} */}
          <TextLink href={work.data.link} title={work.data.employer} black={true} underline={true}>
            {work.data.employer}
          </TextLink>
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">{work.data.description}</p>
        <Markdown
          className={mdStyle}
          components={{
            h4(props) {
              const { children, ...rest } = props;
              const content = children as string;
              const [position, time] = content.split("::");
              const h4Class = classNames(textStyle, "flex flex-row justify-between m-0");

              return (
                <h4 {...rest} className={h4Class}>
                  <p className="font-bold m-0">{position.trim()}</p>
                  <p className="italic m-0">{time.trim()}</p>
                </h4>
              );
            },
          }}
        >
          {work.body}
        </Markdown>
      </article>
    </section>
  );
};

export default WorkContent;
