import { ReactNode } from "react";
import { cn } from "../../../common/utils/cn";

interface ListProps {
  isAct?: boolean;
  icon: ReactNode;
  text: string;
  className?: string;
}

export default function List({
  isAct = false,
  icon,
  text,
  className = "",
}: ListProps) {
  const defaultColor = isAct ? "text-gray-09" : "text-gray-07";
  return (
    <div className={cn(className, defaultColor, "flex items-center h-fit")}>
      <span className="mr-[0.5rem]">{icon}</span>
      <span className="font-medium text-[1.2rem]">{text}</span>
    </div>
  );
}
