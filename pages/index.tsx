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
                title="How we can help you">
                Learn more about the services we offer, and how we can help your engineering teams thrive.
            </SectionTitle>
            <Services data={fullTimeEmployment} />
            <Services imgPos="right" data={contracting} />

            <SectionTitle
                pretitle="About us"
                title='Tres rounded engineers'>
                <p>We share the same XP-infused principles, the same obsession for rounding our profiles, and the the same passion to deliver.</p>
                <p>But we also bring complimentary skills.</p>
            </SectionTitle>
            <AboutUs />

            <SectionTitle
                pretitle="Engagements"
                title="Our trajectory as a team">
                We have been busy bootstrapping engineering teams in startups, creating products for scale-ups,
                and exploring tech as a means to bring value to people.
            </SectionTitle>
            <Engagements />
            {/*<PopupWidget />*/}
        </>
    );
}
