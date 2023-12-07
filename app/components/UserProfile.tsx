"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { FiSettings } from "react-icons/fi";
import { UserProfilePageSkeleton } from "@/app/ui/skeletons";
import Avatar from "./Avatar";

export default function UserProfile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <UserProfilePageSkeleton />;
  }

  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div className="pt-5">
        <div className="flex place-items-center place-content-between">
          <h2>{user.nickname || user.name}</h2>
          <Avatar
            avatarUrl={user.picture}
            nickName={user.nickname}
            size="avatar-xl"
          />
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
}
