import Markdown from "react-markdown";
import type { CollectionEntry } from "astro:content";

import { mdClass } from "@/components/common/utils";

interface WorkProps {
  project: CollectionEntry<"projects">;
}

const ProjectContent = ({ project }: WorkProps) => {
  return (
    <section>
      <article className="flex flex-col py-4">
        <h1 className="text-xl font-bold underline underline-offset-auto">
          <a
            href={project.data.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            {project.data.name}
          </a>
        </h1>
        <p className="text-sm">{project.data.description}</p>
        <Markdown className={mdClass}>{project.body}</Markdown>
      </article>
    </section>
  )
};

export default ProjectContent;
