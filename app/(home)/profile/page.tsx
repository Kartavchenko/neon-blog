import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { FiSettings } from "react-icons/fi";
import { redirect } from "next/navigation";
import placeholder from "/images/portrait_placeholder_optimized.png";
import Image from "next/image";

export default async function ProfileServer() {
  const isLogin = await getSession();

  return isLogin ? (
    <div>
      <Image
        priority={true}
        src={isLogin.user.picture || placeholder}
        alt={isLogin.user.name || isLogin.user.nickname}
        width="150"
        height="150"
      />
      <h2>{isLogin.user.name || isLogin.user.nickname}</h2>
      <p>{isLogin.user.email}</p>
      <Link href="/api/auth/logout">LOGOUT</Link>
      <Link href="/profile/settings">
        <FiSettings />
      </Link>
    </div>
  ) : (
    redirect("/api/auth/login")
  );
}
