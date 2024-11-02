import { AspectRatio } from "shadcn-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avator";
import Entry from "./button/entry";

export default function ServerCard({
  bgImg,
  pfImg,
  fstName = "R",
  isOwner = true,
  isRiv = false,
  serverName = "Riv's Server",
}: ServerCardProps) {
  return (
    <div className="w-[22.1875rem]">
      <div className="relative mb-[0.75rem]">
        <AspectRatio ratio={7 / 4}>
          {bgImg ? (
            <img src={bgImg} className="rounded-[0.4rem]" />
          ) : (
            <div className="bg-gray-03 rounded-[0.4rem] w-full h-full" />
          )}
        </AspectRatio>
        <Avatar className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 size-[6.5625rem] border-[0.15rem] border-[#A9A9A9]">
          <AvatarImage src={pfImg || ""} />
          <AvatarFallback className="text-white text-[1.75rem] font-semibold">
            {fstName || "R"}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <p className="text-gray-09 font-bold">{serverName}</p>
          <p className="text-gray-06 font-medium">
            {isOwner ? "Owner" : "Member"}
          </p>
        </div>
        <Entry isRiv={isRiv} />
      </div>
    </div>
  );
}

interface ServerCardProps {
  bgImg?: string | null;
  pfImg?: string | null;
  fstName?: string;
  isOwner?: boolean;
  isRiv?: boolean;
  serverName?: string;
}
