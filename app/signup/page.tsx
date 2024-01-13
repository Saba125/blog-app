import Form from "@/components/form/Form";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Jeblog | Sign-up",
  description: "Sign-up page",
};
const SignUp = () => {
  return <Form type="login" />;
};

export default SignUp;
