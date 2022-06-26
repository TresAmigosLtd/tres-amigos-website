import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
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
            <Benefits data={benefitOne} />
            <Benefits imgPos="right" data={benefitTwo} />
            <SectionTitle
                pretitle="Engagements"
                title="Our trajectory as a team">
                We have been busy bootstrapping engineering teams in startups, creating products for scale-ups,
                and exploring tech as a means to bring value to people.
            </SectionTitle>
            <Engagements />
            <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
                Answer your customers possible questions here, it will increase the
                conversion rate as well as support or chat requests.
            </SectionTitle>
            <Faq />
            <Cta />
            <Footer />
            {/*<PopupWidget />*/}
        </>
    );
}
