import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../toolkit/appSlice";
import { YT_SUGGESTION_API } from "../utils/youtubeApi";
import { useDebounce } from "../customHooks/useDebounce";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, SetShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const debouncedSearch = useDebounce(searchQuery, 200);

  useEffect(() => {

    const fetchSuggestions = async () => {
    try {
      // We can also implement cache mechanism for api search with redux-toolkit for repeated api call for same keystroke but the api is not working.
    // const res = await fetch(`${YT_SUGGESTION_API}${debouncedSearch}`);
    // const data = await res.json();
    // setSuggestions(data);
    //console.log(debouncedSearch);
    } catch (err) {
      console.error(`Error fetching suggestions : ${err}`);
    }
  };

  fetchSuggestions();
  }, [debouncedSearch]);

  const toggleSidebarHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-1 shadow shadow-white">
      <div className="logo flex items-center text-center text-xl col-span-2">
        <FontAwesomeIcon
          className="cursor-pointer"
          onClick={() => toggleSidebarHandler()}
          icon={faBars}
        />
        <h1 className="ml-8 text-2xl font-bold text-cyan-500">STREAMIFY</h1>
      </div>

      <div className="col-span-8">
        <div className="flex items-center justify-center input-search">
          <input
            className="border-1 p-1.5 w-4/6 rounded-l-full"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onFocus={() => SetShowSuggestions(true)}
            onBlur={() => SetShowSuggestions(false)}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="border-1 border-l-0 p-1.5 rounded-r-full cursor-pointer">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        {showSuggestions && suggestions.length !== 0 && (
          <div
            className={`fixed bg-gray-800 text-white left-116 w-[33rem] py-3 px-2 rounded-lg shadow-xl mt-1`}
          >
            <ul className="space-y-2 p-1">
              {suggestions.map((s) => {
                return (
                  <li key={s} className="hover:bg-gray-700">
                    <span className="pr-3">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>{" "}
                    {s}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-2 text-right text-2xl p-2">
        <FontAwesomeIcon icon={faCircleUser} />
      </div>
    </div>
  );
};

export default Header;
