import Link from "next/link";
import RootLayout from "../../Layouts/RootLayout";

export default function Login() {
  return (
    <RootLayout>
        <div>Login</div>
        <Link href="/register">Register</Link>
    </RootLayout>
  )
}
