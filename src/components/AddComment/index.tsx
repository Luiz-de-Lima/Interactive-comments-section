import React, { useState } from "react";
import "./styles.scss";

type textArea = React.ChangeEvent<HTMLTextAreaElement>;
export const AddComment = () => {
  const [addComment, setAddComment] = useState("");

  const handleChange = (e: textArea) => {
    setAddComment(e.target.value);
  };

  const handleSendComment = () => {
    localStorage.setItem("comment", addComment);
    setAddComment("");
  };
  return (
    <div className="container-coment">
      <div className="container--content">
        <textarea
          placeholder="adicione um comentario"
          rows={10}
          onChange={handleChange}
          value={addComment}
        ></textarea>
        <button onClick={handleSendComment}>Enviar</button>
      </div>
    </div>
  );
};
