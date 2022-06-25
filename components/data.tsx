import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Full time employment",
  desc: "We join companies full-time and with a long-term horizon as a team. We’re a good match for funded start-ups and fast-growing scale-ups.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Not just tech",
      desc: "Not only we build incredible tech. We come with a product, UX, data-science, and management background so we can focus on your needs from day 1.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Start small, grow tall",
      desc: "We love XP. We execute, measure, learn and repeat.",
      icon: <CursorClickIcon />,
    },
    {
      title: "Building foundation",
      desc: "We grow the team, establish modern practices and nurture team members to take on responsibility.",
      icon: <ChartSquareBarIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Contracting",
  desc: "We have limited capacity for contracting as we have full-time jobs. We do have a couple of hours on evenings, weekends and days off where we can help.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Team assessments",
      desc: "We talk to your team, understand your product, and provide insights based on our experience.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Specific challenges",
      desc: "If there's a challenge that's getting on the way, we might be able to help out.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Coaching",
      desc: "We can help you hiring, follow up on your team, and provide continuous feedback.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
