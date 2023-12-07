"use client"

import { useUser } from "@auth0/nextjs-auth0/client";
import { useState } from "react";

export default function CreateNeonNickName() {
  const { user } = useUser();

  return (
    <div className="">
      <h2>
        Better way to change your nickname, other users will see or find you
        with this nickname{" "}
      </h2>
      <label htmlFor="title">Enter your nickname</label>
      <input
        className="input-xl input"
        id="nickname"
        name="nickname"
        type="text"
      />
    </div>
  );
}
