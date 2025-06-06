import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <div>
      Page
      <section className="flex flex-row gap-4 justify-center items-center w-full p-4 px-16 mx-auto">
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
      <div>
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          className="w-2/3 max-lg:w-full"
        />
      </div>
    </div>
  );
};

export default Page;
