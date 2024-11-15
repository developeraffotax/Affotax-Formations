import BankOption from "@/components/homepage/bankOption/BankOption";
import Hero from "@/components/homepage/hero/Hero";
import Pricing from "@/components/homepage/pricing/Pricing";
import Steps from "@/components/homepage/steps/Steps";
import WhyUs from "@/components/homepage/whyUs/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <UnderHero /> */}
      <Pricing />
      <BankOption />
      <Steps />
      <WhyUs />
    </>
  );
}
