import { fetchAuthSession, fetchUserAttributes } from "aws-amplify/auth/server";
import { NextRequest, NextResponse } from "next/server";
import { runWithAmplifyServerContext } from "@/app/utils/amplifyServerUtils";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  const authenticatedAndAuthorized = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      const { pathname } = request.nextUrl;
      try {
        const session = await fetchAuthSession(contextSpec);
        if (
          session.tokens?.accessToken !== undefined &&
          session.tokens?.idToken !== undefined
        ) {
          const userAttributes = await fetchUserAttributes(contextSpec);
          try {
            console.log(pathname, userAttributes["custom:householdID"]);
            if (pathname.startsWith(`/${userAttributes["custom:householdID"]}`) || pathname === "/"){
              return "authorized";
            } else {
              return "not authorized";
            }
          } catch (error) {
            console.log(error);
            return "not authorized";
          }
        }
        else {
            return "not authenticated";
        };
      } catch (error) {
        console.log(error);
        return "not authenticated";
      }
    },
  });
  
  switch (authenticatedAndAuthorized) {
    case "authorized":
      return response;
    case "not authenticated":
      return NextResponse.redirect(new URL("/sign-in", request.url));
    case "not authorized":
      return NextResponse.redirect(new URL("/unauthorized", request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|unauthorized|_next/image|favicon.ico|sign-in).*)",
  ],
};
