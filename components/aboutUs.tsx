import Image from "next/image";
import React, {useState} from "react";
import Container from "./container";

import benImg from "../public/img/ben.jpg";
import josecarlosImg from "../public/img/josecarlos.jpg";
import jacekImg from "../public/img/jacek.jpg";
import {AmigoText, SkillMatrix} from "./skillMatrix";

export default function AboutUs() {
    const BIO = {
        ben: "Ping-pong player and fearless surfer.",
        jc: "Powerlifter and quiet drummer.",
        jacek: "Marathon runner and patient photographer."
    };

    let [amigoText, setAmigoText] = useState<Partial<AmigoText>>(BIO);

    function setCopy(text: Partial<AmigoText>) {
        setAmigoText({...text})
    }

    return (
        <Container id="aboutus">
            <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
                <Amigo name="Benjamin Grohbiel" title="Senior Engineering Manager at Snyk" image={benImg}>{amigoText.ben}</Amigo>
                <Amigo name="Jacek Rzeniewicz" title="Senior Engineer at Snyk" image={jacekImg}>{amigoText.jacek}</Amigo>
                <Amigo name="Jose Carlos Valero Sanchez" title="Staff Architect at Snyk" image={josecarlosImg}>{amigoText.jc}</Amigo>
            </div>

            <SkillMatrix
                onSelected={setCopy}
                order={['ben', 'jacek', 'jc']}
                data={[
                    {
                        skill: {name: "Agile", category: "Enablement"},
                        amigos: {
                            jacek: "I love the art involved in finding the next simplest thing that bring value for users - and repeating that week after week.",
                            jc: "On the look for vertical slices to ensure value gets delivered quickly and frequently.",
                            ben: "I love fast feedback loops for code, people and processes, and the power of an iterative mindset.",
                        }
                    }, {
                        skill: {name: "Full-stack", category: "Execution"},
                        amigos: {
                            jacek: "User value may be tied to different pieces of the stack - API, UI, data pipelines. I enjoy iterating on different parts of the stack as I improve the product.",
                            jc: "Frontend, backend, and ops. I enjoy lifting domains in the backend and crafting delightful UIs.",
                            ben: "I enjoy working across the full stack, with a focus on backend and infrastructure.",
                        }
                    }, {
                        skill: {name: "Business focus", category: "Leadership"},
                        amigos: {
                            jacek: "For me writing code always starts with understanding the business. When the domain is clearly represented in code, everything becomes possible.",
                            jc: "Starting with UX research and making domain explicit and ubiquitous, to close the loop between users, engineers, and business.",
                            ben: "Building software, and teams that are in tune with changing business needs is absolutely paramount to avoid waste.",
                        }
                    }, {
                        skill: {name: "High-performing teams", category: "Enablement"},
                        amigos: {
                            ben: "I focus on creating environments with psychological safety, and developer productivity.",
                            jacek: "I believe that shared values and principles are crucial for long-term success."
                        }
                    }, {
                        skill: {name: "Security", category: "Execution"},
                        amigos: {jc: "I love web security, with a focus on OIDC and robust authorization architectures."}
                    }, {
                        skill: {name: "People management", category: "Leadership"},
                        amigos: {ben: "Software is a people game; having happy and aligned engineers is half the battle."}
                    }, {
                        skill: {name: "Data engineering", category: "Execution"},
                        amigos: {jacek: "I believe that 'normal' software engineering practices (TDD, single responsibility) apply perfectly to data engineering and result in reliable pipelines everyone can trust."}
                    }, {
                        skill: {name: "Architecture", category: "Leadership"},
                        amigos: {jc: "I believe in bottom-up architecture, with an emphasis on discovering bounded contexts."}
                    },
                ]}/>

        </Container>
    );
}

function Amigo({name, title, image, children}) {
    return <div className={`lg:col-span-2 xl:col-auto transition-opacity ${(!children ? "opacity-30 blur" : "")}`}>
        <div
            className="shadow-md flex flex-col justify-between h-full bg-gray-100 p-4 rounded-2xl dark:bg-trueGray-800">
            <Avatar
                image={image}
                name={name}
                title={title}
            />

            <section className="text-lg h-28 leading-normal px-2">
                {children}
            </section>

        </div>
    </div>;
}

function Avatar(props) {
    return (
        <div className="flex items-center mb-8 space-x-3">
            <div className="flex-shrink-0 overflow-hidden rounded-full w-20 h-20 -mt-8 -ml-8 shadow">
                <Image
                    src={props.image}
                    width="80"
                    height="80"
                    alt="Avatar"
                    layout="responsive"
                    placeholder="blur"
                />
            </div>
            <div>
                <div className="text-lg font-medium">{props.name}</div>
                <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
            </div>
        </div>
    );
}

