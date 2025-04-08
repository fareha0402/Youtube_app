import React, { useEffect, useState } from "react";
import {
  MENU_LOGO,
  USER_LOGO,
  YOUTUBE_API_SUGGESTIONS,
  YOUTUBE_LOGO,
} from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import { useNavigate } from "react-router";
import { cacheResults } from "../store/searchSlice";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestion] = useState([]);
  const [showSuggestionPanel, setShowSuggestionPanel] = useState(false);
  const searchCache = useSelector(store => store.search)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSideBar = () => {
    dispatch(toggleMenu());
  };
  const callAPISuggestions = async () => {
    // console.log("API call " + searchInput);
    const suggestions = await fetch(YOUTUBE_API_SUGGESTIONS + searchInput);
    const jsonData = await suggestions.json();
    setSuggestion(jsonData[1]);
    dispatch(cacheResults({[searchInput]:jsonData[1]}))
  };
  useEffect(() => {
    /* Implement Debounce -- if diff between 2 keyatrokes is less than 200; don't make API call.
     key- i
      - render UI
      -useEffect()
      - start timer and make API call after 200 ms(every render creates new variable)
     key - ip
      - destroy the component(unmount- useEffect return method)
      - re render -UI
      - useEffect()
      - start timer and make API call after 200 ms
    */
    const timer = setTimeout(() => {
      if(searchCache[searchInput]){
        setSuggestion(searchCache[searchInput])
      }
      else{
      callAPISuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);
  return (
    <>
      <div className="grid grid-flow-col shadow-lg">
        <div className="flex col-span-2 ml-5">
          <img
            alt="menu"
            onClick={handleSideBar}
            src={MENU_LOGO}
            className="w-10 cursor-pointer"
          ></img>
          <img
            alt="youtube"
            onClick={() => {
              navigate({ pathname: "/" });
              dispatch(toggleMenu());
            }}
            src={YOUTUBE_LOGO}
            className="w-10 m-2 cursor-pointer"
          />
        </div>
        <div className="relative col-span-7">
          <input
            className="rounded-l-full border border-gray-400 mt-2 p-2 w-3/4"
            value={searchInput}
            onInput={(e) => {
              setSearchInput(e.target.value);
            }}
            onFocus={() => setShowSuggestionPanel(true)}
            onBlur={() => setShowSuggestionPanel(false)}
          ></input>
          <button className="bg-gray-100 rounded-r-full w-15 mt-2 border border-gray-400 p-2">
            Search
          </button>
        </div>
        <div className="col-span-3 ml-50">
          <img alt="user" src={USER_LOGO} className="w-12 m-3 cursor-pointer" />
        </div>
      </div>
      {showSuggestionPanel && suggestions.length &&<div className="bg-white absolute z-20 top-12 left-2/12 p-2 m-2 shadow-lg w-120 h-screen rounded-xl border-gray-50">
        <ul>
          {suggestions.map((result) => (
            <li className="p-1 m-2 text-lg hover:bg-gray-100 flex" key={result}>
              <img
                className="p-1"
                src="https://tse3.mm.bing.net/th?id=OIP.artsGkcWwb_UgjGqyw0shwHaHa&pid=Api&P=0&h=25"
              />
              {result}
            </li>
          ))}
        </ul>
      </div>}
    </>
  );
};

export default Header;
