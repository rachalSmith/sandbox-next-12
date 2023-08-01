import { ReactNode } from "react";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Container from "../../components/layout/Container";

interface IFormData {
  firstName: string;
  lastName: string;
  emailAddress: string;
  age: number;
  password: string;
  confirmPassword: string;
}

const schema: ZodType<IFormData> = z
  .object({
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(30),
    emailAddress: z.string().email(),
    age: z.number().min(18),
    password: z.string().min(8).max(20),
    confirmPassword: z.string().min(8).max(20),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

interface IContainerProps {
  children: ReactNode;
}

const InputContainer = ({ children }: IContainerProps) => {
  return <div className="flex flex-col grow m-3">{children}</div>;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: zodResolver(schema),
  });

  const onSave = (data: IFormData) => {
    console.log(data);
  };

  return (
    <Container>
      <form className="border rounded m-4 p-4 max-w-xl">
        <span className="flex justify-center mb-2">
          <h1 className="font-bold">Sign Up Form</h1>
        </span>

        <fieldset className="flex flex-wrap">
          <InputContainer>
            <label>First Name: </label>
            <input
              className="border rounded p-2"
              type="text"
              placeholder="e.g. Joe"
              {...register("firstName")}
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </InputContainer>
          <InputContainer>
            <label>Last Name: </label>
            <input
              className="border rounded p-2"
              type="text"
              placeholder="e.g. Blogs"
              {...register("lastName")}
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}
          </InputContainer>
          <InputContainer>
            <label>Email Address:</label>
            <input
              className="border rounded p-2 min-w-600"
              type="text"
              placeholder="example@emailAddress.com"
              {...register("emailAddress")}
            />
            {errors.emailAddress && <p>{errors.emailAddress.message}</p>}
          </InputContainer>
          <InputContainer>
            <label>Age:</label>
            <input
              className="border rounded p-2"
              type="number"
              placeholder="e.g. 25"
              {...register("age", { valueAsNumber: true })}
            />
            {errors.age && <p>{errors.age.message}</p>}
          </InputContainer>
          <InputContainer>
            <label>Password:</label>
            <input
              className="border rounded p-2"
              type="password"
              placeholder="A minimum of 8 characters"
              {...register("password")}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </InputContainer>
          <InputContainer>
            <label>Confirm Password:</label>
            <input
              className="border rounded p-2"
              type="password"
              placeholder="Should match your password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          </InputContainer>
        </fieldset>

        <button
          className="border rounded p-2 w-full bg-green-800 text-white font-semibold"
          onClick={handleSubmit(onSave)}
        >
          Submit
        </button>
      </form>
    </Container>
  );
};
export default Form;
