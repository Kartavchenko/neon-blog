import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import UserProfile from "@/app/components/UserProfile";
import axios from "axios";

export default withPageAuthRequired(async function ProfileServer() {
  const session = await getSession();

  if (session) {
    await axios.post("http://localhost:3000/api/create-user", session)
  }

  return <UserProfile />;
});
