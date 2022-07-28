import React, {ReactNode} from "react";
import Container from "./container";
import {Category} from "@components/skillMatrix";

const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;
const TIME_TO_HEIGHT_RATIO = MILLISECONDS_IN_DAY * 2.5; // NUMBER OF DAYS, DAYS PER PIXEL RATIO
const TODAY = new Date();
TODAY.setHours(0, 0, 0, 0);

export default function Engagements() {
    return (
        <Container id="engagements">
            <Engagement
                company="Snyk"
                from={new Date('2021-09-01')}
                to={TODAY}
                category={{Leadership: 4, Enablement: 3, Execution: 4}}
                position="left"
            >
                <p className="mb-2">We’re working on different teams and in different roles instead of one team.</p>

                <ul className="pl-4">
                    <li className="list-disc mb-1">We hold the roles of staff engineer, staff architect and senior
                        engineer manager.
                    </li>
                    <li className="list-disc mb-1">We engage with the wider company helping to establish domain
                        thinking and engineering
                        values.
                    </li>
                    <li className="list-disc mb-1">Technology: TypeScript, Golang, Kubernetes</li>
                </ul>
            </Engagement>


            <Engagement
                company="Arrival"
                from={new Date('2020-07-01')}
                to={new Date('2021-08-01')}
                category={{Leadership: 1, Enablement: 3, Execution: 5}}
                position="right"
            >
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

            <Engagement
                company="Boclips"
                from={new Date('2018-04-01')}
                to={new Date('2020-07-01')}
                category={{Leadership: 5, Enablement: 5, Execution: 4}}
                position="left"
            >
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
            <Engagement
                company="Pivotal"
                from={new Date('2016-02-01')}
                to={new Date('2018-03-01')}
                category={{Leadership: 2, Enablement: 5, Execution: 5}}
                position="right"
            >
                <p className="mb-2">Working on various engagements as XP consultants, delivering user-centric
                    products, in short
                    time-frames. This is where we met, and where our values were shaped.</p>
            </Engagement>
        </Container>)
}

interface EngagementProps {
    position: "left" | "right"
    company: string
    from: Date
    to: Date
    category: { [key in Category]: number }
    children: ReactNode
}

function Engagement(props: EngagementProps) {
    const TIME_AT_JOB = props.to.getTime() - props.from.getTime();
    const HEIGHT = TIME_AT_JOB / TIME_TO_HEIGHT_RATIO;
    const YEARS_AT_JOB = Math.round(10 * TIME_AT_JOB / (MILLISECONDS_IN_DAY * 365)) / 10;
    let left = props.position === "left"
    return <div
        className="grid grid-cols-9"
    >
        {!left && <Padding/>}
        <div
            className={`sticky top-20 mt-4 h-fit bg-gray-100 dark:bg-trueGray-800 dark:text-gray-200 p-4 rounded-xl shadow-md ${left ? "ml-auto col-start-1 col-end-5" : "mr-auto col-start-6 col-end-10"}`}
        >
            <section className="mb-2 flex justify-between items-baseline">
                <h3 className="text-xl font-medium">{props.company}</h3>
                <time
                    className="ml-3 text-xs font-normal uppercase float-right">{YEARS_AT_JOB} years
                </time>
            </section>
            <section
                className="font-light leading-tight text-justify">{props.children}</section>
        </div>
        {left && <Padding/>}
    </div>;

    function Padding() {
        return <div
            className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 absolute top-0 -z-10 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 dark:bg-trueGray-700 pointer-events-none"></div>
            </div>
            <div
                style={{height: HEIGHT}}
                className="w-6 mt-4 top-20 rounded-full bg-indigo-600 shadow sticky"
            ></div>
        </div>;
    }
}

