import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import MainRouter from "./common/route";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
        <MainRouter />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
