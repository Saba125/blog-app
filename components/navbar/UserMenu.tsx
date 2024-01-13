"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import UserItem from "./UserItem";
import { signOut, useSession } from "next-auth/react";
const UserMenu = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const toggle = useCallback(() => {
    setIsToggled((prev) => !prev);
  }, []);
  const { data, status } = useSession();
  return (
    <div className="relative">
      <div
        className="
        flex
        cursor-pointer
        flex-row
        items-center
        gap-3
        rounded-full
        border-[1px]
        border-neutral-200
        p-4
        hover:shadow-md
        md:px-2
        md:py-1
        "
        onClick={toggle}
      >
        <AiOutlineMenu />
        <div className="hidden md:block">
          <Avatar src={data?.user?.image} />
        </div>
        {isToggled && (
          <div
            className="
          absolute
    right-0
    top-14
    w-[40vw]
    overflow-hidden
    rounded-xl
    bg-white
    text-sm
    shadow-md
    md:w-[10vw]
        "
          >
            {status === "unauthenticated" ? (
              <>
                <UserItem href="/signin" label="Log in" />
                <UserItem href="/signup" label="Sign up" />
              </>
            ) : (
              <>
                <UserItem href="/signin" label="Create blog" />
                <UserItem href="/signin" label="View blog" />
                <UserItem href="" onClick={() => signOut()} label="Log out" />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
