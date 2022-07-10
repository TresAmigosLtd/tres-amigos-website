import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { fullTimeEmployment, contracting } from "../components/data";
import Services from "../components/services";
import AboutUs from "../components/aboutUs";
import Engagements from "../components/engagements";

export default function Home() {
    return (
        <>
            <Head>
                <title>Tres Amigos</title>
                <meta
                    name="description"
                    content="Building engineering teams since 2017"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <Hero />

            <SectionTitle
                pretitle="Services"
                title="We accelerate your engineering teams">
                Companies hire us full-time with a long-term horizon, or engage with us short-term as contractors.
            </SectionTitle>
            <Services data={fullTimeEmployment} />
            <Services imgPos="right" data={contracting} />

            <SectionTitle
                pretitle="About us"
                title='We are enablers, executors and leaders.'>
                <p>We come aligned, and with three rucksacks full of knowledge and experience to build and run high-performing engineering teams.</p>
            </SectionTitle>
            <AboutUs />

            <SectionTitle
                pretitle="Engagements"
                title="We've been places, as a team.">
                In the last 5 years we have worked as a team at different companies.
            </SectionTitle>
            <Engagements />
            {/*<PopupWidget />*/}
        </>
    );
}
