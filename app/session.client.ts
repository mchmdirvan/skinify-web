import { createCookieSessionStorage } from "react-router";

type SessionData = {
  token: string;
};

type SessionFlashData = {
  error: string;
};

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
      name: "__session",

      httpOnly: true,
      maxAge: 60,
      path: "/",
      sameSite: "lax",
      secrets: [import.meta.env.VITE_COOKIES_SECRET_KEY],
      secure: true,
    },
  });

export { getSession, commitSession, destroySession };
