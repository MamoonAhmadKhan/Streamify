import React from "react";
import CommentsList from "./CommentsList";

const CommentsContainer = (props) => {
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

  const formattedCommentCount = props?.commentCount 
  ? Number(props?.commentCount).toLocaleString("en-US") 
  : "0";

  return (
    <div className="w-[800px] mt-10">
      <h2 className="font-bold text-2xl">{formattedCommentCount} Comments</h2>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
