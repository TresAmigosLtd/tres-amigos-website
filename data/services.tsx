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
import {ReactElement, ReactNode} from "react";
import {Category} from "@components/skillMatrix";

export interface Service {
  title: string
  desc: string
  image: any
  bullets: Benefit[]
}

export interface Benefit {
  title: string
  desc: string
  icon: ReactElement
  category: Category
}

const fullTimeEmployment: Service = {
  title: "Full-time employment",
  desc: "We join companies full-time and with a long-term horizon as a team. We’re a good match for funded start-ups and fast-growing scale-ups.",
  image: fullTimeEmploymentImg,
  bullets: [
    {
      title: "Start small, grow tall.",
      desc: "We love extreme programming. We execute, measure, learn and repeat.",
      icon: <CursorClickIcon />,
      category: "Execution",
    },
    {
      title: "More than software engineers.",
      desc: "We come with a product, UX, data science, and management experience.",
      icon: <EmojiHappyIcon />,
      category: "Leadership",
    },
    {
      title: "Enable others.",
      desc: "We thrive at enabling team members to take on responsibility.",
      icon: <ChartSquareBarIcon />,
      category: "Enablement",
    },
  ],
};

const contracting : Service= {
  title: "Contracting",
  desc: "We have limited capacity for contracting as we have full-time jobs. We do have a couple of hours on evenings, weekends and days off where we can help.",
  image: contractingImg,
  bullets: [
    {
      title: "Software delivery",
      desc: "We can build the software you need.",
      icon: <DeviceMobileIcon />,
      category: "Execution",
    },
    {
      title: "Due diligence",
      desc: "We can help you assess the engineering quality of your team or business.",
      icon: <AdjustmentsIcon />,
      category: "Leadership",
    },
    {
      title: "Coaching & Mentoring",
      desc: "We can coach your team and provide and continuous feedback.",
      icon: <SunIcon />,
      category: "Enablement",
    },
  ],
};

export { fullTimeEmployment, contracting };
