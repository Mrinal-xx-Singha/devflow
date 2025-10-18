import ROUTES from "@/constants/routes"; // App route constants (for navigation)
import Link from "next/link"; // Next.js <Link> for client-side routing
import Image from "next/image"; // Optimized image component from Next.js
import React from "react";
import { Badge } from "../ui/badge"; // UI badge component (probably from shadcn)
import { getDeviconClassName } from "@/lib/utils"; // Utility to get appropriate Devicon class for a tag icon

// Props interface for the TagCard component
interface Props {
  _id: string; // Unique tag ID
  name: string; // Tag name (e.g., "React", "JavaScript")
  questions?: number; // Optional number of questions associated with this tag
  showCount?: boolean; // Whether to show that count
  compact?: boolean; // Whether to render a compact version
  remove?: boolean; // Whether to show a "remove" (X) icon
  isButton?: boolean; // Whether to render as a <button> instead of a <Link>
  handleRemove?: () => void; // Callback when remove icon is clicked
}

// TagCard component definition
const TagCard = ({
  _id,
  name,
  questions,
  showCount,
  compact,
  remove,
  isButton,
  handleRemove,
}: Props) => {
  // Get the CSS class for the icon based on the tag name (e.g., "devicon-react-original")
  const iconClass = getDeviconClassName(name);

  // Helper click handler to prevent the default button or link behavior
  // This fixes the issue where clicking remove causes the form to accidentally submit or page to scroll
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Stop default behavior (like form submission)
  };

  // JSX for the tag’s main visual content (badge + optional remove icon + optional count)
  const Content = (
    <>
      {/* Badge wrapper (styled label with icon and name) */}
      <Badge className="subtle-medium background-light800_dark300 text-dark400_light500 rounded-md border-none px-4 py-2 uppercase flex flex-row gap-2">
        <div className="flex-center space-x-2">
          {/* Icon representing the tag */}
          <i className={`${iconClass} text-sm`}></i>
          {/* Tag name text */}
          <span>{name}</span>
        </div>

        {/* Optional remove (X) icon, only shown when `remove` prop is true */}
        {remove && (
          <Image
            src="/icons/close.svg"
            width={12}
            height={12}
            alt="close icon"
            className="cursor-pointer object-contain invert-0 dark:invert"
            onClick={handleRemove} // Trigger remove callback when clicked
          />
        )}
      </Badge>

      {/* Optional question count (shown when showCount is true) */}
      {showCount && (
        <p className="small-medium text-dark500_light700">{questions}</p>
      )}
    </>
  );

  // If compact mode is enabled, choose between button or link version
  if (compact) {
    return isButton ? (
      // Render as a button (used when clickable but not for navigation)
      <button onClick={handleClick}>{Content}</button>
    ) : (
      // Render as a Next.js link (used for navigation to a tag page)
      <Link href={ROUTES.TAGS(_id)} className="flex justify-between gap-2">
        {Content}
      </Link>
    );
  }

  // (Optional) — You could add a non-compact version rendering here if needed
};

export default TagCard;
