import SignUpForm from "@/components/form/SignUpForm";
import { authOptions } from "@/libs/next-auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  return (
    <SignUpForm />
  );
}
