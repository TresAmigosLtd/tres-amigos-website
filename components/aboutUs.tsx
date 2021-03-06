import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import {SkillMatrix} from "./skillMatrix";

export default function AboutUs() {
  return (
    <Container id="aboutus">
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <Amigo name="Benjamin Grohbiel" title="Senior Engineering Manager at Snyk">This is a short static bio. Two sentences tops.</Amigo>
        <Amigo name="Jacek Rzeniewicz" title="Staff Engineer at Snyk">As you hover through the skills underneath</Amigo>
        <Amigo name="Jose Carlos Valero Sanchez" title="Staff Architect at Snyk">The copy will change and explain how you did that skill</Amigo>
      </div>

      <SkillMatrix
          order={['ben', 'jacek', 'jc']}
          data={[
          {
            skill: {name: "ben's skill", category:"Enablement"},
            amigos:{ben:"what ben does with this"}
        },{
            skill: {name: "jacek's skill", category:"Leadership"},
            amigos:{jacek: "what jacek does with this"}
        },{
            skill: {name: "ben's and jaceks skill", category:"Execution"},
            amigos:{ben:"what ben does with this", jacek: "what jacek does with this"}
        },{
            skill: {name: "jacek's and ben's skill", category:"Enablement"},
            amigos:{ben:"what ben does with this", jacek: "what jacek does with this"}
        },{
            skill: {name: "jc's and jaceks skill", category:"Execution"},
            amigos:{jc:"what ben does with this", jacek: "what jacek does with this"}
        },{
            skill: {name: "bens and jaceks and jcs skill", category:"Enablement"},
            amigos:{ben:"what ben does with this", jacek: "what jacek does with this", jc:"what ben does with this"}
        },{
            skill: {name: "bens and jaceks and jcs", category:"Enablement"},
            amigos:{ben:"what ben does with this", jacek: "what jacek does with this", jc:"what ben does with this"}
        },
      ]}/>

    </Container>
  );
}

function Amigo({name, title, children}) {
    return <div className="lg:col-span-2 xl:col-auto">
        <div
            className="shadow-md flex flex-col justify-between h-full bg-gray-100 p-10 rounded-2xl dark:bg-trueGray-800">
            <Avatar
                image={userOneImg}
                name={name}
                title={title}
            />

            <section className="text-2xl leading-normal ">
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

