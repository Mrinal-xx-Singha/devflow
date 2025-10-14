"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { formUrlQuery } from "@/lib/url";
import { removeKeysFromQuery } from "@/lib/url";
const filters = [
  { name: "React", value: "react" },
  { name: "Javascript", value: "javascript" },

  //   { name: "Newest", value: "newest" },
  //   { name: "Popular", value: "Popular" },
  //   { name: "Unanswered", value: "unanswered" },
  //   { name: "Recommended", value: "recommended" },
];

const HomeFilter = () => {
  const router = useRouter();

  //
  const searchParams = useSearchParams();
  const filterParams = searchParams.get("filter");
  const [active, setActive] = useState(filterParams || "");

  const handleTypeClick = (filter: string) => {
    // up a scope newUrl defination for using the router.push
    let newUrl = "";
    // if filter is not present
    if (filter === active) {
      setActive("");
      newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
    } else {
      // if filter is present
      setActive(filter);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: filter.toLowerCase(),
      });
    }
    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="mt-10 hidden flex-wrap gap-3 sm:flex">
      {filters.map((filter) => (
        <Button
          className={cn(
            `body-medium rounded-lg px-6 py-3
         capitalize shadow-none`,
            active === filter.value
              ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
              : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
          )}
          key={filter.name}
          onClick={() => handleTypeClick(filter.value)}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
