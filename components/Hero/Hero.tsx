"use client";
import aiComputer from "../../public/ai.json";
import dynamic from "next/dynamic";

const LottieNoSSR = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center px-1">
      <div className="absolute -z-10 top-0 left-1/2 -translate-x-2/4 h-full md:w-2/3 w-full bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-[0.4] bg-red-500 rounded-full md:blur-[700px] blur-[300px]" />
      <div className="mb-5 text-center flex flex-col items-center gap-5">
        <h1 className=" heroTitle md:text-5xl text-3xl font-extrabold">
          Ens-Kouba Ai Professors Corner
        </h1>
        <p className="md:w-1/2 w-[80%] md:text-xl text-lg">
          This platform is dedicated to AI professors, providing them a space to
          share their blogs and exchange insights and expertise.
        </p>
      </div>
      <LottieNoSSR
        animationData={aiComputer}
        className="md:h-[450px] h-[250px]"
        loop={true}
      />
    </div>
  );
};

export default Hero;
