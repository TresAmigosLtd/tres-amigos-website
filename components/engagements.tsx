import React, {ForwardedRef, ReactNode, useRef} from "react";
import Container from "./container";
import {Engagement} from "@data/engagements";
import {useInView} from "react-intersection-observer";
import {useScrollPosition} from "@n8tb1t/use-scroll-position";

const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;
const TIME_TO_HEIGHT_RATIO = MILLISECONDS_IN_DAY * 1.9; // NUMBER OF DAYS, DAYS PER PIXEL RATIO
const TODAY = new Date();
TODAY.setHours(0, 0, 0, 0);

export default function Engagements({engagements} : {engagements: Engagement[]}) {
    const {ref, inView} = useInView()
    const timemarkRef = useRef()
    useScrollPosition(({prevPos, currPos}) => {
        if (!inView)
            return
        console.log(currPos.x)
        console.log(currPos.y)
    }, [inView])
    return (
        <Container id="engagements">
            <section ref={ref}>
                <Timemark ref={timemarkRef}/>
                {engagements.map(e => <EngagementRow key={e.company} {...e}/>)}
            </section>
        </Container>
    )
}

const Timemark = React.forwardRef((props, ref: ForwardedRef<HTMLElement>) => <
    section ref={ref} className="sticky top-20 z-20"><Grid>
    <div className="col-start-5 col-end-6 mx-auto my-auto w-10 h-3 border-4 border-gray-300 rounded-full"></div>
</Grid></section>)


function EngagementRow(props: Engagement) {
    const TIME_AT_JOB = props.to.getTime() - props.from.getTime();
    const HEIGHT = Math.round(TIME_AT_JOB / TIME_TO_HEIGHT_RATIO);
    const YEARS_AT_JOB = Math.round(10 * TIME_AT_JOB / (MILLISECONDS_IN_DAY * 365)) / 10;
    return <Grid>
        <div
            className={`sticky top-20 mt-4 h-fit bg-gray-100 dark:bg-trueGray-800 dark:text-gray-200 p-4 rounded-xl shadow-md ml-auto col-start-1 col-end-5`}
        >
            <section className="mb-2 flex justify-between items-baseline">
                <h3 className="text-xl font-medium">{props.company}</h3>
                <time
                    className="ml-3 text-xs font-normal uppercase float-right">{YEARS_AT_JOB} years
                </time>
            </section>
            <section
                className="font-light leading-tight text-justify">{props.description}</section>
        </div>
        <Timeline/>
    </Grid>;

    function Timeline() {
        return <div
            className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 absolute top-0 -z-10 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 dark:bg-trueGray-700 pointer-events-none"></div>
            </div>

            <div
                style={{height: HEIGHT}}
                className={`w-6 mt-4 top-20 rounded-sm bg-gray-300 dark:bg-trueGray-600 animate-gradient shadow`}
            ></div>
        </div>;
    }
}

function Grid({children}) {
    return <div
        className="grid grid-cols-9"
    >{children}</div>
}
