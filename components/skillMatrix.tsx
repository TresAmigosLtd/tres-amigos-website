import React from "react";

type Category = 'Enablement' | 'Execution' | 'Leadership'
type AmigoText = { ben: string, jc: string, jacek: string }

interface Skill {
    skill: { name: string, category: Category }
    amigos: Partial<AmigoText>[]
}

export function SkillMatrix(props: { data: Skill[] }) {
    return <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {props.data.map(sk => <div key={sk.skill.name}><Mark>{sk.skill.name}</Mark></div>)}
    </div>
}

function Mark(props) {
    return (
        <>
            {" "}
            <mark
                className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
                {props.children}
            </mark>
            {" "}
        </>
    );
}
