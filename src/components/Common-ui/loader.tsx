import { Loader2 } from "lucide-react";
import React from "react";

type propType = {
  size?: number;
};

const LoadingIcon: React.FC<propType> = ({ size = 40 }) => {
  return (
    <div className="text-[#03A9AC]">
      <Loader2 className="animate-spin" size={size} />
    </div>
  );
};

export default LoadingIcon;