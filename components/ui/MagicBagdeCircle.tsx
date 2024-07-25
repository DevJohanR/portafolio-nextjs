// components/ui/MagicBadgeCircle.tsx
//j
import React from "react";
import { FaDownload } from "react-icons/fa6";

interface MagicBadgeCircleProps {
  title?: string;
  roundedClassName?: string;
  icon?: React.ReactNode;
}

const MagicBadgeCircle: React.FC<MagicBadgeCircleProps> = ({ title, roundedClassName = "rounded-full", icon }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className={`relative inline-flex items-center h-10 w-10 overflow-hidden ${roundedClassName} p-[1px] focus:outline-none`}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className={`relative flex h-full w-full items-center justify-center ${roundedClassName} bg-slate-950 text-sm font-medium text-white backdrop-blur-3xl`}>
          {icon ? icon : title}
          {!icon && <FaDownload className="ml-2" />}
        </span>
      </div>
    </div>
  );
};

export default MagicBadgeCircle;
