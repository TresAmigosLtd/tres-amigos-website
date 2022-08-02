import {Category} from "../components/skillMatrix";

const TODAY = new Date()
export const ENGAGEMENTS : Engagement[] = [
    {
        company: "Snyk",
        description: "We join Snyk on different teams to cross-pollinate the organisation with XP practices and speed up software delivery.",
        from: new Date("2021-09-01"),
        to: TODAY,
        journal: [
            {
                description: "We hold the roles of staff engineer, staff architect and senior engineer manager",
                from: new Date("2021-09-01"),
                category: {Leadership: 4, Enablement: 4, Execution: 4}
            },
            {
                description: "We establish XP practices across a team of teams",
                from: new Date("2021-11-01"),
                category: {Leadership: 3, Enablement: 5, Execution: 3}
            },
            {
                description: "We build technical foundation that delivers 2m ARR",
                from: new Date("2022-01-01"),
                category: {Leadership: 4, Enablement: 2, Execution: 5}
            },
            {
                description: "We deliver a company wide talk on constructive feedback",
                from: new Date("2022-07-20"),
                category: {Leadership: 4, Enablement: 5, Execution: 1}
            },
        ],
        technology: [
            "Go",
            "TypeScript",
            "Vue3",
            "Helm",
            "Kubernetes",
            "Amplitude",
        ],
    },
    {
        company: "Arrival",
        description: "We join as three Lead Software Engineers an entirely new team to prototype out the API platform for Arrival’s EVs.",
        from: new Date("2020-07-01"),
        to: new Date("2021-08-01"),
        journal: [
            {
                description: "Building out a prototype for the Arrival API gateway for telemetry data",
                from: new Date("2020-07-01"),
                category: {Leadership: 2, Enablement: 1, Execution: 5}
            },
            {
                description: "Leading technical integrations with vehicle operators, bus companies",
                from: new Date("2020-10-01"),
                category: {Leadership: 4, Enablement: 1, Execution: 5}
            },
            {
                description: "Spec vehicle CCTV API based on JSON-RPC",
                from: new Date("2021-01-01"),
                category: {Leadership: 2, Enablement: 4, Execution: 5}
            },
            {
                description: "Build out authN/Z foundation for an API marketplace",
                from: new Date("2021-03-01"),
                category: {Leadership: 3, Enablement: 5, Execution: 5}
            },
        ],
        technology: [
            "Gatsby",
            "React",
            "TypeScript",
            "Spring",
            "Kotlin",
            "Kubernetes",
            "JSON-RPC",
            "JSONAPI",
            "Keycloak",
            "oAuth 2.0",
        ],
    },
    {
        company: "Boclips",
        description: "We join as three founding engineers, replacing an existing team which left behind untested legacy code hindering the business from unleashing value.",
        from: new Date("2018-04-01"),
        to: new Date("2020-07-01"),
        journal: [
            {
                description: "Build a hiring pipeline, interview dozens of candidates, hire a team of 12",
                from: new Date("2018-04-01"),
                category: {Leadership: 2, Enablement: 5, Execution: 3}
            },
            {
                description: "We setup XP environment, and it attracts top talent until this day",
                from: new Date("2018-07-01"),
                category: {Leadership: 4, Enablement: 5, Execution: 4}
            },
            {
                description: "Shift sales strategy moving away from whitelabeling to selling API access to education providers",
                from: new Date("2019-01-01"),
                category: {Leadership: 5, Enablement: 4, Execution: 5}
            },
            {
                description: "We’re part of the executive team, representing product and engineering",
                from: new Date("2019-07-01"),
                category: {Leadership: 5, Enablement: 4, Execution: 3}
            },
        ],
        technology: [
            "Kotlin",
            "Spring",
            "TypeScript",
            "React",
            "Kubernetes",
            "Keycloak",
        ],
    },
    {
        company: "Pivotal",
        description: "We joined Pivotal not knowing each other. We joined Pivotal to transform digital products and projects for the better, and to learn how modern software practices work.",
        from: new Date("2016-02-01"),
        to: new Date("2018-03-01"),
        journal: [
            {
                description: "Working on various client engagements, for 2 years across various domains: finances, utilities, automobile, government...",
                from: new Date("2016-02-01"),
                category: {Leadership: 1, Enablement: 5, Execution: 5}
            },
            {
                description: "This is where we met and where our software practices and values were shaped",
                from: new Date("2017-03-01"),
                category: {Leadership: 3, Enablement: 5, Execution: 4}
            },
        ],
        technology: [
            "Spring",
            "Java 8",
            "TypeScript",
            "Ionic",
            "React",
            "Vue",
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
    description: string
    category?: { [key in Category]: number }
}
