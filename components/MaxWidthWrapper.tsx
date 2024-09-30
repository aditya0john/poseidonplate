import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
const MaxWidthWrapper = ({
  otherClass,
  children,
}: {
  otherClass?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn("mx-auto h-screen w-full", otherClass)}>{children}</div>
  );
};

export default MaxWidthWrapper;
