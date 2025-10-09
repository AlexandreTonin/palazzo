import Image from "next/image";

export default function Register() {
  return (
    <>
      <div className="relative h-full w-full rounded-xl overflow-hidden hidden lg:block">
        <Image
          src="/login-house.png"
          alt="Login Illustration"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="h-full flex items-center justify-center">
        <h1>Register Page</h1>
      </div>
    </>
  );
}
