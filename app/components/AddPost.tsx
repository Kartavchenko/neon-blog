"use client";

import { useState } from "react";

export default function AddPost() {
  const [titlePost, setTitlePost] = useState("");
  const [descriptionText, setdescriptionText] = useState("");

  const handleTitleText = (e: React.ChangeEvent<HTMLInputElement> ) => {
    setTitlePost(e.target.value)
  }

  const handleDescriptionText = (e: React.ChangeEvent<HTMLTextAreaElement> ) => {
    setdescriptionText(e.target.value)
  }

  return (
    <form action="">
      <label htmlFor="title"></label>
      <input
        id="title"
        type="text"
        value={titlePost}
        onChange={handleTitleText}
      />
      <label htmlFor="description"></label>
      <textarea
        name="description"
        id="description"
        value={descriptionText}
        onChange={handleDescriptionText}
      >
      </textarea>
      <button type="submit">Post</button>
    </form>
  );
}
