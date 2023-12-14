import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import UserProfile from "@/app/components/UserProfile";
import { insertUsers } from "@/app/db";

export default withPageAuthRequired(async function ProfileServer() {
  const session = await getSession();

    await insertUsers(session);  

  return <UserProfile />;
});
