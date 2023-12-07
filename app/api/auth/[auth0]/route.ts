// import { handleAuth } from '@auth0/nextjs-auth0';

// export const GET = handleAuth();

import { handleAuth, handleCallback } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
    callback: handleCallback({ redirectUri: "http://localhost:3000/search" }),
});
