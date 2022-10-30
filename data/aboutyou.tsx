import {
  EmojiHappyIcon,
  ColorSwatchIcon,
  CurrencyDollarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  ScaleIcon,
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
  title: "You are a start-up",
  desc: "You have a solid mission, deep knowledge of your domain, and an unfair advantage over the competition. Now you want to build software that catapults you to success.",
  image: fullTimeEmploymentImg,
  bullets: [
    {
      title: "Get your product to the next level",
      desc: "We'll assemble, lead, and partake in a balanced, cross-functional team with a focus on creating value.",
      icon: <CursorClickIcon />,
      category: "Execution",
    },
    {
      title: "Solidify your culture",
      desc: "We'll manage your engineers, and lead by example, embedding a nurturing culture that will allow you to deliver today, and tomorrow.",
      icon: <EmojiHappyIcon />,
      category: "Enablement",
    },
    {
      title: "Let software elevate your business",
      desc: "We'll work with your leadership team to ensure software serves your revenue model, and to explore new income avenues.",
      icon: <CurrencyDollarIcon />,
      category: "Leadership",
    },
  ],
};

const contracting : Service= {
  title: "You are a scale-up",
  desc: "You achieved market-fit, an effective revenue model, and a successful product. Now you are focusing on sustainable growth whilst keeping a handle on emerging complexities.",
  image: contractingImg,
  bullets: [
    {
      title: "Get ready for scale",
      desc: "We work with your engineering and leadership team to ensure your product and technology are fit for your accelerating journey.",
      icon: <AdjustmentsIcon />,
      category: "Execution",
    },
    {
      title: "Capitalize on your strengths and address weaknesses",
      desc: "We support you to tackle gaps within existing product teams, whilst building on their strengths to keep delivering constant value as complexity grows.",
      icon: <ScaleIcon />,
      category: "Enablement",
    },,
    {
      title: "Explore a new product idea",
      desc: "Aligned with your mission and vision, we can help you kickstart new products and agile teams to unlock value from the beginning.",
      icon: <ColorSwatchIcon />,
      category: "Leadership",
    },
  ],
};

export { fullTimeEmployment, contracting };
