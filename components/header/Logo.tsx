import Image from "next/image";
import { FC } from "react";
import { Paragraph } from "@/components";

interface LogoProps {
  logo?: string;
}

const Logo: FC<LogoProps> = ({ logo }) => {
  return (
    <div className="cursor-pointer">
      {logo ? (
        <Image width={100} height={100} src={logo} alt="logo" />
      ) : (
        <Paragraph size="lg"  className="text-white font-semibold "> Logo </Paragraph>
      )}
    </div>
  );
};

export default Logo;
