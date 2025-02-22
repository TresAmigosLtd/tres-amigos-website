import { Category } from '../components/skillMatrix'

const TODAY = new Date()
export const ENGAGEMENTS: Engagement[] = [
  {
    company: 'Snyk',
    description:
      'At Snyk, our second scale-up experience, we successfully navigated the decomposition of monolithic architecture, rapid growth spurts, layoffs, and leadership and mindset transitions. We are leading teams, projects and programs across the company.',
    from: new Date('2021-09-01'),
    to: TODAY,
    journal: [
      {
        description:
          'Mission: Upskill engineers across multiple teams as the organisation transitions from start-up to scale-up mentality.',
        from: new Date('2021-09-01'),
        to: new Date('2022-01-01'),
        category: { Leadership: 2, Enablement: 5, Execution: 5 },
      },
      {
        description:
          'Mission: Build Snyk\'s billing team from scratch. The team increased self-serve ARR from 0.5m to 2m within 12 months.',
        from: new Date('2022-01-01'),
        to: new Date('2023-01-01'),
        category: { Leadership: 4, Enablement: 5, Execution: 5 },
      },
      {
        description:
          'Mission: Turn around a platform team to enable largest enterprise customers on-board successfully to Snyk.',
        from: new Date('2023-01-01'),
        to: new Date('2024-01-01'),
        category: { Leadership: 3, Enablement: 5, Execution: 4 },
      },
      {
        description:
          'Mission: Lead Snyk\'s most important program addressing deep technical limitations of the platform.',
        from: new Date('2024-01-01'),
        to: new Date('2025-01-01'),
        category: { Leadership: 5, Enablement: 4, Execution: 1 },
      },
      {
        description:
          'Mission: Accelerate ability to innovate on Snyk\'s best-selling product.',
        from: new Date('2025-01-01'),
        to: TODAY,
        category: { Leadership: 5, Enablement: 3, Execution: 3 },
      },
    ],
    technology: ['Go', 'TypeScript', 'Vue3', 'Helm', 'Kubernetes', 'Amplitude'],
  },
  {
    company: 'Arrival',
    description:
      'We join Arrival pre-IPO as executors to quickly prototype an API and developer portal for Arrival’s EVs.',
    from: new Date('2020-07-01'),
    to: new Date('2021-09-01'),
    journal: [
      {
        description:
          'Mission: Design and implement specification for vehicle CCTV API based on JSON-RPC.',
        from: new Date('2020-07-01'),
        to: new Date('2020-10-01'),
        category: { Leadership: 2, Enablement: 1, Execution: 5 },
      },
      {
        description:
          'Mission: Design and implement AuthN/Z foundation for an API marketplace.',
        from: new Date('2020-10-01'),
        to: new Date('2021-09-01'),
        category: { Leadership: 1, Enablement: 1, Execution: 5 },
      },
    ],
    technology: [
      'Gatsby',
      'React',
      'TypeScript',
      'Spring',
      'Kotlin',
      'Kubernetes',
      'JSON-RPC',
      'JSONAPI',
      'Keycloak',
      'oAuth 2.0',
    ],
  },
  {
    company: 'Boclips',
    description:
      'We join a six person edtech start-up as founding engineers. We build a small but mighty R&D organisation spanning engineering, product and design. We transitioned the revenue model and underlying technology from a licensing company to an ARR-based B2B video streaming business.',
    from: new Date('2018-04-01'),
    to: new Date('2020-07-01'),
    journal: [
      {
        description:
          'Mission: Build a high-performing product from scratch. We hire and manage 15 across engineering, product and design. Foster a culture outlasting our time at Boclips.',
        from: new Date('2018-04-01'),
        to: new Date('2018-07-01'),
        category: { Leadership: 2, Enablement: 5, Execution: 3 },
      },
      {
        description:
          'Mission: Establish extreme programming values, practices and principles, leading by example.',
        from: new Date('2018-07-01'),
        to: new Date('2019-01-01'),
        category: { Leadership: 4, Enablement: 5, Execution: 5 },
      },
      {
        description:
          'Mission: Build scalable platform to enable a sales strategy pivot away from white-labeling and towards selling data via APIs. ',
        from: new Date('2019-01-01'),
        to: new Date('2019-07-01'),
        category: { Leadership: 5, Enablement: 1, Execution: 3 },
      },
      {
        description:
          'Mission: Represent product and engineering on the board of investors. Align product development and sales strategy.',
        from: new Date('2019-07-01'),
        to: new Date('2020-07-01'),
        category: { Leadership: 5, Enablement: 1, Execution: 1 },
      },
    ],
    technology: [
      'Kotlin',
      'Spring',
      'TypeScript',
      'React',
      'Kubernetes',
      'Keycloak',
      'oAuth 2.0',
      'LTI',
    ],
  },
  {
    company: 'Pivotal',
    description:
      'We join Pivotal, which is where we met. We learn many of the software delivery values, practices, and principles that we still use today.',
    from: new Date('2016-02-01'),
    to: new Date('2018-03-01'),
    journal: [
      {
        description:
          'Mission: Apply lean product methodology and agile practices to dozens of software projects, ranging from greenfield start-ups to the largest enterprises.',
        from: new Date('2016-02-01'),
        to: new Date('2018-03-01'),
        category: { Leadership: 1, Enablement: 5, Execution: 5 },
      },
    ],
    technology: [
      'Spring',
      'Java 8',
      'TypeScript',
      'Ionic',
      'React',
      'Vue',
      'Kotlin',
      'React Native',
    ],
  },
]

export interface Engagement {
  company: string
  from: Date
  to: Date
  description: string
  journal?: JournalEntry[]
  technology: string[]
}

export interface JournalEntry {
  from: Date
  to: Date
  description: string
  category: { [key in Category]: number }
}
