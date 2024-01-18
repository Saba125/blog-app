import Image from "next/image";
const SocialLinks = () => {
  return (
    <div
      className="
    hidden
    flex-row
    gap-2
    md:flex
    "
    >
      <Image
        className="cursor-pointer"
        width={25}
        height={25}
        alt="facebook-logo"
        src="/facebook.png"
      />
      <Image
        className="cursor-pointer"
        width={25}
        height={25}
        alt="tiktok-logo"
        src="/tiktok.png"
      />
      <Image
        className="cursor-pointer"
        width={25}
        height={25}
        alt="instagram-logo"
        src="/instagram.png"
      />
    </div>
  );
};

export default SocialLinks;
