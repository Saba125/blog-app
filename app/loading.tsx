"use client";
import { MoonLoader } from "react-spinners";
const Loading = () => {
  return (
    <div
      className="
    flex
    min-h-screen
    items-center
    justify-center
    "
    >
      <MoonLoader size={90} color="#000" speedMultiplier={1} />
    </div>
  );
};

export default Loading;
