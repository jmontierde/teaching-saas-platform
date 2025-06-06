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
import { cn } from "@/lib/utils";

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
    <article className={cn("companions-list", className)}>
      <Table className="w-full border border-gray-200 ">
        <TableHeader>
          <TableRow>
            <TableHead >Lesson</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead className="text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map((companion, index) => (
            <TableRow key={index}>
              <TableCell className="flex flex-col gap-2">
                <p className="font-bold text-2xl">{companion.anme}</p>
                <p>Topic: {companion.topic}</p>
              </TableCell>

              <TableCell className="font-medium">{companion.subject}</TableCell>
              <TableCell className="text-right">{companion.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  );
};

export default CompanionsList;
