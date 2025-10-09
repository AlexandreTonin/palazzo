import { LoginForm } from "@/components/layout/LoginForm";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="relative w-full rounded-xl overflow-hidden xl:block hidden">
        <Image
          src="/login-house.png"
          alt="Login Illustration"
          fill
          style={{ objectFit: "cover", objectPosition: "right" }}
        />
      </div>

      <div className="h-full flex flex-col">
        <div className="flex flex-1 flex-col xl:justify-center items-center xl:gap-16 md:gap-16 gap-8 xl:mt-0 mt-12">
          <Link href="/" className="font-[against] text-black text-3xl">
            Palazzo
          </Link>

          <LoginForm />
        </div>
      </div>
    </>
  );
}
