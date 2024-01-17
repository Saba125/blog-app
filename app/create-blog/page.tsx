"use client";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Select from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { categories } from "@/lib/categories";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import {
  FieldValues,
  SubmitHandler,
  useForm,
  useFormState,
} from "react-hook-form";
import prisma from "@/lib/prisma";
import axios from "axios";
const CreateBlog = () => {
  const { data, status } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      category: "",
      body: "",
      imageUrl: "",
      userEmail: data?.user?.email,
    },
  });
  useEffect(() => {
    if (data?.user?.email) {
      setValue("userEmail", data.user.email);
    }
  }, [data, setValue]);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = await axios.post("/api/blog", data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
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
          <Heading
            title="Blog details"
            subTitle="Please Provide a blog description and details"
          />
          <form
            className="
          mt-5 
          flex 
          flex-col
          gap-3
          "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-3">
              <Label htmlFor="title">Blog title</Label>
              <Input
                {...register("title", { required: true })}
                aria-invalid={errors.title ? "true" : "false"}
                id="title"
                name="title"
                className={clsx(
                  errors.title?.type === "required" && "border-rose-500",
                )}
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="category">Select a category</Label>
              <Select
                {...register("category", { required: true })}
                id="category"
                name="category"
                aria-invalid={errors.title ? "true" : "false"}
                className={clsx(
                  errors.category?.type === "required" && "border-rose-500",
                )}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {" "}
                    {category}{" "}
                  </option>
                ))}
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="body">Blog body</Label>
              <Textarea
                id="body"
                placeholder="Type your information here..."
                {...register("body", { required: true })}
                aria-invalid={errors.body ? "true" : "false"}
                className={clsx(
                  errors.blog?.type === "required" && "border-rose-500",
                )}
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="imageUrl">Image Url</Label>
              <Input
                id="imageUrl"
                placeholder="Enter image url..."
                {...register("imageUrl", { required: true })}
                aria-invalid={errors.imageUrl ? "true" : "false"}
                className={clsx(
                  errors.imageUrl?.type === "required" && "border-rose-500",
                )}
              />
            </div>
            <div className="flex flex-col gap-3">
              <Button type="submit" variant="outline">
                Submit{" "}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
