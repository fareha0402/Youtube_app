/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/appSlice";
import { useSearchParams } from "react-router";
import CommentsContainer from "./CommentsContainer";

const Watch = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div>
    <div className="col-span-10 p-3 m-5 ">
      <iframe
        className="rounded-xl"
        width="760"
        height="415"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")+ '?autoplay=1'}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    <CommentsContainer/>
    </div>
  );
};

export default Watch;
