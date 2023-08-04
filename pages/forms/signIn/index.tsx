import { ZodType, z } from "zod";
import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../Input";
import Layout from "../Layout";
import { useEffect } from "react";
import Divider from "../../../components/layout/Divider";

const optionErrorMessage = "Error: username or email not filled in.";

type ISignInForm = {
  userName?: string;
  emailAddress?: string;
  signInOptionError?: string;
  password: string;
};

const schema: ZodType<ISignInForm> = z
  .object({
    userName: z.string().trim().min(2).max(30).optional().or(z.literal("")),
    emailAddress: z.string().trim().email().optional().or(z.literal("")),
    password: z.string().trim().min(8).max(20),
  })
  .refine((data) => data.userName || data.emailAddress, {
    message: optionErrorMessage,
    path: ["signInOptionError"],
  });
// .refine((data) => data.userName || data.emailAddress, signInOptionError);

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ISignInForm>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    isSubmitSuccessful && reset();
  }, [isSubmitSuccessful, reset]);

  const onSubmit = () => {
    console.log("submitting...");
  };

  const onErrors = (errors: FieldErrors<ISignInForm>) => {
    console.log(errors);
  };

  return (
    <Layout title="Sign In">
      <form onSubmit={handleSubmit(onSubmit, onErrors)}>
        <Input<ISignInForm>
          identifier={"userName"}
          error={errors.userName}
          labelTitle={"Username"}
          register={register}
          placeHolder={"E.g john-doe"}
        />
        <Divider text={"Or"} className="mb-2" />

        <Input<ISignInForm>
          identifier={"emailAddress"}
          error={errors.emailAddress}
          labelTitle={"Email Address"}
          register={register}
          placeHolder={"E.g name@example.com"}
          inputType={"email"}
        />
        <Input<ISignInForm>
          identifier={"password"}
          error={errors.password}
          labelTitle={"Password"}
          register={register}
          placeHolder={"Password must be at least 8 letters"}
          inputType={"password"}
        />
        <p className="text-red-700 font-semibold text-xs h-4">
          {errors.signInOptionError && errors.signInOptionError.message}
        </p>
        <button
          className={`border rounded-lg  w-full ${
            isDirty ? "bg-green-800" : "bg-gray-500"
          } text-white font-semibold  px-4 py-2 my-4`}
          disabled={!isDirty || isSubmitting}
        >
          Sign in
        </button>
      </form>
    </Layout>
  );
};

export default SignIn;
