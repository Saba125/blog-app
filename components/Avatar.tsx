"use client";
import React from "react";
import Image from "next/image";
interface AvatarProps {
  src: string | null | undefined;
}

const Avatar = ({ src }: AvatarProps) => {
  return (
    <Image
      className="
      rounded-full
      "
      src={src || "/placeholder.jpg"}
      width={30}
      height={30}
      alt="Avatar-img"
    />
  );
};

export default Avatar;
