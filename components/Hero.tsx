import Container from "./Container";
import Image from "next/image";
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
      gap-3
      "
        >
          {/* Image Container */}
          <div
            className="
        relative
        h-[350px]
        flex-1
        "
          >
            <Image
              className="object-cover"
              src="/culture.png"
              fill
              alt="Post-img"
            />
          </div>
          <div
            className="
        flex-1
        "
          >
            <h3>Hello world</h3>
          </div>
        </div>
      </Container>
      {/* Posts */}
    </div>
  );
};

export default Hero;
