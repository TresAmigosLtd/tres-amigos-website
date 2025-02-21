import React, {ForwardedRef, memo, useContext, useEffect, useRef, useState} from 'react'
import {Engagement, JournalEntry} from '@data/engagements'
import {useInView} from 'react-intersection-observer'
import {useScrollPosition} from '@n8tb1t/use-scroll-position'
import {typeFast} from '../utils/typical'
import {Category, categoryGradients} from "@components/skillMatrix";
import {EngagementJournalContext} from "@pages/index";

const stickyTop = 'top-40 sm:top-40 md:top-48'
const formatDate = (date: Date) =>
    date.toLocaleDateString('en-us', {year: 'numeric', month: 'short'})
const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24

function isBiggerThanMD(width) {
    return width > 768;
}

const getMillisPerPixel = width => {
    let factor
    if (width > 1024) factor = 2.1
    else if (isBiggerThanMD(width)) factor = 1.9
    else if (width > 400) factor = 1.8
    else factor = 1.7

    return Math.round(MILLISECONDS_IN_DAY * factor)
}
const TODAY = new Date()
TODAY.setHours(0, 0, 0, 0)

export default function Engagements({
                                        engagements,
                                    }: {
    engagements: Engagement[]
}) {
    const {ref, inView} = useInView()
    const {width} = useWindowDimensions()
    const [journalEntry, setJournalEntry] = useState<JournalEntry>()
    const [currentTime, setCurrentTime] = useState<Date>()
    const timemarkRef = useRef<HTMLElement>()
    const gridRef = useRef<HTMLElement>()
    const journalEntryContext = useContext(EngagementJournalContext);

    useScrollPosition(
        ({prevPos, currPos}) => {
            if (!inView) return
            const currentTime = getCurrentTime(
                timemarkRef?.current?.getBoundingClientRect(),
                gridRef?.current?.getBoundingClientRect(),
                engagements,
            )
            const {engagement, journalEntry} = getEngagementAndJournal(
                currentTime,
                engagements,
            )
            setJournalEntry(journalEntry)
            journalEntryContext.setJournalEntry(journalEntry ?? null);
            setCurrentTime(currentTime)
        },
        [inView, setJournalEntry],
    )
    return (
        <section id='engagements-content' className='px-0 pb-48 md:pb-32'>
            <section ref={ref}>
                <Timemark ref={timemarkRef} journal={journalEntry}/>
                <FloatingJournal journal={journalEntry} currentTime={currentTime} width={width}/>
                <section ref={gridRef}>
                    {engagements.map(e => (
                        <EngagementRow key={e.company} {...e} width={width}/>
                    ))}
                </section>
            </section>
        </section>
    )
}

const FloatingJournal = memo((props: { journal: JournalEntry; currentTime: Date, width: number }) => {
    const journalDescriptionRef = useRef<HTMLDivElement>(null)
    const executionDescriptionRef = useRef<HTMLDivElement>(null)
    const enablementDescriptionRef = useRef<HTMLDivElement>(null)
    const leadershipDescriptionRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (!journalDescriptionRef || !journalDescriptionRef.current || !props.journal || !props.journal.description) return
        else {
            journalDescriptionRef.current.textContent = '';
            executionDescriptionRef.current.textContent = '';
            enablementDescriptionRef.current.textContent = '';
            leadershipDescriptionRef.current.textContent = '';

            typeFast(
                journalDescriptionRef.current,
                props.journal.description,
                executionDescriptionRef.current,
                `Execution    ${`█${isBiggerThanMD(props.width) ? ' ' : ''}`.repeat(props.journal.category.Execution)}`,
                enablementDescriptionRef.current,
                `Enablement   ${`█${isBiggerThanMD(props.width) ? ' ' : ''}`.repeat(props.journal.category.Enablement)}`,
                leadershipDescriptionRef.current,
                `Leadership   ${`█${isBiggerThanMD(props.width) ? ' ' : ''}`.repeat(props.journal.category.Leadership)}`,
            )
        }
    }, [props.journal, props.journal?.from])

    if (!props.journal || !props.journal.description) return null;
    return (
        <section
            className={`sticky ${stickyTop} pl-6 md:pl-12 font-mono left-1/2 w-5/12 xl:w-4/12 `}
        >
            <section
                className={`absolute bg-gray-100 dark:bg-trueGray-800 dark:text-gray-200 p-4 rounded-xl shadow-md w-full`}>
                {props.journal?.to && (
                    <section className='transition-opacity text-xs md:text-lg font-light mb-2 dark:text-gray-400 text-gray-600 uppercase'>
                        {formatDate(props.currentTime)}
                    </section>
                )}
                <section
                    className={`leading-tight text-sm md:text-base whitespace-pre-wrap`}
                >
                    <span id='journal' className={props.journal?.to ? 'animate-cursor' : ''} ref={journalDescriptionRef}></span>
                    <section>
                        <span id='execution' className="mt-4 block gradient-pink text-gradient" ref={executionDescriptionRef}></span>
                        <span id='enablement' className="block gradient-blue text-gradient" ref={enablementDescriptionRef}></span>
                        <span id='leadership' className="block gradient-orange text-gradient" ref={leadershipDescriptionRef}></span>
                    </section>
                </section>
            </section>
        </section>
    )
})

const Timemark = React.forwardRef(
    (props: { journal: JournalEntry }, ref: ForwardedRef<HTMLElement>) => (
        <section ref={ref} className={`sticky ${stickyTop} z-10`}>
            <Grid>
                <div
                    className='col-start-5 col-end-6 mx-auto my-auto w-6 md:w-10 h-3 border-4 border-gray-400 dark:border-gray-300 rounded-full'></div>
            </Grid>
        </section>
    ),
)

const EngagementRow = memo(React.forwardRef(
    (props: Engagement & { width: number }, ref: ForwardedRef<HTMLElement>) => {

        function computeHeight(from, to) {
            const TIME_AT_JOB = to.getTime() - from.getTime()
            const HEIGHT = Math.round(TIME_AT_JOB / getMillisPerPixel(props.width))
            return {TIME_AT_JOB, HEIGHT};
        }


        const {TIME_AT_JOB, HEIGHT} = computeHeight(props.from, props.to);
        const YEARS_AT_JOB =
            Math.round((10 * TIME_AT_JOB) / (MILLISECONDS_IN_DAY * 365)) / 10

        const journalEntries = props.journal.sort((a, b) => b.from.getTime() - a.from.getTime());
        return (
            <Grid>
                <div
                    className={`sticky ${stickyTop} mt-4 h-fit ml-auto col-start-1 col-end-5`}
                >
                    <section className='mb-2 flex justify-between items-baseline'>
                        <h3 className=' font-brand text-base md:text-xl font-medium'>
                            {props.company}
                        </h3>
                        <time className='ml-3 text-xs font-normal uppercase float-right text-gray-400'>
                            {YEARS_AT_JOB} years
                        </time>
                    </section>
                    <section
                        className='leading-tight text-xs md:text-base mt-1 text-gray-500 dark:text-gray-400 md:text-justify pb-8'>
                        {props.description}
                    </section>
                </div>
                <section
                    className='col-start-5 col-end-6 mr-10 mx-auto relative w-full flex items-center justify-center'>
                    <div className='h-full w-3 md:w-6 absolute top-0 -z-10 flex items-center justify-center'>
                        <div className='h-full w-1 bg-gray-200 dark:bg-trueGray-700 pointer-events-none'></div>
                    </div>

                    <section
                        ref={ref}
                        style={{height: HEIGHT}}
                        className={`w-3 md:w-6 mt-4 top-20 rounded-full`}
                    >
                        {journalEntries.map(entry => entry.category && <section
                            data-from={entry.from.toISOString()}
                            style={{height: computeHeight(entry.from, entry.to).HEIGHT}}
                            className={`w-full border-y-2 border-white dark:border-trueGray-900 first-of-type:rounded-t-full last-of-type:rounded-b-full block animate-gradient shadow ${categoryGradients[highestCategory(entry.category)]}`}
                        ></section>)}
                    </section>
                </section>
            </Grid>
        )
    },
))

function Grid({children}) {
    return <div className='grid grid-cols-9'>{children}</div>
}

function getCurrentTime(
    timemarkRect: DOMRect | undefined,
    gridRef: DOMRect | undefined,
    engagements: Engagement[],
) {
    if (!timemarkRect) return undefined
    if (!gridRef) return undefined

    const to = engagements[0].to
    const from = engagements[engagements.length - 1].from

    const timeRatio = (gridRef.top - timemarkRect.top) / gridRef.height
    return new Date(to.getTime() + (to.getTime() - from.getTime()) * timeRatio)
}

const YESTERDAY = new Date(TODAY.setDate(TODAY.getDate() - 1))

function getEngagementAndJournal(currentTime: Date, engagements: Engagement[]) {
    const engagement = engagements.find(
        e => e.from <= currentTime && e.to > currentTime,
    )
    const journalEntry = engagement?.journal?.find(
        j => j.from <= currentTime && j.to > currentTime,
    )
    if (currentTime > YESTERDAY) return {engagement, journalEntry: undefined}
    return {engagement, journalEntry}
}

function useWindowDimensions() {
    const hasWindow = typeof window !== 'undefined'

    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null
        const height = hasWindow ? window.innerHeight : null
        return {
            width,
            height,
        }
    }

    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions(),
    )

    useEffect(() => {
        if (hasWindow) {
            const handleResize = () => {
                setWindowDimensions(getWindowDimensions())
            }

            window.addEventListener('resize', handleResize)
            return () => window.removeEventListener('resize', handleResize)
        }
    }, [hasWindow])

    return windowDimensions
}

export function highestCategory(category: { [key in Category]: number }): Category {
    const entries = Object.entries(category);
    const reduce = entries.reduce((prev, curr) => prev[1] > curr[1] ? prev : curr, entries[0]);
    return reduce[0] as Category;
}
