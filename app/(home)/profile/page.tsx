import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import UserProfile from "@/app/components/UserProfile";
import { prisma } from "@/app/db";

export default withPageAuthRequired(async function ProfileServer() {
  const session = await getSession();

  const registeredUser = await prisma.user.findFirst({
    where: { email: session?.user.email },
  });

  if (!registeredUser) {
    await prisma.user.create({
      data: {
        email: session?.user.email,
        name: session?.user.name,
        neonNickName: session?.user.nickname,
        accessT: session?.accessToken,
      },
    });
  }

  return <UserProfile />;
});
