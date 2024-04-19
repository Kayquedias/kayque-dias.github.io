import { useCallback, useEffect, useState } from "react";
import { HiOutlineStatusOnline, HiBadgeCheck } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import moment from "moment-timezone";

import Avatar from "./common/avatar";
import SkillIcon from "./skillIcon";
import TextArt from "./common/textArt";

export default function ProfileOverview() {
  const getCurrentTimeInBrazil = useCallback(
    () => moment().tz("America/Fortaleza").format("hh:mm A z Z "),
    []
  );

  const [time, setTime] = useState(getCurrentTimeInBrazil());

  useEffect(() => {
    const _id = setInterval(() => setTime(getCurrentTimeInBrazil()), 1000);
    return () => clearInterval(_id);
  }, []);

  return (
    <div className="relative max-h-[28rem] h-[28rem] flex flex-col ">
      <div className=" basis-48 max-h-[12rem]">
        <TextArt />
      </div>
      <div className="absolute top-[5.5rem] mx-2 bg-slate-50 rounded-full">
        <Avatar size="w-44" />
      </div>

      <div className="flex-1 bg-white">
        <div className="h-20 "></div>

        {/* Profile details */}
        <div className="px-5">
          <div className="">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-medium">Kayque Dias</h1>
                <SkillIcon icon={HiBadgeCheck} color="#0d6efd" size="30px" />
              </div>
              {/* <p className="font-bold">{currency}/year</p> */}
            </div>

            <p>Fullstack Developer - Reactjs | Nodejs | Typescript </p>
          </div>

          {/* Location */}
          <div className="text-xs my-2 flex gap-2 font-medium text-gray-500">
            <p>Eusébio, Ceará, Brasil</p>
            <p> - </p>
            <p>{time} </p>
          </div>

          {/* Availiability Badge */}
          <div className="my-3">
            <AvailiabilityBadge />
          </div>

          {/* Contact link */}
          <div className="my-4 ">
            <div className="flex gap-2">
              <a href="https://github.com/Kayquedias" target="_blank">
                <SkillIcon icon={FaGithub} title="Github" />
              </a>
              <a
                href="https://www.linkedin.com/in/kayque-dias-363644214/"
                target="_blank"
              >
                <SkillIcon
                  icon={FaLinkedin}
                  className="text-[#0d6efd]"
                  title="LinkedIn"
                />
              </a>{" "}
              <a href="mailto:kayquedias204@gmail.com">
                <SkillIcon
                  icon={MdMail}
                  className=" bg-clip-text text-pink-950 bg-gradient-to-r from-pink-500 to-violet-500"
                  title="GMail"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const AvailiabilityBadge = () => {
  return (
    <div className="flex gap-1 rounded-lg px-2 border w-max border-[#0d6efd]">
      <div>
        <HiOutlineStatusOnline color="#0d6efd" />
      </div>
      <div className="text-xs">
        <p className="text-[#0d6efd] font-medium">Available now</p>
      </div>
    </div>
  );
};
