import Image from "next/image";

export default function Login() {
  return (
    <>
      <div className="relative h-full w-full rounded-xl overflow-hidden">
        <Image
          src="/login-house.png"
          alt="Login Illustration"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="h-full flex items-center justify-center">
        <h1>Login Page</h1>
      </div>
    </>
  );
}
