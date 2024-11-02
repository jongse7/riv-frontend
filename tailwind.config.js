// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // TailwindCSS를 적용할 파일 경로 지정
  ],
  theme: {
    extend: {
      colors: {
        primary: "#576DEF",
        "gray-01": "#262626",
        "gray-02": "#111214",
        "gray-03": "#1F2129",
        "gray-04": "#272934",
        "gray-05": "#3D3F49",
        "gray-06": "#8A8A8A",
        "gray-07": "#BDC2D2",
        "gray-08": "#D1D3D8",
        "gray-09": "#FFFFFF",
        "red-01": "#F24040",
        "text-left": "#0E6BE8",
        "text-right": "#083C82",
        "discord-left": "#3994FF",
        "discord-right": "#0E6BE8",
        "github-left": "#1C3A70",
        "github-center": "#4B41C0",
        "github-right": "#786EE4",
      },
      screens: {
        sm: "480px",
      },
    },
  },
  plugins: [],
};
