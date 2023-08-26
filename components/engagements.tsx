import React, {ForwardedRef, useEffect, useRef, useState} from "react";
import Container from "./container";
import {Engagement, JournalEntry} from "@data/engagements";
import {useInView} from "react-intersection-observer";
import {useScrollPosition} from "@n8tb1t/use-scroll-position";
import {typeFast} from "../utils/typical";

const stickyTop = 'top-56 sm:top-52 md:top-56'
const formatDate = (date: Date) => date.toLocaleDateString('en-us', { year:"numeric", month:"short"});
const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;
const MILLIS_PER_PIXEL = Math.round(MILLISECONDS_IN_DAY * 1.9);
const TODAY = new Date();
const EMPTY_ENTRY: JournalEntry = {from: undefined, to: undefined, description: '                                     '};
TODAY.setHours(0, 0, 0, 0);

export default function Engagements({engagements}: { engagements: Engagement[] }) {
    const {ref, inView} = useInView()
    const [journalEntry, setJournalEntry] = useState<JournalEntry>()
    const timemarkRef = useRef<HTMLElement>()
    const gridRef = useRef<HTMLElement>()
    useScrollPosition(({prevPos, currPos}) => {
        if (!inView)
            return
        const currentTime = getCurrentTime(timemarkRef?.current?.getBoundingClientRect(), gridRef?.current?.getBoundingClientRect(), engagements)
        const {engagement, journalEntry} = getEngagementAndJournal(currentTime, engagements)
        setJournalEntry(journalEntry ?? EMPTY_ENTRY)
    }, [inView, setJournalEntry])
    return (
        <Container id="engagements-content" className="">
            <section ref={ref} className="pb-8">
                <Timemark ref={timemarkRef} journal={journalEntry}/>
                <FloatingJournal journal={journalEntry}/>
                <section ref={gridRef}>
                    {engagements.map(e => <EngagementRow key={e.company} {...e}/>)}
                </section>
            </section>
        </Container>
    )
}

function FloatingJournal(props: { journal: JournalEntry }) {
    const typeRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if(!typeRef || !typeRef.current) return;
        else typeFast(typeRef.current, props.journal?.description);

    }, [props.journal, props.journal?.description])
    return <section className={`sticky ${stickyTop} pl-6 md:pl-12 font-light leading-tight col-start-6 col-span-3 mx-auto my-auto left-1/2 w-5/12 xl:w-4/12`}>
        {props.journal?.to && <section className="transition-opacity text-xs md:text-lg font-light mb-2 text-gray-500">{formatDate(props.journal?.from)} - {formatDate(props.journal?.to)}</section>}
        <section id="journal" className={`${props.journal?.to ? 'animate-cursor' : ''} text-sm md:text-lg`} ref={typeRef}>
    </section></section>;
}

const Timemark = React.forwardRef((props: { journal: JournalEntry }, ref: ForwardedRef<HTMLElement>) => <
    section ref={ref} className={`sticky ${stickyTop} z-10`}><Grid>
    <div className="col-start-5 col-end-6 mx-auto my-auto w-6 md:w-10 h-3 border-4 border-gray-300 rounded-full"></div>
</Grid></section>)


const EngagementRow = React.forwardRef((props: Engagement, ref: ForwardedRef<HTMLElement>) => {
    const TIME_AT_JOB = props.to.getTime() - props.from.getTime();
    const HEIGHT = Math.round(TIME_AT_JOB / MILLIS_PER_PIXEL);
    const YEARS_AT_JOB = Math.round(10 * TIME_AT_JOB / (MILLISECONDS_IN_DAY * 365)) / 10;
    return <Grid>
        <div
            className={`sticky ${stickyTop} mt-4 h-fit bg-gray-100 dark:bg-trueGray-800 dark:text-gray-200 p-4 rounded-xl shadow-md ml-auto col-start-1 col-end-5`}
        >
            <section className="mb-2 flex justify-between items-baseline">
                <h3 className="text-base md:text-xl font-medium">{props.company}</h3>
                <time
                    className="ml-3 text-xs font-normal uppercase float-right text-gray-400">{YEARS_AT_JOB} years
                </time>
            </section>
            <section
                className="text-sm md:text-base font-light leading-tight text-gray-300">{props.description}</section>
        </div>
        <section
            className="col-start-5 col-end-6 mr-10 mx-auto relative w-full flex items-center justify-center">
            <div className="h-full w-3 md:w-6 absolute top-0 -z-10 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 dark:bg-trueGray-700 pointer-events-none"></div>
            </div>

            <section
                ref={ref}
                style={{height: HEIGHT}}
                className={`w-3 md:w-6 mt-4 top-20 rounded-sm bg-gray-300 dark:bg-trueGray-600 animate-gradient shadow`}
            ></section>
        </section>
    </Grid>;

})

function Grid({children}) {
    return <div
        className="grid grid-cols-9"
    >{children}</div>
}

function getCurrentTime(timemarkRect: DOMRect | undefined, gridRef: DOMRect | undefined, engagements: Engagement[]) {
    if (!timemarkRect) return undefined
    if (!gridRef) return undefined

    const to = engagements[0].to
    const from = engagements[engagements.length - 1].from

    const timeRatio = (gridRef.top - timemarkRect.top) / gridRef.height
    return new Date(to.getTime() + (to.getTime() - from.getTime()) * timeRatio)
}

const YESTERDAY = new Date(TODAY.setDate(TODAY.getDate()-1));
function getEngagementAndJournal(currentTime: Date, engagements: Engagement[]) {
    const engagement = engagements.find(e => e.from <= currentTime && e.to > currentTime);
    const journalEntry = engagement?.journal?.find(j => j.from <= currentTime && j.to > currentTime)
    if(currentTime > YESTERDAY) return {engagement, journalEntry: undefined}
    return {engagement, journalEntry}
}
