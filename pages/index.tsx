import Head from "next/head";
import Hero from "@components/hero";
import Navbar from "@components/navbar";
import MainSection from "@components/mainSection";

import {forScaleups, forStartups} from "@data/aboutyou";
import Aboutyou from "@components/aboutyou";
import AboutUs from "@components/aboutUs";
import Engagements from "@components/engagements";
import ContactUsWidget from "@components/legacy/contactUsWidget";
import {Category, categoryGradients} from "@components/skillMatrix";
import TypeAnimation from '@components/wordTyper';
import {InView} from "react-intersection-observer";
import {ENGAGEMENTS} from "@data/engagements";
import Footer from "@components/legacy/footer";

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
                <MainSection
                    pretitle="About you"
                    title={<>You want your engineering team to <span className="md:block"><TypeAnimation
                        sequence={[
                            setGradient("Enablement"), ' grow in competence', 3000, '', 100,
                            setGradient('Execution'), ' deliver more value', 3500, '', 50,
                            setGradient('Leadership'), ' stay aligned', 2500, '', 100,
                        ]}
                        className={() => `${categoryGradients["Enablement"]} animate-gradient text-gradient`}
                    />&nbsp;</span></>}
                    subtitle={<>You are a start-up or scale-up who needs high-performing engineering teams to deliver
                        great software fast.</>}
                >
                    <Aboutyou data={forStartups}/>
                    <Aboutyou imgPos="right" data={forScaleups}/>
                </MainSection>
            </UpdateNavigation>

            <UpdateNavigation id={"aboutus"}>
                <MainSection
                    pretitle="About us"
                    title={<>We are <span
                        className={`${categoryGradients["Enablement"]} animate-gradient text-gradient`}>enablers</span>, <span
                        className={`${categoryGradients["Execution"]} animate-gradient text-gradient`}>executors</span> and <span
                        className={`${categoryGradients["Leadership"]} animate-gradient text-gradient`}>leaders</span>.</>}
                    subtitle={<p>We come with experience to run high-performing engineering teams and deliver complex
                        software projects.</p>}
                >
                    <AboutUs/>
                </MainSection>
            </UpdateNavigation>

            <UpdateNavigation id={"engagements"}>
                <MainSection
                    sticky={true}
                    pretitle="Engagements"
                    title={<>We've been places, <span className="text-gradient-all">as a team</span>.</>}
                    subtitle={<>In the last 5 years we have worked as a team at different companies.</>}>
                    <Engagements engagements={ENGAGEMENTS}/>
                </MainSection>
            </UpdateNavigation>
            <Footer/>
            <ContactUsWidget/>
        </>
    );
}

const setGradient = (category: Category) => (e) => {
    if (!e) return;
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
