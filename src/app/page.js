import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="h-screen bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),radial-gradient(42.32%_51.73%_at_50%_40.77%,#C6C6C6_10%,#88B9D6_100%)]">
        <div className="absolute h-4/5 w-full bottom-0">
          <Image
            src={"/hero-house.png"}
            alt="Hero House"
            fill
            draggable={false}
            className="object-cover object-top"
          />
        </div>
      </section>
    </>
  );
}
