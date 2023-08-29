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
      title: 'Lay the foundation for your engineering culture',
      desc: 'We manage your software engineers, and lead by example. We embed a nurturing culture that will allow you to deliver today, and tomorrow.',
      icon: <EmojiHappyIcon />,
      category: 'Enablement',
    },
    {
      title: 'Inject technology thinking',
      desc: 'We work with your leadership team to ensure software serves your revenue model, and to explore new income avenues.',
      icon: <CurrencyDollarIcon />,
      category: 'Leadership',
    },
  ],
}

const forScaleups: Service = {
  title: 'For scale-ups',
  desc: "You achieved market-fit, an effective revenue model, and a successful product. You have some scaling issues on your hands, and you're worried about sustainable growth. Your team, as well as complexities are growing.",
  image: contractingImg,
  bullets: [
    {
      title: 'Tackle scale',
      desc: 'We help you overcome scaling issues without impeding growth or opportunity.',
      icon: <AdjustmentsIcon />,
      category: 'Execution',
    },
    {
      title: 'Strengthen the foundation',
      desc: 'We address gaps within existing engineering teams, whilst building on their strengths to keep delivering constant value as complexity grows.',
      icon: <ScaleIcon />,
      category: 'Enablement',
    },
    ,
    {
      title: 'Set direction',
      desc: 'We can help refine processes, team missions and architecture to accelerate your teams.',
      icon: <ColorSwatchIcon />,
      category: 'Leadership',
    },
  ],
}

export { forStartups, forScaleups }
