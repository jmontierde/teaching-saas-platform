import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn, getSubjectColor } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface CompanionsListProps {
  title?: string;
  companions?: any[];
  className?: string;
}
const CompanionsList = ({
  title,
  companions,
  className,
}: CompanionsListProps) => {
  return (
    <article className={cn("companions-card", className)}>
      <Table className="w-full ">
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg w-2/3">Lesson</TableHead>
            <TableHead className="text-lg">Subject</TableHead>
            <TableHead className="text-lg">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map((companion, index) => (
            <TableRow key={index}>
              <TableCell className="flex flex-col gap-2">
                <Link href={`/companions/${companion.id}`}>
                  <div className="'flex items-center gap-2">
                    <div
                      className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
                      style={{
                        backgroundColor: getSubjectColor(companion.subject),
                      }}
                    >
                      <Image
                        src={`/icons/${companion.subject}.svg`}
                        width={35}
                        height={35}
                        alt={companion.subject}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-bold text-2xl">{companion.anme}</p>
                      <p className="text-lg">Topic: {companion.topic}</p>
                    </div>
                  </div>
                </Link>
              </TableCell>

              <TableCell>
                <div className="subject-badge w-fit font-medium max-md:hidden">
                  {companion.subject}
                </div>
                <div
                  className="flex items-center justify-center rounded-lg w-fit md:hidden p-2"
                  style={{
                    backgroundColor: getSubjectColor(companion.subject),
                  }}
                >
                  <Image
                    src={`/icons/${companion.subject}.svg`}
                    width={18}
                    height={18}
                    alt={companion.subject}
                  />
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center gap-2 w-full">
                  <p className="text-2xl">
                    {companion.duration}{" "}
                    <span className="max-md:hidden">mins</span>
                  </p>
                  <Image
                    src="/icons/clock.svg"
                    width={14}
                    height={14}
                    alt="Clock Icon"
                    className="md:hidden"
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  );
};

export default CompanionsList;
