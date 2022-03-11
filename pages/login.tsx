import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import LoginForm from "../components/login-form";
import Header from "../components/header";
import { RootState } from "../redux/store";
import { withPublic } from "../components/route-protection";

function Login() {
  const dispatch = useDispatch();
  const username = useSelector((state: RootState) => state.user.username);
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(username ? true : false);

  useEffect(() => {
    if (authenticated) {
      router.push("/");
    }
  }, []);
  return (
    <div className="h-full">
      <Head>
        <title>Login</title>
      </Head>
      <Header classes="absolute w-full" />
      <div className="flex items-center justify-center absolute w-full h-full">
        <LoginForm dispatch={dispatch} />
      </div>
    </div>
  );
}

export default Login;
// export default withPublic(Login);
