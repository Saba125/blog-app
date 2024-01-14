import Container from "./Container";
import Image from "next/image";
import { Button } from "./ui/button";
const Hero = () => {
  return (
    <div className="mt-10">
      <Container>
        <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl ">
          {" "}
          <b>Hey, Je dev here!</b> Discover my stories and creative ideas.{" "}
        </h3>
        {/* Content */}
        <div
          className="
      mt-9
      flex
      flex-row
      items-center
      justify-center
      gap-5
      "
        >
          {/* Image Container */}
          <div
            className="
        relative
        hidden
        h-[350px]  
        flex-1
        md:block
        "
          >
            <Image
              className="object-cover"
              src="/p1.jpeg"
              fill
              alt="Post-img"
            />
          </div>
          <div
            className="
        flex
        flex-1
        flex-col
        gap-3
        "
          >
            <h3 className="text-2xl font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h3>
            <p className="text-xl font-light ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique dolorem fugit nam consectetur dignissimos quae maxime
              modi voluptate molestiae, enim incidunt suscipit cupiditate,
              obcaecati natus eos harum quam, soluta officiis.
            </p>
            <div>
              <Button variant="destructive">Read More</Button>
            </div>
          </div>
        </div>
      </Container>
      {/* Posts */}
    </div>
  );
};

export default Hero;
