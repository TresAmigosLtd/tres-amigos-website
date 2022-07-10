import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import fullTimeEmploymentImg from "../public/img/benefit-one.png";
import contractingImg from "../public/img/benefit-two.png";

const fullTimeEmployment = {
  title: "Full-time employment",
  desc: "We join companies full-time and with a long-term horizon as a team. We’re a good match for funded start-ups and fast-growing scale-ups.",
  image: fullTimeEmploymentImg,
  bullets: [
    {
      title: "More than software engineers.",
      desc: "We come with a product, UX, data science, and management experience.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Start small, grow tall.",
      desc: "We love extreme programming. We execute, measure, learn and repeat.",
      icon: <CursorClickIcon />,
    },
    {
      title: "Enable others.",
      desc: "We thrive at enabling team members to take on responsibility.",
      icon: <ChartSquareBarIcon />,
    },
  ],
};

const contracting = {
  title: "Contracting",
  desc: "We have limited capacity for contracting as we have full-time jobs. We do have a couple of hours on evenings, weekends and days off where we can help.",
  image: contractingImg,
  bullets: [
    {
      title: "Software delivery",
      desc: "We can build the software you need.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Due diligence",
      desc: "We can help you assess the engineering quality of your team or business.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Coaching & Mentoring",
      desc: "We can coach your team and provide and continuous feedback.",
      icon: <SunIcon />,
    },
  ],
};

export { fullTimeEmployment, contracting };
