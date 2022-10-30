import Head from "next/head";
import Hero from "@components/hero";
import Navbar from "@components/navbar";
import SectionTitle from "@components/sectionTitle";

import {fullTimeEmployment, contracting} from "@data/aboutyou";
import Aboutyou from "@components/aboutyou";
import AboutUs from "@components/aboutUs";
import Engagements from "@components/engagements";
import ContactUsWidget from "@components/legacy/contactUsWidget";
import {Category, categoryGradients} from "@components/skillMatrix";
import TypeAnimation from '@components/wordTyper';
import {InView} from "react-intersection-observer";
import {ENGAGEMENTS} from "@data/engagements";

export default function Home() {
    return (
        <>
            <Head>
                <title>Tres Amigos</title>
                <meta
                    name="Tres Amigos"
                    content="Building product teams since 2017"
                />
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Navbar/>

            <UpdateNavigation id={"home"}>
                <Hero/>
            </UpdateNavigation>

            <UpdateNavigation id={"aboutyou"}>
                <SectionTitle
                    pretitle="About you"
                    title={<>You want a<TypeAnimation
                        sequence={[
                            setGradient("Enablement"), ' value-first', 3000, '', 100,
                            setGradient('Execution'), ' high-performing', 3500, '', 50,
                            setGradient('Leadership'), ' business-aware', 2500, '', 100,
                            setGradient('Enablement'), ' customer-centric', 4000, '', 200,
                        ]}
                        className={() => `${categoryGradients["Enablement"]} animate-gradient text-gradient`}
                    /> team</>}>
                    You are a start-up or scale-up who wants high-performing teams to deliver great software fast.
                </SectionTitle>
                <Aboutyou data={fullTimeEmployment}/>
                <Aboutyou imgPos="right" data={contracting}/>
            </UpdateNavigation>

            <UpdateNavigation id={"aboutus"}>
                <SectionTitle
                    pretitle="About us"
                    title={<>We are <span
                        className={`${categoryGradients["Enablement"]} animate-gradient text-gradient`}>enablers</span>, <span
                        className={`${categoryGradients["Execution"]} animate-gradient text-gradient`}>executors</span> and <span
                        className={`${categoryGradients["Leadership"]} animate-gradient text-gradient`}>leaders</span>.</>}>
                    <p>We come with three rucksacks full of knowledge and experience to run high-performing engineering teams and deliver complex software projects.</p>
                </SectionTitle>
                <AboutUs/>
            </UpdateNavigation>

            <UpdateNavigation id={"engagements"}>
                <SectionTitle
                    pretitle="Engagements"
                    title="We've been places, as a team.">
                    In the last 5 years we have worked as a team at different companies.
                </SectionTitle>
                <Engagements engagements={ENGAGEMENTS}/>
            </UpdateNavigation>
            <ContactUsWidget/>
        </>
    );
}

const setGradient = (category: Category) => (e) => {
    if(!e) return;
    e.classList.remove('gradient-blue', 'gradient-pink', 'gradient-orange')
    return e.classList.add(`${categoryGradients[category]}`);
};

const UpdateNavigation = ({id, children}) => {
    // const router = useRouter()
    return <InView as="section" id={id} threshold={0.4}
                   /*onChange={(inView) => inView && router.push(`#${id}`)}*/>
        {children}
    </InView>;
}
