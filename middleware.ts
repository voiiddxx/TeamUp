import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


// export const authMiddleware();
const isProtectedRoute = createRouteMatcher([
    '/',
    '/dashboard',
])
export default clerkMiddleware((auth , req)=>{
    if(isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};









// import { authMiddleware } from "@clerk/nextjs/server";

// export const authMiddleware({
//     publicRoutes:[
//         '/',
//         '/api/webhook'
//     ],
//     ignoredRoutes:[
//         '/',
//         '/api/webhook'
//     ]
// });

// export const config = {
//   matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  
// };