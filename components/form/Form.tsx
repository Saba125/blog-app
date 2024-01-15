"use client";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import SocialButton from "./SocialButton";
import { useRouter } from "next/navigation";
interface FormProps {
  type: "register" | "login";
}
const Form: React.FC<FormProps> = ({ type }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (type === "login") {
      try {
        await signIn("credentials", {
          ...data,
          redirect: false,
        });
        toast.success("Successfully signed in");
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    }
    if (type === "register") {
      setIsLoading(true);
      try {
        const response = await axios.post("/api/register", data);
        toast.success("User registered");
        setIsLoading(false);
        router.push("/");
      } catch (error) {
        toast.error("Error registering");
        setIsLoading(false);
      }
    }
  };
  return (
    <div
      className="
          flex
          min-h-screen
          items-center
          justify-center
          "
    >
      <div
        className="
              mx-auto
              rounded-md
              border
              px-5
              py-5
              md:w-4/6
              lg:w-3/6
              xl:w-2/5
              "
      >
        <h3 className="text-center text-2xl font-bold">
          {" "}
          {type === "register" ? "Sign up" : "Log in"}{" "}
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          {type === "register" && (
            <div className="flex flex-col gap-2">
              <Label className="text-lg" htmlFor="name">
                {" "}
                Name{" "}
              </Label>
              <Input
                type="text"
                id="name"
                placeholder="Enter your name..."
                {...register("name")}
              />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <Label className="text-lg" htmlFor="email">
              {" "}
              Email{" "}
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email..."
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && (
              <p className="text-rose-500" role="alert">
                Email is required
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-lg" htmlFor="password">
              {" "}
              Password{" "}
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password..."
              {...register("password", { required: true })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password?.type === "required" && (
              <p className="text-rose-500" role="alert">
                Password is required
              </p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Button
              disabled={isLoading}
              className="mt-2 w-full"
              type="submit"
              variant={"destructive"}
            >
              {" "}
              {type === "register" ? "Sign-up" : "Log in"}{" "}
            </Button>
            <hr />
            <div className="flex flex-col gap-3">
              <SocialButton
                onClick={() => signIn("google")}
                icon={FcGoogle}
                label="Continue with google"
              />
              <SocialButton
                onClick={() => signIn("github")}
                icon={AiFillGithub}
                label="Continue with github"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
