import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../toolkit/chatSlice";
import { generateRandomName } from "../utils/randomNamesForLiveChatFeature";
import { generateRandomString } from "../utils/randomStringGeneratorForChatFeature";

const LiveChat = () => {
    const [liveMessages, setLiveMessages] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const fn = setInterval(() => {
      //console.log("API Polling");
      // This is API polling with the delay of 2000 milliseconds
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomString(),
        })
      );
    }, 1000);

    return () => clearInterval(fn);
  }, []);

  return (
    <div className="w-full h-[450px] mr-15">
      <h1 className="text-center p-2 bg-gray-700 rounded-lg shadow cursor-pointer">
        LiveChat
      </h1>
      <div className="h-[400px] flex flex-col-reverse p-3 font-sans rounded-lg border border-black bg-slate-800 overflow-y-scroll">
        <div>
          {chatMessages.map((itr, index) => (
            <ChatMessage key={index} name={itr.name} message={itr.message} />
          ))}
        </div>
      </div>
      <form 
      className="flex items-center justify-between text-center p-2 bg-slate-800 rounded-lg shadow cursor-pointer" 
      onSubmit={(e) => {
        e.preventDefault();
        setLiveMessages("");
        dispatch(addMessage({
            name: "Mamoon",
            message: liveMessages
        }));
      }}
      >
        <input
          className="w-[80%] outline-none"
          type="text"
          placeholder="type your message"
          value={liveMessages}
          onChange={(e) => {
            setLiveMessages(e.target.value);
          }}
        />
        <button 
        className="bg-slate-900 p-1 text-sm rounded-lg font-bold cursor-pointer"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
