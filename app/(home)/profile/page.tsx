import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/dist/client/link";
import { FiSettings } from "react-icons/fi";
import { redirect } from "next/navigation";

export default async function ProfileServer() {
  const isLogin = await getSession();

  return isLogin ? (
    <div>
      {/* <img src={user.picture} alt={user.name} /> */}
      <h2>{isLogin.user.nickname}</h2>
      <p>{isLogin.user.email}</p>
      <Link href="/api/auth/logout">LOGOUT</Link>
      <Link href="/settings">
        <FiSettings />
      </Link>
    </div>
  ) : (
    redirect("/api/auth/login")
  );
}

// import React from 'react';
// import { InferGetServerSidePropsType } from 'next';
// import { pageRouterAuth } from '../../lib/auth0';
// import Layout from '@/components/layout';

// export default function Profile({ user }: InferGetServerSidePropsType<typeof getServerSideProps>): React.ReactElement {
//   return (
//     <Layout>
//       <h1>Profile (server rendered)</h1>
//       <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
//     </Layout>
//   );
// }

// export const getServerSideProps = pageRouterAuth.withPageAuthRequired();
