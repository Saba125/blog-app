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
      <div
        className={clsx(
          `font-bold`,
          center ? "text-center" : "text-start",
          large && "text-4xl",
          medium && "text-2xl",
        )}
      >
        <h3> {title} </h3>
        <p>{subTitle}</p>
      </div>
    </>
  );
};

export default Heading;
