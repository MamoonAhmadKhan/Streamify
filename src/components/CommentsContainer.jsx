import React from "react";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Mamoon Ahmad",
      text: "lorem ipsum dolor amet react with mamoon",
      replies: [],
    },
    {
      name: "Mamoon Ahmad",
      text: "lorem ipsum dolor amet react with mamoon",
      replies: [
        {
          name: "Mamoon Ahmad",
          text: "lorem ipsum dolor amet react with mamoon",
          replies: [
            {
              name: "Mamoon Ahmad",
              text: "lorem ipsum dolor amet react with mamoon",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Mamoon Ahmad",
      text: "lorem ipsum dolor amet react with mamoon",
      replies: [
        {
          name: "Mamoon Ahmad",
          text: "lorem ipsum dolor amet react with mamoon",
          replies: [
            {
              name: "Mamoon Ahmad",
              text: "lorem ipsum dolor amet react with mamoon",
              replies: [
                {
                  name: "Mamoon Ahmad",
                  text: "lorem ipsum dolor amet react with mamoon",
                  replies: [
                    {
                      name: "Mamoon Ahmad",
                      text: "lorem ipsum dolor amet react with mamoon",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Mamoon Ahmad",
      text: "lorem ipsum dolor amet react with mamoon",
      replies: [],
    },
    {
      name: "Mamoon Ahmad",
      text: "lorem ipsum dolor amet react with mamoon",
      replies: [],
    },
    {
      name: "Mamoon Ahmad",
      text: "lorem ipsum dolor amet react with mamoon",
      replies: [],
    },
    {
      name: "Mamoon Ahmad",
      text: "lorem ipsum dolor amet react with mamoon",
      replies: [],
    },
    {
      name: "Mamoon Ahmad",
      text: "lorem ipsum dolor amet react with mamoon",
      replies: [],
    },
  ];

  return (
    <div className="w-[800px]">
      <h2 className="font-bold text-2xl">Comments:</h2>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
