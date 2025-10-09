import Image from "next/image";

export function HeroSection() {
  return (
    <section className="h-screen bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),radial-gradient(42.32%_51.73%_at_50%_40.77%,#C6C6C6_10%,#88B9D6_100%)]">
      <div className="flex flex-col items-center pt-8 md:pt-40 lg:pt-8">
        <h1 className="text-white text-5xl break-words lg:max-w-2xl md:max-w-lg max-w-xs text-center mt-32 font-[jejumyeongjo]">
          Experimente viver além das expectativas
        </h1>
        <p className="lg:max-w-lg max-w-xs md:max-w-md text-center text-white mt-8 font-extralight z-50">
          Abrace uma vida onde o luxo encontra o conforto, criando momentos
          extraordinários que vão além das suas expectativas.
        </p>
      </div>

      <div className="absolute h-2/5 lg:h-4/5 w-full bottom-0">
        <Image
          src={"/hero-house.png"}
          alt="Hero House"
          fill
          draggable={false}
          className="object-cover object-top"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white"></div>
    </section>
  );
}
