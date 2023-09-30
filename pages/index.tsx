import Head from 'next/head'
import Hero from '@components/hero'
import Navbar from '@components/navbar'
import MainSection from '@components/mainSection'

import {forScaleups, forStartups} from '@data/aboutyou'
import Aboutyou from '@components/aboutyou'
import AboutUs from '@components/aboutUs'
import Engagements, {highestCategory} from '@components/engagements'
import {Category, categoryGradients} from '@components/skillMatrix'
import TypeAnimation from '@components/wordTyper'
import {InView} from 'react-intersection-observer'
import {ENGAGEMENTS, JournalEntry} from '@data/engagements'
import Footer from '@components/footer'
import {Context, createContext, useState} from "react";

export const EngagementJournalContext: Context<{
    journalEntry: JournalEntry | null,
    setJournalEntry: (journalEntry) => void
}> = createContext({journalEntry: null, setJournalEntry: () => null});

function getProjectsData(journalEntry: JournalEntry) {
    if (journalEntry) {
        const category = highestCategory(journalEntry.category);
        const classname = `text-gradient animate-gradient ${categoryGradients[category]}`;
        switch (category) {
            case "Enablement":
                return {classname, title:'as enablers'};
            case "Execution":
                return {classname, title:'as executors'};
            case "Leadership":
                return {classname, title:'as leaders'};

        }
    }
    return {classname: 'text-gradient-all', title:'as a team'};
}

export default function Home() {
    const [journalEntry, setJournalEntry] = useState<JournalEntry | null>(null)

    const projectsData = getProjectsData(journalEntry);
    return (
        <>
            <Head>
                <title>High-performing engineering teams</title>
                <meta name='3 Amigos' content='Building high-performing engineering teams since 2017'/>
                <link rel='icon' href='/favicon.ico'/>
            </Head>

            <Navbar/>

            <UpdateNavigation id={'home'}>
                <Hero/>
            </UpdateNavigation>

            <UpdateNavigation id={'aboutyou'}>
                <MainSection
                    sticky={true}
                    pretitle='About you'
                    title={
                        <>
                            You want your engineering team to{' '}
                            <span className='md:block'>
                <TypeAnimation
                    sequence={[
                        setGradient('Enablement'),
                        ' grow in competence',
                        3000,
                        '',
                        100,
                        setGradient('Execution'),
                        ' deliver more value',
                        3500,
                        '',
                        50,
                        setGradient('Leadership'),
                        ' stay aligned',
                        2500,
                        '',
                        100,
                    ]}
                    className={() =>
                        `${categoryGradients['Enablement']} animate-gradient text-gradient`
                    }
                />
                                &nbsp;
              </span>
                        </>
                    }
                    subtitle={
                        <>
                            You are a start-up or scale-up who needs high-performing
                            engineering teams to deliver great software fast.
                        </>
                    }
                >
                    <Aboutyou data={forStartups}/>
                    <Aboutyou imgPos='right' data={forScaleups}/>
                </MainSection>
            </UpdateNavigation>

            <UpdateNavigation id={'aboutus'}>
                <MainSection
                    sticky={true}
                    className='min-h-screen flex flex-col justify-center'
                    pretitle='About us'
                    title={
                        <>
                            We are{' '}
                            <span
                                className={`${categoryGradients['Enablement']} animate-gradient text-gradient`}
                            >
                enablers
              </span>
                            ,{' '}
                            <span
                                className={`${categoryGradients['Execution']} animate-gradient text-gradient`}
                            >
                executors
              </span>
                            , and{' '}
                            <span
                                className={`${categoryGradients['Leadership']} animate-gradient text-gradient`}
                            >
                leaders
              </span>

                        </>
                    }
                    subtitle={
                        <p>
                            With three decades of experience spanning diverse industries, we
                            specialize in building and leading high-performing engineering
                            teams and successfully delivering complex software projects.
                        </p>
                    }
                >
                    <AboutUs/>
                </MainSection>
            </UpdateNavigation>

            <UpdateNavigation id={'projects'}>
                <EngagementJournalContext.Provider value={{journalEntry, setJournalEntry}}>
                    <MainSection
                        sticky={true}
                        pretitle='Projects'
                        title={
                            <>
                                Our growth,{' '}
                                <span className={projectsData.classname}>{projectsData.title}</span>
                            </>
                        }
                        subtitle={
                            <>
                                In the last 5 years we have worked as a team at different global
                                companies.
                            </>
                        }
                    >
                        <Engagements engagements={ENGAGEMENTS}/>
                    </MainSection>
                </EngagementJournalContext.Provider>
            </UpdateNavigation>
            <UpdateNavigation id={'contact'}>
                <Footer/>
            </UpdateNavigation>
        </>
    )
}

const setGradient = (category: Category) => e => {
    if (!e) return
    e.classList.remove('gradient-blue', 'gradient-pink', 'gradient-orange')
    return e.classList.add(`${categoryGradients[category]}`)
}

const UpdateNavigation = ({id, children}) => {
    // const router = useRouter()
    return (
        <InView
            as='section'
            id={id}
            threshold={0.4}
            /*onChange={(inView) => inView && router.push(`#${id}`)}*/
        >
            {children}
        </InView>
    )
}
