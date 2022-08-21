import Image from "next/image";
import React, {useState} from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
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
                <Amigo name="Benjamin Grohbiel" title="Senior Engineering Manager at Snyk">{amigoText.ben}</Amigo>
                <Amigo name="Jacek Rzeniewicz" title="Staff Engineer at Snyk">{amigoText.jacek}</Amigo>
                <Amigo name="Jose Carlos Valero Sanchez" title="Staff Architect at Snyk">{amigoText.jc}</Amigo>
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
                            ben: "For me, it's  about creating fast feedback loops for code, people and processes.",
                        }
                    }, {
                        skill: {name: "Full-stack", category: "Execution"},
                        amigos: {
                            jacek: "User value may be tied to different pieces of the stack - API, UI, data pipelines. I enjoy iterating on different parts of the stack as I improve the product.",
                            jc: "Front, back, and ops. I enjoy lifting domains in the backend and crafting delightful UIs.",
                            ben: "I enjoy working across the full stack with a focus on backend and infrastructure.",
                        }
                    }, {
                        skill: {name: "Business focus", category: "Leadership"},
                        amigos: {
                            jacek: "For me writing code always starts with understanding the business. When the domain is clearly represented in code, everything becomes possible.",
                            jc: "Starting with UX research and making domain explicit and ubiquitous, to close the loop between users, engineers, and business.",
                            ben: "Engineering is  a means to an end; it's about building products that hit business metrics.",
                        }
                    }, {
                        skill: {name: "High-performing teams", category: "Enablement"},
                        amigos: {
                            ben: "I focus on creating psychological safety, purpose and getting the right people on the bus.",
                            jacek: "jacek"
                        } //TODO
                    }, {
                        skill: {name: "Security", category: "Execution"},
                        amigos: {jc: "I love web security, with a focus on OIDC and robust authorization architectures."}
                    }, {
                        skill: {name: "People management", category: "Leadership"},
                        amigos: {ben: "Software is a people game; having happy and aligned engineers is half the battle."}
                    }, {
                        skill: {name: "Data engineering", category: "Execution"},
                        amigos: {jacek: "jacek"} //TODO
                    }, {
                        skill: {name: "Architecture", category: "Leadership"},
                        amigos: {jc: "I believe in bottom-up architecture, with an emphasis on discovering bounded contexts."}
                    },
                ]}/>

        </Container>
    );
}

function Amigo({name, title, children}) {
    return <div className={`lg:col-span-2 xl:col-auto transition-opacity ${(!children ? "opacity-30 blur" : "")}`}>
        <div
            className="shadow-md flex flex-col justify-between h-full bg-gray-100 p-10 rounded-2xl dark:bg-trueGray-800">
            <Avatar
                image={userOneImg}
                name={name}
                title={title}
            />

            <section className="text-lg h-28 leading-normal ">
                {children}
            </section>

        </div>
    </div>;
}

function Avatar(props) {
    return (
        <div className="flex items-center mb-8 space-x-3">
            <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                <Image
                    src={props.image}
                    width="40"
                    height="40"
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

