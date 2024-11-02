import ServerCard from "../component/server_card";

export default function TestPage() {
  return (
    <div className="bg-slate-400">
      <ServerCard />
      <ServerCard bgImg={""} />
    </div>
  );
}
