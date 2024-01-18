import Form from "@/components/form/Form";
import { authOptions } from "@/lib/authOptions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: "Jeblog | Sign-in",
  description: "Sign-in page",
};
const SignIn = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  return <Form type="login" />;
};

export default SignIn;
