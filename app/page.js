import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function HomePage() {

   const sessionCookie = await cookies()
  const token = sessionCookie.get("session_token")?.value

  if (!token) {
    redirect("/landing");
  }
  else{
  redirect("/dashboard");
  }
}

