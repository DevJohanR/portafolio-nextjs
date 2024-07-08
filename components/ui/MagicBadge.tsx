import React from "react";
import { FaDownload } from "react-icons/fa6";

interface MagicBadgeProps {
  title: string;
}

const MagicBadge: React.FC<MagicBadgeProps> = ({ title }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative inline-flex items-center h-8 w-auto overflow-hidden rounded-lg p-[1px] focus:outline-none">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="relative inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-5 text-sm font-medium text-white backdrop-blur-3xl gap-2">
          {title}
          <FaDownload className="ml-2" />
        </span>
      </div>
    </div>
  );
};

export default MagicBadge;