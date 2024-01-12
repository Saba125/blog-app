"use client";

import Link from "next/link";

interface UserItemProps {
  label: string;
  href: string;
}
const UserItem: React.FC<UserItemProps> = ({ label, href }) => {
  return (
    <div
      className="
      w-full
         px-2
         py-3
         font-semibold
         transition
         hover:bg-neutral-100
         dark:text-black
        "
    >
      <Link href={href}>
      {label}
      </Link>
    </div>
  );
};

export default UserItem;
