import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <div>
      Page
      <section className="flex flex-row gap-4 justify-center  w-full py-6 px-12  mx-auto">
        <CompanionCard
          id="1"
          name="Companion 1"
          topic="Topic 1"
          subject="Subject 1"
          duration={30}
          color="#E5D0FF"
        />
        <CompanionCard
          id="2"
          name="Companion 2"
          topic="Topic 2"
          subject="Subject 2"
          duration={30}
          color="#FFDA6E"
        />
        <CompanionCard
          id="3"
          name="Companion 3"
          topic="Topic 3"
          subject="Subject 3"
          duration={30}
          color="#BDE7FF"
        />
      </section>
      <section className="flex gap-4 justify-between items-start w-full max-lg:flex-col-reverse max-lg:items-center px-12 py-6 ">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          className="w-2/3 max-lg:w-full rounded-lg shadow-lg border-2 border-[#000000]"
        />
        <CTA />
      </section>
    </div>
  );
};

export default Page;
