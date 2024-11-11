// Discord 서버 인터페이스 정의
interface Guild {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
  isRiv: boolean;
  permissions: number;
}

export const mockGuilds: Guild[] = [
  {
    id: "123456789012345678",
    name: "REACT",
    icon: "/assets/mock_image/react.png",
    owner: true,
    isRiv: false,
    permissions: 2147483647,
  },
  {
    id: "876543210987654321",
    name: "SPRING",
    icon: "/assets/mock_image/spring.png",
    owner: false,
    isRiv: true,
    permissions: 104189504,
  },
  {
    id: "112233445566778899",
    name: "Valorant",
    icon: "/assets/mock_image/valorant.png",
    owner: false,
    isRiv: true,
    permissions: 268435456,
  },
  {
    id: "123456789012345678",
    name: "Null",
    icon: null,
    owner: true,
    isRiv: true,
    permissions: 2147483647,
  },
  {
    id: "876543210987654321",
    name: "SPRING2",
    icon: "/assets/mock_image/spring.png",
    owner: false,
    isRiv: true,
    permissions: 104189504,
  },
  {
    id: "112233445566778899",
    name: "Valorant2",
    icon: "/assets/mock_image/valorant.png",
    owner: false,
    isRiv: false,
    permissions: 268435456,
  },
  {
    id: "123456789012345678",
    name: "Null",
    icon: null,
    owner: true,
    isRiv: true,
    permissions: 2147483647,
  },
  {
    id: "876543210987654321",
    name: "SPRING2",
    icon: "/assets/mock_image/spring.png",
    owner: false,
    isRiv: true,
    permissions: 104189504,
  },
  {
    id: "112233445566778899",
    name: "Valorant2",
    icon: "/assets/mock_image/valorant.png",
    owner: false,
    isRiv: false,
    permissions: 268435456,
  },
];
