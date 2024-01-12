"use client";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
interface FormProps {
  type: "register" | "login";
}
const Form: React.FC<FormProps> = ({ type }) => {
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
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (type === "login") {
      console.log("Hello world");
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
          <Button className="mt-2" type="submit" variant={"destructive"}>
            {" "}
            {type === "register" ? "Sign-up" : "Log in"}{" "}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
