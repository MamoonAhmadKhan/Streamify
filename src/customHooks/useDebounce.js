import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../toolkit/searchSlice";
import { YT_SUGGESTION_API } from "../utils/youtubeApi";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const cachedResult = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!value) {
      setDebouncedValue([]);
      return;
    }

    const timer = setTimeout(() => {
      if (cachedResult[value]) {
        return cachedResult;
      }
      else {
      const fetchSuggestions = async () => {
        try {
          const res = await fetch(`${YT_SUGGESTION_API}${value}`);
          const data = await res.json();
          dispatch(cacheResults({ [value]: data[1] }));
          setDebouncedValue(data[1]);
        } catch (err) {
          console.error(`Error fetching suggestions : ${err}`);
        }
      };
      fetchSuggestions();
    }

      // Save in Redux cache
      //        dispatch(cacheResults({ [value]: result }));

      // Update local debounced value
      //      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};
