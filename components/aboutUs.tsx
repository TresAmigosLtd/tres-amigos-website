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
        <section id="aboutus">
            <div className="sticky top-16 pt-8 z-10 grid gap-10 md:grid-cols-1 lg:grid-cols-3 mb-4 xl:mb-16 dark:bg-trueGray-900 bg-white shadow-fade-in-white dark:shadow-fade-in-black">
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

        </section>
    );
}

function Amigo({name, title, image, children}) {
    return <div className={`lg:col-auto transition-opacity ${(!children ? "opacity-30 blur" : "")}`}>
        <div
            className="shadow-md flex flex-col justify-between h-full bg-gray-100 p-4 rounded-2xl dark:bg-trueGray-800">
            <Avatar
                image={image}
                name={name}
                title={title}
            />

            <section className="text-sm xl:text-base h-28 leading-normal px-2 flex-none line-clamp-5">
                {children}
            </section>

        </div>
    </div>;
}

function Avatar(props) {
    return (
        <div className="flex items-center mb-4 xl:mb-6 space-x-3 flex-1">
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
                <div className="text-base xl:text-lg font-medium line-clamp-1">{props.name}</div>
                <div className="text-xs xl:text-base text-gray-600 dark:text-gray-400 -ml-2 line-clamp-1">{props.title}</div>
            </div>
        </div>
    );
}

