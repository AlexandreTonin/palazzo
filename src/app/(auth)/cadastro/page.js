import { RegisterForm } from "@/components/layout/RegisterForm";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <div className="relative h-full w-full rounded-xl overflow-hidden hidden lg:block">
        <Image
          src="/register-house.png"
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

          <RegisterForm />
        </div>
      </div>
    </>
  );
}
