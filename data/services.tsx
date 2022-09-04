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
      title: "Place us in the same team.",
      desc: "We’re a well-oiled machine, ideal to bootstrap a new team or accelerate a struggling team.",
      icon: <CursorClickIcon />,
      category: "Execution",
    },
    {
      title: "Place us in different teams.",
      desc: "We work in different roles and teams to cross-pollinate and align across team boundaries.",
      icon: <EmojiHappyIcon />,
      category: "Leadership",
    },
  ],
};

const contracting : Service= {
  title: "Contracting",
  desc: "We have limited capacity for contracting as we have full-time jobs. We do have a couple of hours on evenings, weekends and days off where we can help.",
  image: contractingImg,
  bullets: [
    {
      title: "Assess & mentor",
      desc: "We help you assess the engineering quality of your engineering team, and improve it through coaching.",
      icon: <DeviceMobileIcon />,
      category: "Execution",
    },
    {
      title: "Software delivery",
      desc: "We deliver entire software projects for you or support the delivery of an existing project.",
      icon: <AdjustmentsIcon />,
      category: "Leadership",
    },
  ],
};

export { fullTimeEmployment, contracting };
