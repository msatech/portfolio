import { FC } from "react";
import { Button, LargeHeading, Paragraph } from "@/components";
import { AiOutlineMail } from "react-icons/ai";
import { motion  } from "framer-motion";

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <div className="bg-primary-light h-[600px]">
      <div className="max-w-6xl mx-auto flex gap-6 min-h-full">
        <div className="flex min-h-full justify-center flex-col gap-6">
          <motion.div
            animate={{ rotate: [5, -5, 0] }}
            transition={{ duration: 0.2 }}
          >
            <LargeHeading className="text-white">I am Deependra</LargeHeading>
          </motion.div>

          <Paragraph size="sm" className="text-gray-400 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Vel
            eveniet,
          </Paragraph>
          <div className="flex gap-6">
            <Button variant="outline" size="sm" className="w-1/2">
              My Portfolio
            </Button>
            <Button size="sm" className="w-auto px-4 rounded-full">
              <AiOutlineMail className="text-xl text-white" />
            </Button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Banner;
