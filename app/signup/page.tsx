import Form from "@/components/form/Form";
import { authOptions } from "@/lib/authOptions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: "Jeblog | Sign-up",
  description: "Sign-up page",
};
const SignUp = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  return <Form type="register" />;
};

export default SignUp;
