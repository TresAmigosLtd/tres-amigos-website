import { Category } from '../components/skillMatrix'

const TODAY = new Date()
export const ENGAGEMENTS: Engagement[] = [
  {
    company: 'Snyk',
    description:
      'We joined different teams to cross-pollinate the organisation with XP practices, and increase the speed and quality of software delivery. We later join forces to turn a struggling team into one of the best performing teams in the organisation within 6 months.',
    from: new Date('2021-09-01'),
    to: TODAY,
    journal: [
      {
        description:
          'Accelerate development for a group of teams, acting as catalysts in different teams and leading by example.',
        from: new Date('2021-09-01'),
        to: new Date('2022-01-01'),
        category: { Leadership: 2, Enablement: 5, Execution: 5 },
      },
      {
        description:
          'Build a team from scratch owning billing infrastructure, delivering 2m of self-serve ARR.',
        from: new Date('2022-08-01'),
        to: new Date('2023-01-01'),
        category: { Leadership: 4, Enablement: 5, Execution: 5 },
      },
      {
        description:
          'Build remote team at the center of Snyk to handle all SCM integrations for Snyk.',
        from: new Date('2023-01-01'),
        to: TODAY,
        category: { Leadership: 4, Enablement: 2, Execution: 5 },
      },
    ],
    technology: ['Go', 'TypeScript', 'Vue3', 'Helm', 'Kubernetes', 'Amplitude'],
  },
  {
    company: 'Arrival',
    description:
      'We join as executors in the role of Lead Software Engineers and form an entirely new team to prototype the API platform for Arrival’s EVs.',
    from: new Date('2020-07-01'),
    to: new Date('2021-08-01'),
    journal: [
      {
        description:
          'Architect and implement specification for vehicle CCTV API based on JSON-RPC',
        from: new Date('2020-07-01'),
        to: new Date('2020-10-01'),
        category: { Leadership: 1, Enablement: 1, Execution: 5 },
      },
      {
        description:
          'Architect and implement AuthN/Z foundation for an API marketplace',
        from: new Date('2020-10-01'),
        to: new Date('2021-06-01'),
        category: { Leadership: 1, Enablement: 1, Execution: 5 },
      },
      {
        description:
            'Level up neighbouring team by pair programming, and improving processes.',
        from: new Date('2021-06-01'),
        to: new Date('2021-09-01'),
        category: { Leadership: 1, Enablement: 5, Execution: 3 },
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
      'We join as three founding engineers, and take on CTO and CPO positions of a 50 people company as we manage to help double revenue YoY.',
    from: new Date('2018-04-01'),
    to: new Date('2020-07-01'),
    journal: [
      {
        description:
          'Hire a product team of 15. Recruitment, interviewing, and hiring dozens of candidates.',
        from: new Date('2018-04-01'),
        to: new Date('2018-07-01'),
        category: { Leadership: 2, Enablement: 5, Execution: 3 },
      },
      {
        description:
          'Establish extreme programming values, practices and principles, leading by example.',
        from: new Date('2018-07-01'),
        to: new Date('2019-01-01'),
        category: { Leadership: 4, Enablement: 5, Execution: 5 },
      },
      {
        description:
          'Lead technology-informed sales transition moving away from white-labeling to selling API access to education providers',
        from: new Date('2019-01-01'),
        to: new Date('2019-07-01'),
        category: { Leadership: 5, Enablement: 1, Execution: 3 },
      },
      {
        description:
          'Join executive team, representing product and engineering. Align product development and sales strategy.',
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
      'We join Pivotal to transform digital products and projects for the better, and to learn how modern software practices work.',
    from: new Date('2016-02-01'),
    to: new Date('2018-03-01'),
    journal: [
      {
        description:
          'Work across different industries, companies and technologies.',
        from: new Date('2016-02-01'),
        to: new Date('2017-03-01'),
        category: { Leadership: 1, Enablement: 3, Execution: 5 },
      },
      {
        description:
          'Shape our understanding software practices and values. We find joy in enabling and empowering client engineers to reach excellence.',
        from: new Date('2017-03-01'),
        to: new Date('2018-03-01'),
        category: { Leadership: 3, Enablement: 5, Execution: 3 },
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
