import clsx from "clsx";

interface HeadingProps {
  title: string;
  subTitle?: string;
  center?: boolean;
  large?: boolean;
  medium?: boolean;
}
const Heading: React.FC<HeadingProps> = ({
  title,
  subTitle,
  center,
  large,
  medium,
}) => {
  return (
    <>
      <div>
        <h3
          className={clsx(
            `font-bold`,
            center ? "text-center" : "text-start",
            large && "text-4xl",
            medium && "text-2xl",
          )}
        >
          {" "}
          {title}{" "}
        </h3>
        <p
          className={clsx(
            `font-light text-neutral-500`,
            center ? "text-center" : "text-start",
            large && "text-xl",
            medium && "text-lg",
          )}
        >
          {subTitle}
        </p>
      </div>
    </>
  );
};

export default Heading;
