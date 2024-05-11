import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    publicRoutes:[
        '/',
        '/api/webhook'
    ],
    ignoredRoutes:[
        '/',
        '/api/webhook'
    ]
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  
};