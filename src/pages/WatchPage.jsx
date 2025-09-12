import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../toolkit/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "../components/CommentsContainer";
import LiveChat from "../components/LiveChat";
import { YT_API } from "../utils/youtubeApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faEllipsis,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBookmark,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";

const WatchPage = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [yt_Data, setYtData] = useState([]);

  const itemId = searchParams.get("v");

  const fetchYTData = async () => {
    const res = await fetch(YT_API);
    const data = await res.json();
    const currentData = data.items.filter((curr) => {
      return curr.id === itemId;
    });
    setYtData(currentData[0]);
  };

  useEffect(() => {
    dispatch(closeMenu());
    fetchYTData();
  }, []);

  const date = new Date();
  const options = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-GB", options);

  const viewCount = yt_Data?.statistics?.viewCount;
  const formattedViewCount = viewCount 
  ? Number(viewCount).toLocaleString("en-US") 
  : "0";

  return (
    <div className="w-full mx-8 my-8 space-y-2">
      <div className="flex items-center justify-between space-x-5">
        <div className="w-full">
          <iframe
            className="rounded-xl"
            width="800"
            height="450"
            src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <LiveChat />
      </div>

      <div className="w-[800px] mt-3 space-y-3 mb-3">
        <div>
          <h1 className="text-lg font-bold">{yt_Data?.snippet?.title}</h1>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center space-x-3">
            <FontAwesomeIcon icon={faCircleUser} size="2xl" />
            <div>
              <p className="text-sm font-bold">
                {yt_Data?.snippet?.channelTitle}
              </p>
              <p className="text-xs text-gray-300">4.29M subscribers</p>
            </div>
            <button className="bg-neutral-800 cursor-pointer hover:bg-neutral-700 font-semibold font-mono py-1.5 ml-4 rounded-full px-5">
              Subscribed
            </button>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <div className="bg-neutral-800 cursor-pointer hover:bg-neutral-700 font-semibold font-mono py-1.5 rounded-full">
              <FontAwesomeIcon className="px-3 pl-3" icon={faThumbsUp} />
              |
              <FontAwesomeIcon className="px-3 pr-3" icon={faThumbsDown} />
            </div>
            <div className="flex items-center justify-between cursor-pointer hover:bg-neutral-700 space-x-2 bg-neutral-800 font-semibold font-mono py-1.5 rounded-full px-3">
              <FontAwesomeIcon icon={faShare} />
              <span>Share</span>
            </div>
            <div className="flex items-center justify-between cursor-pointer hover:bg-neutral-700 space-x-2 bg-neutral-800 font-semibold font-mono py-1.5 rounded-full px-3">
              <FontAwesomeIcon icon={faBookmark} />
              <span>Save</span>
            </div>
            <div className="bg-neutral-800 font-semibold cursor-pointer hover:bg-neutral-700 font-mono py-1.5 px-2 rounded-full">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[800px] mt-3 space-y-1 mb-3 bg-neutral-800 rounded-xl p-4 text-sm font-sans">
        <p className="flex items-center justify-baseline space-x-3 font-bold">
          <span>{formattedViewCount} views</span>
          <span>{formattedDate}</span>
        </p>
        {
        showDescription ? (
        <p className={"leading-loose"}>
          {yt_Data?.snippet?.description}
        </p>) : (
          <p className="leading-loose">
            {(yt_Data?.snippet?.description).slice(0, 200)}
          </p>
        )
        }
        <p onClick={() => setShowDescription(!showDescription)}
        className={`font-semibold cursor-pointer mt-8 ${showDescription ? 'block' : 'inline'}`}
        >
          {showDescription ? 'Show less' : '... more'}
        </p>
      </div>

      <CommentsContainer commentCount={yt_Data?.statistics?.commentCount} />
    </div>
  );
};

export default WatchPage;
