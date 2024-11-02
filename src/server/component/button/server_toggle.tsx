import { useState } from "react";

interface ServerToggleProps {
  initialActive?: boolean;
  onToggle?: (isActive: boolean) => void;
}

export default function ServerToggle({
  initialActive = false,
  onToggle,
}: ServerToggleProps) {
  const [isActive, setIsActive] = useState(initialActive);

  const handleClick = () => {
    const newActiveState = !isActive;
    setIsActive(newActiveState);

    if (onToggle) {
      onToggle(newActiveState);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="size-[1.1rem] rounded-full flex items-center justify-center border-[0.1rem] border-gray-07"
    >
      <div
        className={`border-[0.175rem] border-gray-02 transition-colors duration-300 rounded-full size-full ${
          isActive ? "bg-primary" : "bg-gray-02"
        }`}
      />
    </button>
  );
}
