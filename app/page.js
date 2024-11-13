import BankOption from "@/components/homepage/bankOption/BankOption";
import Hero from "@/components/homepage/hero/Hero";
import Steps from "@/components/homepage/steps/Steps";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <UnderHero /> */}
      <BankOption />
      <Steps />
    </>
  );
}
