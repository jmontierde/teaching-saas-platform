import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import {
  getAllCompanion,
  getRecentSessions,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import React from "react";

const Page = async () => {
  const companions = await getAllCompanion({
    limit: 3,
  });
  const recentSessionsCompanions = await getRecentSessions(10);

  return (
    <div>
      Page
      <section className="flex flex-row gap-4 justify-center  w-full py-6 px-12  mx-auto">
        {companions.companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
        <CompanionCard
          id="1"
          name="Companion 1"
          topic="Topic 1"
          subject="Subject 1"
          duration={30}
          color="#E5D0FF"
        />
      </section>
      <section className="flex gap-4 justify-between items-start w-full max-lg:flex-col-reverse max-lg:items-center px-12 py-6 ">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessionsCompanions}
          className="w-2/3 max-lg:w-full rounded-lg shadow-lg border-2 border-[#000000]"
        />
        <CTA />
      </section>
    </div>
  );
};

export default Page;
