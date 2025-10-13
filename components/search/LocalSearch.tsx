"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "../ui/input";
import { usePathname, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/url";
import { useRouter } from "next/navigation";
// pass props
interface Props {
  route: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearch = ({ route, imgSrc, placeholder, otherClasses }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState(query);

  // we will simply define a router
  //reload the function with route
  const newRouter = useRouter();
  useEffect(() => {
    {
      /* Delayed debounce */
    }
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });
        //  we use this router to push the new url and set scroll to false
        newRouter.push(newUrl, { scroll: false });
      } else {
        // if we dont have any thing in input
        //   remove the keys from query
        if (pathname === route) {
          const newUrl = removeKeysFromQuery({
            params: searchParams.toString(),
            keysToRemove: ["query"],
          });
          newRouter.push(newUrl, { scroll: false });
        }
      }
    }, 300);
    // clear timeout whenever settimeout inside useeffect
    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, newRouter, route, searchParams, pathname]);

  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      <Image
        src={imgSrc}
        width={24}
        height={24}
        alt="Search"
        className="cursor-pointer"
      />

      <Input
        type="text"
        className="paragraph-regular no-focus placeholder:text-dark400_light700 border-none shadow-none outline-none"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default LocalSearch;
