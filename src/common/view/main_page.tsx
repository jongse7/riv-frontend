import Riv from "../component/riv";

export default function MainPage() {
  return (
    <section className="w-screen h-screen flex flex-row items-center justify-center bg-[#EEF9FC]">
      <Riv className="w-[20rem] mr-[4rem]" />
      <div>
        <IntroSection />
      </div>
    </section>
  );
}

function IntroSection() {
  const pTextStyle: string = "text-[1rem] text-gray-06";
  return (
    <div>
      <h1 className="text-[2.5rem] leading-[2rem] font-semibold">
        생각은 회의에,
      </h1>
      <h1 className="mb-[0.75rem] text-[2.5rem] font-bold bg-gradient-to-r from-t-left to-t-right bg-clip-text text-transparent">
        기록은 RIV에 맡기세요!
      </h1>
      <p className={pTextStyle}>
        Riv는 AI 기술을 통해 어렵고, 복잡하고, 귀찮았던 우리의 회의를
      </p>
      <p className={pTextStyle}>
        쉽고, 간편하고, 즐거운 회의로 바꿔줍니다. Riv와 함께 우리의 세상을
        바꿔나가고 싶지 않나요?
      </p>
      <p className={pTextStyle}>
        Riv는 오픈소스 프로젝트입니다. 우리 함께 열려있는 협업 세상을
        만들어봐요!
      </p>
    </div>
  );
}
