import { Clock, Save } from "lucide-react";
import Link from "next/link";
import React from "react";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
}: CompanionCardProps) => {
  return (
    <article
      style={{ backgroundColor: color }}
      className="px-6 py-4 rounded-lg shadow-lg border-2 border-[#000000] flex flex-col gap-4 w-full"
    >
      hellow
      <div className="flex items-center justify-between rounded-e-lg ">
        <span className="bg-[#151312] text-white px-2 py-1 rounded">
          {subject}
        </span>
        <Save width={20} height={20} />
      </div>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-base">Topic: {topic}</p>
      <p>Subject: {subject}</p>
      <div className="flex items-center gap-3">
        <Clock width={18} height={18} />
        <p>{duration} minutes</p>
      </div>
      <Link href={`/companions/${id}`}>
        <button className="start-button bg-[#FE5933] text-white rounded-xl px-4 py-2 w-full mt-4 hover:bg-[#FF6A47] transition-colors duration-300">
          Launch Lesson{" "}
        </button>
      </Link>
    </article>
  );
};

export default CompanionCard;
