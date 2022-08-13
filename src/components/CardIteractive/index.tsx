import React from "react";
import iconMinus from "../../assets/icon-minus.svg";
import iconPlus from "../../assets/icon-plus.svg";
import iconReply from "../../assets/icon-reply.svg";
import profileDog from "../../assets/profiledog.png";

import "./styles.scss";

export const CardInteractive = () => {
  return (
    <div className="container">
      <div className="container-liked">
        <img src={iconPlus} alt="" />
        <span>12</span>
        <img src={iconMinus} alt="" />
      </div>

      <div className="container-profile">
        <div className="container-profile__post">
          <img src={profileDog} alt="profile" />
          <p className="post__profile">amyrobson</p>
          <p>1 month ago</p>
        </div>

        <div className="container-profile__reply">
          <img src={iconReply} alt="" />
        </div>
        <div className="container-profile__comment">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            architecto itaque quaerat molestias error animi earum quis
            assumenda, sint et odit iste quisquam praesentium consequatur
            temporibus magnam sed quia dolor.
          </p>
        </div>
      </div>
    </div>
  );
};
