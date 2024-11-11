import ServerCard from "../../../component/card/server_card";
import { useResServerCard } from "../../../hook/use_res_server_card";
import { mockGuilds } from "../const/mock_data";

export default function ServerSection() {
  const { count } = useResServerCard();

  const groupedGuilds = [];
  for (let i = 0; i < mockGuilds.length; i += count) {
    groupedGuilds.push(mockGuilds.slice(i, i + count));
  }

  return (
    <section className="flex flex-col items-center justify-center space-y-[4rem] mb-[4rem] mt-[2rem]">
      {groupedGuilds.map((group, groupIndex) => (
        <div key={groupIndex} className="flex space-x-[4rem]">
          {group.map((guild, index) => (
            <ServerCard
              key={index}
              svIcon={guild.icon}
              serverName={guild.name}
              isOwner={guild.owner}
              isRiv={guild.isRiv}
            />
          ))}
        </div>
      ))}
    </section>
  );
}
