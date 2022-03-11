import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import Link from "next/link";

import Field from "./field";
import { setUsername } from "../redux/slice";

const styles = {
  padding: "8px 0px",
  marginBottom: "12px",
  width: "100%",
};

interface LoginFormProps {
  dispatch: any;
}

export default function LoginForm({ dispatch }: LoginFormProps) {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const onSubmit = (data: any) => {
    dispatch(setUsername(data.username));
  };

  return (
    <form
      className="shadow-xl hover:shadow-2xl grid grid-cols-2 gap-x-4 py-8 px-14 bg-slate-50"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1
        className="text-3xl font-bold mb-6 col-span-2"
        style={{ marginBottom: styles.marginBottom }}
      >
        Subscribe
      </h1>
      <Field control={control} name="username" sx={styles} />
      <Field control={control} name="firstname" sx={styles} />
      <Field control={control} name="lastname" sx={styles} />
      <Field control={control} name="email" sx={styles} classes="col-span-2" />
      <Field control={control} name="password" sx={styles} />
      <Field control={control} name="confirm_password" sx={styles} />
      <Button
        type="submit"
        variant="contained"
        className="col-start-2"
        sx={{
          color: "black",
          "&:hover": {
            color: "white",
          },
        }}
      >
        Submit
      </Button>
      <div className="text-blue-400 hover:text-blue-500">
        <Link href="/login">Connect Yourself</Link>
      </div>
    </form>
  );
}
