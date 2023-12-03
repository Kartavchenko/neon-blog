"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { FiSettings } from "react-icons/fi";
import { UserProfilePageSkeleton } from "@/app/ui/skeletons";
import Avatar from "./Avatar";

export default function UserProfile() {
  const { user, error, isLoading } = useUser();

  // const findRegisterUser = await prisma.user.findFirst({
  //   where: { neonNickName: loggedUser.user.nickname },
  // });

  // if (!findRegisterUser) {
  //   await prisma.user.create({
  //     data: {
  //       email: loggedUser.user.email,
  //       name: loggedUser.user.name,
  //       neonNickName: loggedUser.user.nickname,
  //     },
  //   });
  // }

  if (isLoading) {
    return <UserProfilePageSkeleton />;
  }

  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div className="pt-5">
        <div className="flex place-items-center place-content-between">
          <h2>{user.name || user.nickname}</h2>
          <Avatar avatarUrl={user.picture} nickName={user.nickname} />
        </div>
        <div className="divider"></div>
        <p>{user.email}</p>
        <div className="divider"></div>
        <Link
          className="flex gap-1 place-items-center"
          href="/profile/settings"
        >
          <FiSettings /> Settings
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2>
        To get access to the management functions in Neon Blog you must log in
        or create an account
      </h2>
      <Link className="btn btn-lg" href="api/auth/login">
        Log in
      </Link>
    </div>
  );
}
