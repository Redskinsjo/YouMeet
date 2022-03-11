import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import { useRouter } from "next/router";

import SignupForm from "../components/signup-form";
import Header from "../components/header";
import { RootState } from "../redux/store";

export default function Login() {
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
        <title>Signup</title>
      </Head>
      <Header classes="absolute w-full" />
      <div className="flex items-center justify-center absolute w-full h-full">
        <SignupForm dispatch={dispatch} />
      </div>
    </div>
  );
}
