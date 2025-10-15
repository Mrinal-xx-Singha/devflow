import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}
const questions = [
  {
    _id: "1",
    title: "How to learn React ?",
    description: "I want to learn React, can anyone help me ?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "Javascript" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6",
    },
    upVotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date("2023-10-01"),
  },
  {
    _id: "2",
    title: "How to learn Javascript ?",
    description: "I want to learn Javascript, can anyone help me ?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "Javascript" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6",
    },
    upVotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date("2023-09-15"),
  },
];

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;
  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <>
      <section className="flex w-full flex-col-reverse sm:flex-row justify-between gap-4 sm:items-center">
        <h1 className="text-dark100_light900 h1-bold ">All Questions</h1>

        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <search className="mt-11">
        {/* additional informations  as props*/}
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="search Questions ..."
          otherClasses="flex-1"
        />
      </search>
      {/* Home filter component */}
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
