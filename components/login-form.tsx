import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

import Field from "./field";
import { setUsername } from "../redux/slice";

interface LoginFormProps {
  dispatch: any;
}

const styles = {
  padding: "8px 0px",
  marginBottom: "12px",
  width: "100%",
};

export default function LoginForm({ dispatch }: LoginFormProps) {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { username: "", password: "" } });

  const router = useRouter();

  const onSubmit = (data: any) => {
    dispatch(setUsername(data.username));
    router.push("/");
    console.log(data);
  };

  return (
    <form
      className="shadow-xl hover:shadow-2xl flex flex-col py-8 px-14 bg-slate-50"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1
        className="text-3xl font-bold mb-6"
        style={{ marginBottom: styles.marginBottom }}
      >
        Connect yourself
      </h1>
      <Field control={control} name="username" sx={styles} />
      {/* <Field control={control} name="password" sx={styles} /> */}
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          type="submit"
          variant="contained"
          sx={{
            color: "black",
            "&:hover": {
              color: "white",
            },
          }}
        >
          Submit
        </Button>
      </div>
      <div className="text-blue-400 hover:text-blue-500">
        <Link href="/signup">Sign up</Link>
      </div>
    </form>
  );
}
