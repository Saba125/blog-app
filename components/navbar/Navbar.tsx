import Container from "../Container";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="py-4 shadow-sm">
      <Container>
        <div>
          <div className="flex items-center justify-between">
            <SocialLinks />
            <Logo />
            <UserMenu />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
