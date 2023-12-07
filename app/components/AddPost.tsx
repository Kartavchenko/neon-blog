import { addPost } from "../actions/action";

export default function AddPost() {

  return (
    <form className="flex flex-col gap-y-2" action={addPost}>
      <label htmlFor="title">Title</label>
      <input
        className="input-xl input"
        id="title"
        name="title"
        type="text"
      />
      <label htmlFor="hashtag">Tags</label>
      <input
        className="input-xl input"
        id="hashtag"
        name="hashtag"
        type="text"
      />
      <button className="btn btn-solid-secondary" type="submit">Post</button>
    </form>
  );
}
