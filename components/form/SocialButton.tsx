import { IconType } from "react-icons";
import { Button } from "../ui/button";
interface SocialButtonProps {
  icon: IconType;
  label: string;
}
const SocialButton: React.FC<SocialButtonProps> = ({ icon: Icon, label }) => {
  return (
    <Button variant={"outline"} className="relative w-full">
      {" "}
      <Icon size={24} className="absolute left-4 top-[7px]" /> {label}{" "}
    </Button>
  );
};

export default SocialButton;
