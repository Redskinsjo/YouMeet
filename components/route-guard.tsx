// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import { useSelector } from "react-redux";

// // import { userService } from "services";
// import { RootState } from "../redux/store";
// import events from "events";

// // export { RouteGuard };

// export default function PrivateRoute({ protectedRoutes, children }: any) {
//   const router = useRouter();
//   //   const { isAuthenticated, isLoading } = useAuth();
//   const username = useSelector((state: RootState) => state.user.username);
//   console.log(router);
//   const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;

//   useEffect(() => {
//     if (!username && pathIsProtected) {
//       // Redirect route, you can point this to /login
//       router.push("/login");
//     }
//   }, [username, pathIsProtected]);

//   //   if ((isLoading || !isAuthenticated) && pathIsProtected) {
//   //     return <FullPageLoader />;
//   //   }

//   return children;
// }

// function RouteGuard({ children }: { children: any }) {
//   const router = useRouter();
//   const [authorized, setAuthorized] = useState(false);
//   const username = useSelector((state: RootState) => state.user.username);

//   useEffect(() => {
//     // on initial load - run auth check
//     // authCheck(router.asPath);

//     // on route change start - hide page content by setting authorized to false
//     // const hideContent = () => setAuthorized(false);
//     // router.events.on("routeChangeStart", authCheck);

//     // on route change complete - run auth check
//     // router.events.on("routeChangeComplete", authCheck);

//     // unsubscribe from events in useEffect return function
//     return () => {
//       //   router.events.off("routeChangeStart", hideContent);
//       //   router.events.off("routeChangeComplete", authCheck);
//     };

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   function authCheck(url: any) {
//     // redirect to login page if accessing a private page and not logged in
//     // const publicPaths = ["/login"];
//     // const path = url.split("?")[0];
//     // if (!userService.userValue && !publicPaths.includes(path)) {
//     console.log(url);
//     if (!username) {
//       setAuthorized(false);
//       router.push({
//         pathname: "/login",
//         // query: { returnUrl: router.asPath },
//       });
//     } else {
//       setAuthorized(true);
//     }
//   }

//   return children;
// }
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../redux/store";

export default function RouteGuard({ children }: any) {
  const username = useSelector((state: RootState) => state.user.username);
  const authenticated = useAuth(username);
  console.log("username", username);
  console.log("hello", authenticated);
  return authenticated && children;
}

const useAuth = (username: any) => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    if (!username) {
      setAuthenticated(false);
      router.push("/login");
      console.log("me");
    } else {
      setAuthenticated(true);
    }
  }, []);
  return authenticated;
};
