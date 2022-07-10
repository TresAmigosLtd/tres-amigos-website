import React from "react";

export type Category = 'Enablement' | 'Execution' | 'Leadership'
export type AmigoText = { ben: string, jc: string, jacek: string }

export interface Skill {
    skill: { name: string, category: Category }
    amigos: Partial<AmigoText>
}

export function SkillMatrix({data, order}: { data: Skill[], order: (keyof AmigoText)[]}) {
    return <div className="grid gap-10 xl:grid-cols-3">
        {data.map((sk: Skill) => <SkillTag key={sk.skill.name} data={sk}/>)}
    </div>

function SkillTag({data}: { data: Skill }) {
    const amigo = Object.keys(data.amigos)[0]
    const position = order.indexOf(amigo as keyof AmigoText) + 1
    return (
        <mark
            className={`col-span-1 col-start-${position} text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200`}>
            {data.skill.name}
        </mark>
    );
}
}
