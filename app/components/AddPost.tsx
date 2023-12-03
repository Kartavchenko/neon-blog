
async function addPost(data: FormData) {
  "use server"

  const title = data.get("title")?.valueOf()
  const hashtag = data.get("hashtag")?.valueOf()

  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title")
  }

  if (typeof hashtag !== "string" || hashtag.length === 0) {
    throw new Error("Invalid hashtag")
  }

  // await prisma.post.create(data)
  console.log(data)
}

export default function AddPost() {

  return (
    <form className="flex flex-col gap-y-2" action={addPost}>
      <label htmlFor="title"></label>
      <input
        className="input-xl input"
        id="title"
        name="title"
        type="text"
      />
      <label htmlFor="hashtag"></label>
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
