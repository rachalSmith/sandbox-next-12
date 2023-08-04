import { ZodType, z } from "zod";
import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../Input";
import Layout from "../Layout";
import { useEffect } from "react";

type ISignUpForm = {
  firstName: string;
  lastName: string;
  userName: string;
  emailAddress: string;
  password: string;
  confirmPassword: string;
};

const schema: ZodType<ISignUpForm> = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(2, { message: "Too small" })
      .max(30, { message: "Too Long" }),
    userName: z.string().trim().min(2).max(30),
    lastName: z.string().trim().min(2).max(30),
    emailAddress: z.string().trim().email(),
    password: z.string().trim().min(8).max(20),
    confirmPassword: z.string().trim().min(8).max(20),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ISignUpForm>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    isSubmitSuccessful && reset();
  }, [isSubmitSuccessful, reset]);

  const onSave = (data: ISignUpForm) => {
    console.log(data);
  };

  const onSubmit = () => {
    console.log("submitting...");
  };

  const onErrors = (errors: FieldErrors<ISignUpForm>) => {
    console.log("ERRORS:", errors);
  };

  return (
    <Layout title="Sign Up">
      <form onSubmit={handleSubmit(onSubmit, onErrors)}>
        <div className="flex flex-wrap">
          <Input<ISignUpForm>
            className={"w-full sm:mr-4 sm:w-[47.5%]"}
            identifier={"firstName"}
            error={errors.firstName}
            labelTitle={"First Name"}
            register={register}
            placeHolder={"E.g John"}
          />
          <Input<ISignUpForm>
            className={"w-full sm:w-[47.5%]"}
            identifier={"lastName"}
            error={errors.lastName}
            labelTitle={"Last Name"}
            register={register}
            placeHolder={"E.g Doe"}
          />
        </div>
        <Input<ISignUpForm>
          identifier={"userName"}
          error={errors.userName}
          labelTitle={"Username"}
          register={register}
          placeHolder={"E.g john-doe"}
        />
        <Input<ISignUpForm>
          identifier={"emailAddress"}
          error={errors.emailAddress}
          labelTitle={"Email Address"}
          register={register}
          placeHolder={"E.g name@example.com"}
          inputType="email"
        />
        <div className="flex flex-wrap">
          <Input<ISignUpForm>
            className={"w-full sm:mr-4 sm:w-[47.5%]"}
            identifier={"password"}
            error={errors.password}
            labelTitle={"Password"}
            register={register}
            placeHolder={"Password must be at least 8 letters"}
            inputType={"password"}
          />
          <Input<ISignUpForm>
            className={"w-full sm:w-[47.5%]"}
            identifier={"confirmPassword"}
            error={errors.confirmPassword}
            labelTitle={"Confirm Password"}
            register={register}
            placeHolder={"Passwords must match"}
            inputType={"password"}
          />
        </div>

        <button
          className={`border rounded-lg  w-full ${
            isDirty ? "bg-green-800" : "bg-gray-500"
          } text-white font-semibold  px-4 py-2 my-4`}
          disabled={!isDirty || isSubmitting}
        >
          Sign Up
        </button>
      </form>
    </Layout>
  );
};

export default SignUp;
