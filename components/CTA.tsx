import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="bg-[#fccc41] text-[#2c2c2c] rounded-lg px-2 py-1 cta-badge">
        Start learning your way.
      </div>
      <h2 className="text-3xl font-bold">
        Build and Personalize Learning Companion
      </h2>
      <p>
        Pick a name, subject, voice, & personality - and start learning through
        voice conversation that feel natural and fun
      </p>
      <Image
        src="/images/cta.svg"
        alt="CTA Illustration"
        width={362}
        height={232}
        className="cta-illustration"
      />
      <Button className="bg-[#FE5933] text-white rounded-lg px-4 py-2 w-full mt-4 hover:bg-[#FF6A47] transition-colors duration-300 ">
        <Image src="/icons/plus.svg" alt="Plus Icon" width={12} height={12} />
        <Link href="/companions/new" className="text-white">
          Build a New Companion
        </Link>
      </Button>
    </section>
  );
};

export default CTA;
