"use client";
import { useState } from "react";
import Container from "../Container";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { ModeToggle } from "./ThemeToggle";
import UserMenu from "./UserMenu";
import clsx from "clsx";

const Navbar = () => {
  const [fixedPos, setFixedPost] = useState(false);
  const changePos = () => {
    if (window.scrollY >= 90) {
      setFixedPost(true);
    } else {
      setFixedPost(false);
    }
  };
  window.addEventListener("scroll", changePos);
  return (
    <div
      className={clsx(
        `py-4 shadow-sm`,
        fixedPos &&
          `fixed left-0 top-0 z-[10] w-full bg-white transition-all dark:bg-[#1C1B22FF]`,
      )}
    >
      <Container>
        <div>
          <div className="flex items-center justify-between">
            <SocialLinks />
            <Logo />
            <div
              className="
            flex
            flex-row
            items-center
            gap-3
            "
            >
              <ModeToggle />
              <UserMenu />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
