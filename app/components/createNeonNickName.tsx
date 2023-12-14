"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function CreateNeonNickName() {
  const { user } = useUser();

  // const updateUserNickname = async (data: FormData) => {
  //   const nickname = data.get("nickname")?.valueOf();

  //   if (typeof nickname !== "string" || nickname.length === 0) {
  //     throw new Error("Invalid nickname");
  //   }

  // };

  return (
    <div className="">
      <h2>
        Better way to change your nickname, other users will see or find you
        with this nickname{" "}
      </h2>
      <form
        // action={updateUserNickname}
      >
        <label htmlFor="title">Enter your nickname</label>
        <input
          className="input-xl input"
          id="nickname"
          name="nickname"
          type="text"
        />
        <button className="btn" type="submit">
          Done
        </button>
      </form>
    </div>
  );
}
