import classNames from "classnames";

import { textClass, hoverColour, languageColours } from "@/components/common/utils";

interface CardProps {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

const Card = ({ title, description, link, tags }: CardProps) => {
  const cardClasses = classNames("p-4", hoverColour, textClass);

  return (
    <div className={cardClasses}>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-sm">{description}</p>
      <ul className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
            <li key={index} className="flex items-center">
              <span
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: languageColours[tag] || '#ccc' }}
              />
              <span className="text-xs">{tag}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Card;
