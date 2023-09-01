import {
  EmojiHappyIcon,
  ColorSwatchIcon,
  CurrencyDollarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  ScaleIcon,
} from '@heroicons/react/outline'

import fullTimeEmploymentImg from '../public/img/benefit-one.png'
import contractingImg from '../public/img/benefit-two.png'
import { ReactElement, ReactNode } from 'react'
import { Category } from '@components/skillMatrix'

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

const forStartups: Service = {
  title: 'For start-ups',
  desc: 'You have a solid mission, deep knowledge of your domain, and an unfair advantage over the competition. Now you want to build software in-house that catapults you to success.',
  image: fullTimeEmploymentImg,
  bullets: [
    {
      title: 'Iterative product development',
      desc: 'We assemble, lead, and partake in a balanced, cross-functional team with a focus on creating value step by step.',
      icon: <CursorClickIcon />,
      category: 'Execution',
    },
    {
      title: 'Set your engineering culture',
      desc: 'We manage your engineering team. We embed a nurturing culture that will allow you to deliver today, and tomorrow.',
      icon: <EmojiHappyIcon />,
      category: 'Enablement',
    },
    {
      title: 'Inject technology thinking',
      desc: 'We work with your leadership team to ensure software serves your revenue model, and serves as an enabler.',
      icon: <CurrencyDollarIcon />,
      category: 'Leadership',
    },
  ],
}

const forScaleups: Service = {
  title: 'For scale-ups',
  desc: "You achieved market-fit, an effective revenue model, and a successful product. You have scaling issues on your hands, and it feels like you're assembling a plane whilst flying.",
  image: contractingImg,
  bullets: [
    {
      title: 'Tackle scale & complexity',
      desc: 'We help you overcome scaling issues without impeding growth or opportunity.',
      icon: <AdjustmentsIcon />,
      category: 'Execution',
    },
    {
      title: 'Strengthen your engineering competence',
      desc: 'We refine processes, celebrate your culture, and increase collaboration across teams.',
      icon: <ScaleIcon />,
      category: 'Enablement',
    },
    ,
    {
      title: 'Define engineering strategy',
      desc: 'We align team missions and forge an architectural vision to accelerate your teams.',
      icon: <ColorSwatchIcon />,
      category: 'Leadership',
    },
  ],
}

export { forStartups, forScaleups }
