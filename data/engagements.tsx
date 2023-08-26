import {Category} from "../components/skillMatrix";

const TODAY = new Date()
export const ENGAGEMENTS : Engagement[] = [
    {
        company: "Snyk",
        description: "We work in different modes. At first we join different teams at Snyk to cross-pollinate the organisation with XP practices, and increase the speed and quality of software delivery. Then, we join forces to turn a struggling team into one of the best performing teams in the organisation.",
        from: new Date("2021-09-01"),
        to: TODAY,
        journal: [
            {
                description: "Establish XP practices across a team of teams",
                from: new Date("2021-09-01"),
                to: new Date("2022-01-01"),
                category: {Leadership: 3, Enablement: 5, Execution: 3}
            },
            {
                description: "Conduct dozens of technical and engineering manager interviews",
                from: new Date("2022-01-01"),
                to: new Date("2022-08-01"),
            },
            {
                description: "Build a technical foundation that delivers 2m ARR",
                from: new Date("2022-08-01"),
                to: TODAY,
                category: {Leadership: 4, Enablement: 2, Execution: 5}
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
        description: "We join as executors in the role of Lead Software Engineers and form an entirely new team to prototype the API platform for Arrival’s EVs.",
        from: new Date("2020-07-01"),
        to: new Date("2021-08-01"),
        journal: [
            {
                description: "Build out a prototype for the Arrival API gateway for telemetry data",
                from: new Date("2020-07-01"),
                to: new Date("2020-10-01"),
                category: {Leadership: 2, Enablement: 1, Execution: 5}
            },
            {
                description: "Lead technical integrations with vehicle operators, bus companies",
                from: new Date("2020-10-01"),
                to: new Date("2021-01-01"),
                category: {Leadership: 4, Enablement: 1, Execution: 5}
            },
            {
                description: "Define specification for vehicle CCTV API based on JSON-RPC",
                from: new Date("2021-01-01"),
                to: new Date("2021-03-01"),
                category: {Leadership: 2, Enablement: 4, Execution: 5}
            },
            {
                description: "Build out authN/Z foundation for an API marketplace",
                from: new Date("2021-03-01"),
                to: new Date("2021-08-01"),
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
        description: "We join as three founding engineers, replacing an existing team which left behind untested legacy code hindering the business from unleashing value. We build up a product team of 15, help the business double revenue YoY.",
        from: new Date("2018-04-01"),
        to: new Date("2020-07-01"),
        journal: [
            {
                description: "Build a hiring pipeline, interview dozens of candidates, hire a team of 12",
                from: new Date("2018-04-01"),
                to: new Date("2018-07-01"),
                category: {Leadership: 2, Enablement: 5, Execution: 3}
            },
            {
                description: "We set up an XP environment, and it attracts top talent until this day",
                from: new Date("2018-07-01"),
                to: new Date("2019-01-01"),
                category: {Leadership: 4, Enablement: 5, Execution: 4}
            },
            {
                description: "Shift sales strategy moving away from whitelabeling to selling API access to education providers",
                from: new Date("2019-01-01"),
                to: new Date("2019-07-01"),
                category: {Leadership: 5, Enablement: 4, Execution: 5}
            },
            {
                description: "We’re part of the executive team, representing product and engineering",
                from: new Date("2019-07-01"),
                to: new Date("2020-07-01"),
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
            "oAuth 2.0",
            "LTI"
        ],
    },
    {
        company: "Pivotal",
        description: "We join Pivotal to transform digital products and projects for the better, and to learn how modern software practices work.",
        from: new Date("2016-02-01"),
        to: new Date("2018-03-01"),
        journal: [
            {
                description: "Work on various client engagements, for 2 years across various domains: finances, utilities, automobile, government...",
                from: new Date("2016-02-01"),
                to: new Date("2017-03-01"),
                category: {Leadership: 1, Enablement: 5, Execution: 5}
            },
            {
                description: "Shape our software practices and values",
                from: new Date("2017-03-01"),
                to: new Date("2018-03-01"),
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
            "Kotlin",
            "React Native"
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
    category?: { [key in Category]: number }
}

