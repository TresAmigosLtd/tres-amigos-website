import Image from "next/image";
import React, {useState} from "react";
import Container from "./container";

import benImg from "../public/img/ben.jpg";
import josecarlosImg from "../public/img/josecarlos.jpg";
import jacekImg from "../public/img/jacek.jpg";
import {AmigoText, SkillMatrix} from "./skillMatrix";
import {amigoBio, amigoSkills, Skill} from "@data/aboutUs";

export default function AboutUs() {
    const [amigoText, setAmigoText] = useState<Partial<AmigoText>>(amigoBio);

    function setCopy(skills: Skill[]) {
        const amigosText = skills
            .map(sk => sk.amigos)
            .reduce((acc, val) => ({...acc, ...val}), {})
        setAmigoText(amigosText)
    }

    return (
        <Container id="aboutus">
            <div className="sticky top-24 z-10 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 mb-16 dark:bg-trueGray-900 bg-white shadow-fade-in-white dark:shadow-fade-in-black">
                <Amigo name="Benjamin Grohbiel" title="Senior Engineering Manager at Snyk"
                       image={benImg}>{amigoText.ben}</Amigo>
                <Amigo name="Jacek Rzeniewicz" title="Senior Engineer at Snyk"
                       image={jacekImg}>{amigoText.jacek}</Amigo>
                <Amigo name="Jose Carlos Valero Sanchez" title="Staff Architect at Snyk"
                       image={josecarlosImg}>{amigoText.jc}</Amigo>
            </div>

            <SkillMatrix
                onSelected={setCopy}
                order={['ben', 'jacek', 'jc']}
                data={amigoSkills}/>

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

