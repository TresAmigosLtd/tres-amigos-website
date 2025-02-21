import {
  EmojiHappyIcon,
  ColorSwatchIcon,
  CurrencyDollarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  ScaleIcon,
} from '@heroicons/react/outline'

import startupImg from '../public/img/illustrations/rocket-workshop.inline.svg'
import scaleupImg from '../public/img/illustrations/mission-control.inline.svg'
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
  desc: 'You are under pressure to find product-market fit. You need to hire a team, build culture, develop roadmaps, figure out technology strategy while also fundraising.',
  image: startupImg,
  bullets: [
    {
      title: 'Bootstrap lean product development',
      desc: 'We assemble, lead, and partake in a balanced, cross-functional team with a focus on creating value step by step.',
      icon: <CursorClickIcon />,
      category: 'Execution',
    },
    {
      title: 'Build engineering culture',
      desc: 'We build and manage your engineering team, fostering a culture of innovation and continuous improvement.',
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
  desc: "The rapid growth of previous years accrued tech debt. Teams are losing their ability to move quickly. The people you hired need to adopt a new mindset. You have to do all that whilst must continue scaling.",
  image: scaleupImg,
  bullets: [
    {
      title: 'Tackle scale & complexity',
      desc: 'We help you overcome scaling issues without impeding growth or opportunity.',
      icon: <AdjustmentsIcon />,
      category: 'Execution',
    },
    {
      title: 'Strengthen engineering competence',
      desc: 'We refine processes, celebrate your culture, and increase collaboration across teams.',
      icon: <ScaleIcon />,
      category: 'Enablement',
    },
    {
      title: 'Technical vision and execution',
      desc: 'We align team topology, run company-wide programs, and develop long-term roadmaps to drive foundational change.',
      icon: <ColorSwatchIcon />,
      category: 'Leadership',
    },
  ],
}

export { forStartups, forScaleups }
