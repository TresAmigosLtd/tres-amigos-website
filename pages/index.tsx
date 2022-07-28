import Head from "next/head";
import Hero from "@components/hero";
import Navbar from "@components/navbar";
import SectionTitle from "@components/sectionTitle";

import {fullTimeEmployment, contracting} from "@components/data";
import Services from "@components/services";
import AboutUs from "@components/aboutUs";
import Engagements from "@components/engagements";
import ContactUsWidget from "@components/legacy/contactUsWidget";
import {Category, categoryColors} from "@components/skillMatrix";
import TypeAnimation from '@components/wordTyper';
import {InView} from "react-intersection-observer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Tres Amigos</title>
                <meta
                    name="Tres Amigos"
                    content="Building engineering teams since 2017"
                />
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Navbar/>

            <UpdateNavigation id={"home"}>
                <Hero/>
            </UpdateNavigation>

            <UpdateNavigation id={"services"}>
                <SectionTitle
                    pretitle="Services"
                    title={<>We <TypeAnimation
                        sequence={[
                            setGradient("Leadership"), 'bootstrap', 2000, '', 150,
                            setGradient('Execution'), 'run', 3000, '', 100,
                            setGradient('Enablement'), 'accelerate', 2000, '', 50,
                            setGradient('Enablement'), 'coach', 4000, '', 100,
                        ]}
                        className={() => `gradient-${categoryColors["Enablement"]} animate-gradient text-gradient`}
                    /> your engineering teams</>}>
                    Companies hire us full-time with a long-term horizon, or engage with us short-term as contractors.
                </SectionTitle>
                <Services data={fullTimeEmployment}/>
                <Services imgPos="right" data={contracting}/>
            </UpdateNavigation>

            <UpdateNavigation id={"aboutus"}>
                <SectionTitle
                    pretitle="About us"
                    title={<>We are <span
                        className={`gradient-${categoryColors["Enablement"]} animate-gradient text-gradient`}>enablers</span>, <span
                        className={`gradient-${categoryColors["Execution"]} animate-gradient text-gradient`}>executors</span> and <span
                        className={`gradient-${categoryColors["Leadership"]} animate-gradient text-gradient`}>leaders</span>.</>}>
                    <p>We come aligned, and with three rucksacks full of knowledge and experience to build and run
                        high-performing engineering teams.</p>
                </SectionTitle>
                <AboutUs/>
            </UpdateNavigation>

            <UpdateNavigation id={"engagements"}>
                <SectionTitle
                    pretitle="Engagements"
                    title="We've been places, as a team.">
                    In the last 5 years we have worked as a team at different companies.
                </SectionTitle>
                <Engagements/>
            </UpdateNavigation>
            <ContactUsWidget/>
        </>
    );
}

const setGradient = (category: Category) => (e) => {
    if(!e) return;
    e.classList.remove('gradient-blue', 'gradient-pink', 'gradient-orange')
    return e.classList.add(`gradient-${categoryColors[category]}`);
};

const UpdateNavigation = ({id, children}) => {
    // const router = useRouter()
    return <InView as="section" id={id} threshold={0.4}
                   /*onChange={(inView) => inView && router.push(`#${id}`)}*/>
        {children}
    </InView>;
}
