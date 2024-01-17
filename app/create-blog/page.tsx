import Heading from "@/components/Heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Select from "@/components/ui/select";
import { categories } from "@/lib/categories";

const CreateBlog = () => {
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
          >
            <div className="flex flex-col gap-3">
              <Label htmlFor="title">Blog title</Label>
              <Input id="title" name="title" />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="title">Select a category</Label>
              <Select>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {" "}
                    {category}{" "}
                  </option>
                ))}
              </Select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
