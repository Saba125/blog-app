import Form from "@/components/form/Form";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Jeblog | Sign-in",
  description: "Sign-in page",
};
const SignUp = () => {
  return <Form type="login" />;
};

export default SignUp;
