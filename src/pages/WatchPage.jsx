import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../toolkit/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "../components/CommentsContainer";
import LiveChat from "../components/LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="mx-8 my-8 space-y-8" >
      <div className="flex items-center justify-between space-x-7">
        <div>
      <iframe
        className="rounded-xl"
        width="800"
        height="450"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      </div>
      <LiveChat />
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
