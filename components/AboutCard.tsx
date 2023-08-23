import { FC } from "react";
import { IconBaseProps } from "react-icons";
interface AboutCardProps {
  title: string;
  description: string;
  Icon: FC<IconBaseProps>;
}

export default function AboutCard({
  
  title,
  description,
  Icon,
}: AboutCardProps) {
  return (
    <div className="w-full bg-slate-50  md:h-60 h-48 shadow-md rounded-xl flex flex-col px-10 py-5 ">
      <div className="w-full h-12  basis-1/3 flex items-center justify-center">
        <Icon size={40} />
      </div>
      <div className=" basis-1/3 flex justify-center items-center font-semibold text-lg">
        {title}
      </div>
      <div className=" basis-1/3 flex items-center text-center font-light">
        {description}
      </div>
    </div>
  );
}
