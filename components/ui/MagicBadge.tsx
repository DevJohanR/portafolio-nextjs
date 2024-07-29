import React from "react";
import { FaDownload } from "react-icons/fa6";

interface MagicBadgeProps {
  title?: string;
  roundedClassName?: string; // Nueva prop para estilos redondeados
  icon?: React.ReactNode; // Nueva prop para aceptar un icono personalizado
  onClick?: () => void; // Nueva prop para manejar el evento de clic
}

const MagicBadge: React.FC<MagicBadgeProps> = ({ title, roundedClassName = "rounded-lg", icon, onClick }) => {
  return (
    <div className="flex justify-center items-center h-full" onClick={onClick}>
      <div className={`relative inline-flex items-center h-8 w-auto overflow-hidden ${roundedClassName} p-[1px] focus:outline-none`}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className={`relative inline-flex h-full w-full items-center justify-center ${roundedClassName} bg-slate-950 px-5 text-sm font-medium text-white backdrop-blur-3xl gap-2`}>
          {icon ? icon : title}
          {!icon && <FaDownload className="ml-2" />}
        </span>
      </div>
    </div>
  );
};

export default MagicBadge;
