import { ReactNode, useEffect } from "react";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { default as dayjs } from "dayjs";

import Container from "../../components/layout/Container";
import Layout from "./Layout";

interface IFormData {
  firstName: string;
  lastName: string;
  emailAddress: string;
  dateOfBirth: Date;
  age: number;
  password: string;
  confirmPassword: string;
}

const maxDate = dayjs(new Date()).subtract(18, "year").format("YYYY-MM-DD");

const schema: ZodType<IFormData> = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(2, { message: "This is a custom message" })
      .max(30),
    lastName: z.string().trim().min(2).max(30),
    emailAddress: z.string().trim().email(),
    dateOfBirth: z.date().max(dayjs(new Date()).subtract(18, "year").toDate()),
    age: z.number().min(18),
    password: z.string().trim().min(8).max(20),
    confirmPassword: z.string().trim().min(8).max(20),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

interface IContainerProps {
  children: ReactNode;
}

interface IErrorMessageProps {
  children: ReactNode;
}

const InputContainer = ({ children }: IContainerProps) => {
  return <div className="flex flex-col grow m-3">{children}</div>;
};

const FormErrorMessage = ({ children }: IErrorMessageProps) => {
  return <p className="text-red-700 font-semibold text-xs">{children}</p>;
};

// make a prepopulated form - an order form??
// if response from api- user exists
const Form = () => {
  const name = "Default Name";
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting, isSubmitSuccessful },
    setValue,
    reset,
  } = useForm<IFormData>({
    defaultValues: { firstName: name ?? "" },
    resolver: zodResolver(schema),
  });

  const handleSetValue = (value: keyof IFormData) => {
    setValue(value, "", {
      shouldValidate: true,
      shouldTouch: true,
      shouldDirty: true,
    });
  };

  useEffect(() => {
    isSubmitSuccessful && reset();
  }, [isSubmitSuccessful, reset]);

  const onSave = (data: IFormData) => {
    console.log(data);
  };

  const firstName: keyof IFormData = "firstName";

  return (
    <Layout title={"Sign up"}>
      <fieldset className="flex flex-wrap">
        <InputContainer>
          <label htmlFor="firstName">First Name: </label>
          <input
            className="border rounded p-2"
            type="text"
            placeholder="e.g. Joe"
            {...register(firstName)}
          />
          {errors[firstName] && (
            <FormErrorMessage>{errors[firstName].message}</FormErrorMessage>
          )}
        </InputContainer>
        <InputContainer>
          <label htmlFor="lastName">Last Name: </label>
          <input
            className="border rounded p-2"
            type="text"
            placeholder="e.g. Blogs"
            {...register("lastName")}
          />
          {errors.lastName && (
            <FormErrorMessage>{errors.lastName.message}</FormErrorMessage>
          )}
        </InputContainer>
        <InputContainer>
          <label htmlFor="emailAddress">Email Address:</label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            placeholder="email@example.com"
            {...register("emailAddress")}
          />
          {errors.emailAddress && (
            <FormErrorMessage>{errors.emailAddress.message}</FormErrorMessage>
          )}
        </InputContainer>

        <InputContainer>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            className="border rounded p-2"
            type="date"
            max={maxDate}
            {...register("dateOfBirth", {
              valueAsDate: true,
            })}
          />
          {errors.dateOfBirth && (
            <FormErrorMessage>{errors.dateOfBirth.message}</FormErrorMessage>
          )}
        </InputContainer>

        <InputContainer>
          <label htmlFor="age">Age:</label>
          <input
            className="border rounded p-2"
            type="number"
            placeholder="e.g. 25"
            {...register("age", { valueAsNumber: true })}
          />
          {errors.age && (
            <FormErrorMessage>{errors.age.message}</FormErrorMessage>
          )}
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Password:</label>
          <input
            className="border rounded p-2"
            type="password"
            placeholder="A minimum of 8 characters"
            {...register("password")}
          />
          {errors.password && (
            <FormErrorMessage>{errors.password.message}</FormErrorMessage>
          )}
        </InputContainer>
        <InputContainer>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            className="border rounded p-2"
            type="password"
            placeholder="Should match your password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <FormErrorMessage>
              {errors.confirmPassword.message}
            </FormErrorMessage>
          )}
        </InputContainer>
      </fieldset>

      <button
        className={`border rounded FormErrorMessage-2 w-full ${
          isDirty ? "bg-green-800" : "bg-gray-500"
        } text-white font-semibold`}
        disabled={!isDirty || isSubmitting}
        onClick={handleSubmit(onSave)}
      >
        Submit
      </button>
    </Layout>
  );
};
export default Form;
