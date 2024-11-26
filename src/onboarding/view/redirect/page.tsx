import ServerPage from "../../../server/view/server/page";
import useCode from "../../hook/useCode";

export default function RedirectPage() {
  useCode();

  const code1 = localStorage.getItem("accessToken");

  console.log("accessToken: " + code1);

  return <ServerPage />;
}
