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
import {
  FieldValues,
  SubmitHandler,
  useForm,
  useFormState,
} from "react-hook-form";

const CreateBlog = () => {
  const { data } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      category: "",
      body: "",
      imageUrl: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
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
              <Label htmlFor="categories">Select a category</Label>
              <Select id="categories" name="categories">
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
                name="body"
                id="body"
                placeholder="Type your information here..."
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="imageUrl">Image Url</Label>
              <Input
                id="image-url"
                name="imageUrl"
                placeholder="Enter image url..."
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
