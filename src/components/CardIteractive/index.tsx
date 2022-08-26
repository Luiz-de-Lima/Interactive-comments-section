import React, { useEffect, useState } from "react";
import iconMinus from "../../assets/icon-minus.svg";
import iconPlus from "../../assets/icon-plus.svg";
import iconReply from "../../assets/icon-reply.svg";
import data from "../../../public/data.json";

import "./styles.scss";

export const CardInteractive = () => {
  const [comments, setUpdateComments] = useState(data.comments);
  
  
  return (
    <>
      {comments.map((item) => (
        <div key={item.id} className="container">
          <div className="container-liked">
            <img src={iconPlus} alt="" />
            <span>{item.score}</span>
            <img src={iconMinus} alt="" />
          </div>

          <div className="container-profile">
            <div className="container-profile__post">
              <img src="" alt="" />
              <img src={item.user.image.png} alt="profile" />
              <img src="" alt="" />
              <p className="post__profile">{item.user.username}</p>
              <p>{item.createdAt}</p>
            </div>

            <div className="container-profile__reply">
              <img src={iconReply} alt="" />
            </div>
            <div className="container-profile__comment">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
