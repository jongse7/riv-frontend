import Header from "../../common/layout/header";
import Filter from "../component/button/filter";
import List from "../component/button/list";
import { Item, ListView } from "../component/listview";
import ServerCard from "../component/server_card";
import {
  FolderSimplePlus,
  GearSix,
  Article,
  FunnelSimple,
  SortAscending,
} from "@phosphor-icons/react";

export default function TestPage() {
  const sortItems: Item[] = [
    { name: "정렬 기준", isToggle: false },
    { name: "최근 날짜", isToggle: true },
    { name: "오래된 날짜", isToggle: true },
  ];

  const categories = [
    { name: "카테고리 선택", isToggle: false },
    { name: "전체", isToggle: true },
    { name: "디자인", isToggle: true },
    { name: "프론트엔드", isToggle: true },
    { name: "백엔드", isToggle: true },
    { name: "PM", isToggle: true },
    { name: "아웃소싱 TF", isToggle: true },
  ];

  const deleteAndFix: Item[] = [
    { name: "수정하기", isToggle: false },
    { name: "삭제하기", isToggle: false, className: "text-red-01" },
  ];

  return (
    <>
      <Header />
      <div className="h-screen flex gap-5 p-5 bg-[#444444] flex-wrap">
        <ServerCard />
        <ServerCard
          bgImg={"https://picsum.photos/id/222/700/500"}
          isOwner={false}
          isRiv={true}
          fstName="I"
        />
        <div className="flex flex-col gap-2">
          <List
            isAct={true}
            icon={<FolderSimplePlus size={32} weight="fill" />}
            text="저장된 회의록"
          />
          <List
            isAct={false}
            icon={<FolderSimplePlus size={32} weight="fill" />}
            text="저장된 회의록"
          />
          <List
            isAct={true}
            icon={<GearSix size={32} weight="fill" />}
            text="회의록 저장 세팅"
          />
          <List
            isAct={false}
            icon={<GearSix size={32} weight="fill" />}
            text="회의록 저장 세팅"
          />
          <List
            isAct={true}
            icon={<Article size={32} weight="fill" />}
            text="사용 설명서"
          />
          <List
            isAct={false}
            icon={<Article size={32} weight="fill" />}
            text="사용 설명서"
          />
        </div>
        <div className="flex flex-col gap-5">
          <Filter
            icon={<SortAscending className="size-[1.2rem]" weight="bold" />}
            text="정렬"
          />
          <Filter
            icon={<FunnelSimple className="size-[1.2rem]" weight="bold" />}
            text="카테고리"
          />
        </div>
        <div className="flex flex-row gap-5">
          <ListView items={sortItems} />
          <ListView items={categories} />
          <ListView items={deleteAndFix} />
        </div>
      </div>
    </>
  );
}
