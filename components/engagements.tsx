import React, {ReactNode} from "react";
import Container from "./container";

export default function Engagements(props) {
    return (
        <Container>
            <div
                className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
            >
                <Engagement company="Snyk" time="until today" position="left">
                    <p className="mb-2">We’re working on different teams and in different roles instead of one team.</p>

                    <ul className="pl-4">
                        <li className="list-disc mb-1">We hold the roles of staff engineer, staff architect and senior engineer manager.</li>
                        <li className="list-disc mb-1">We engage with the wider company helping to establish domain thinking and engineering
                            values.
                        </li>
                        <li className="list-disc mb-1">Technology: TypeScript, Golang, Kubernetes</li>
                    </ul>
                </Engagement>

                <Engagement company="Arrival" time="1 year" position="right">
                    <p className="mb-2">We join as three Lead Software Engineers founding a new team.</p>

                    <ul className="pl-4">
                        <li className="list-disc mb-1">
                            Building out a prototype for the <a className="underline"
                                                                href="https://developer.arrival.com/" target="_blank">Arrival
                            API</a> gateway for telemetry data
                        </li>
                        <li className="list-disc mb-1">
                            Leading technical integrations with vehicle operators, bus companies
                        </li>
                        <li className="list-disc mb-1">
                            Technology: Kubernetes, Spring, Gatsby, OpenApi Spec
                        </li>
                    </ul>
                </Engagement>

                <Engagement company="Boclips" time="2.5 years" position="left">
                    <p className="mb-2">
                        We join as three founding engineers, replacing an existing team which left behind untested
                        legacy code.
                    </p>

                    <ul className="pl-4">
                        <li className="list-disc mb-1">
                            Build a hiring pipeline, interview process and management structure to attract and retain
                            talent.
                        </li>
                        <li className="list-disc mb-1">Turned the business from a traditional sales-led licensing model
                            into an ARR-led, tech-first company
                        </li>
                        <li className="list-disc">Transitioning the company from whitelabeling to API-first, leading
                            technical integration with education providers
                        </li>
                    </ul>

                </Engagement>
                <Engagement company="Pivotal" time="2.5 years" position="right">
                    <p className="mb-2">Working on various engagements as XP consultants, delivering user-centric products, in short
                        time-frames. This is where we met, and where our values were shaped.</p>
                </Engagement>
            </div>
        </Container>)
}

interface EngagementProps {
    position: "left" | "right"
    company: string
    time: string
    children: ReactNode
}

function Engagement(props: EngagementProps) {
    let left = props.position === "left"
    return <div className={`flex md:contents ${left && "flex-row-reverse"}`}>
        {!left && <Padding/>}
        <div
            className={`bg-indigo-600 dark:bg-indigo-100 p-4 rounded-xl my-4 shadow-md ${left ? "ml-auto col-start-1 col-end-5" : "mr-auto col-start-6 col-end-10"}`}
        >
            <section className="mb-2 flex justify-between items-baseline">
                <h3 className="text-xl font-medium dark:text-indigo-800 text-gray-50">{props.company}</h3>
                <time
                    className="ml-3 text-xs font-normal text-gray-300 dark:text-gray-500 uppercase float-right">{props.time}</time>
            </section>
            <section
                className="dark:text-gray-500 font-light text-gray-200 leading-tight text-justify">{props.children}</section>
        </div>
        {left && <Padding/>}
    </div>;
}

function Padding() {
    return <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
        <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-1 bg-indigo-300 dark:bg-indigo-100 pointer-events-none"></div>
        </div>
        <div
            className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-600 shadow"
        ></div>
    </div>;
}
