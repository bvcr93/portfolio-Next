import React, { FC, useRef, useEffect, useState } from "react";
import { IconBaseProps } from "react-icons";
import { useTypewriter, Cursor } from "react-simple-typewriter";

interface AboutCardProps {
  title: string;
  description: string;
  Icon: FC<IconBaseProps>;
}

const AboutCard: FC<AboutCardProps> = ({ title, description, Icon }) => {
  const iconRef = useRef<HTMLDivElement>(null);
  const [showCursor, setShowCursor] = useState(true);

  const [text] = useTypewriter({
    words: [description],
    loop: 1,
    typeSpeed: 50,
  });

  useEffect(() => {
    const iconElement = iconRef.current;
    if (iconElement) {
      iconElement.style.animation = "rotateY 10s linear infinite";
    }

    const typingDuration = description.length * 50;
    const cursorTimeout = setTimeout(() => {
      setShowCursor(false);
    }, typingDuration);

    return () => clearTimeout(cursorTimeout);
  }, [description]);

  return (
    <div className="w-full bg-slate-50 md:h-60 h-48 shadow-md rounded-xl flex flex-col px-10 py-5 overflow-hidden">
      <div
        ref={iconRef}
        className="w-full h-12 basis-1/3 flex items-center justify-center"
      >
        <Icon size={40} />
      </div>
      <div className="basis-1/3 flex justify-center items-center font-semibold text-lg">
        {title}
      </div>
      <div className="basis-1/3 flex items-center text-center font-light">
        <span>{text}</span>
        {showCursor && <Cursor />}
      </div>
    </div>
  );
};

export default AboutCard;
