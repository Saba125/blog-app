"use client";

import Link from "next/link";

interface UserItemProps {
  label: string;
  href: string;
  onClick?: () => void;
}
const UserItem: React.FC<UserItemProps> = ({ label, href, onClick }) => {
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
         border-b-[1px]
        "
      onClick={onClick}
    >
      <Link href={href}>{label}</Link>
    </div>
  );
};

export default UserItem;
