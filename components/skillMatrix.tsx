import React from "react";

export type Category = 'Enablement' | 'Execution' | 'Leadership'
export type AmigoText = { ben: string, jc: string, jacek: string }

export interface Skill {
    skill: { name: string, category: Category }
    amigos: Partial<AmigoText>
}

export function SkillMatrix({data, order}: { data: Skill[], order: (keyof AmigoText)[] }) {
    return <div className="grid gap-10 xl:grid-cols-3">
        {data.map((sk: Skill) => <SkillTag key={sk.skill.name} data={sk}/>)}
    </div>

    function SkillTag({data}: { data: Skill }) {
        const skilledAmigos = Object.keys(data.amigos)
        if (skilledAmigos.length == 0) return null
        const marks: React.ReactNode[] = []

        let size = 0;
        let start = 0;
        for (let i = 0; i < order.length; i++) {
            if(!data.amigos[order[i]]) {
                start = i+1;
                continue;
            }
            size++;
            let nextSkilledAmigoIsContiguous = order.length > i && data.amigos[order[i+1]];
            if(nextSkilledAmigoIsContiguous) {
                continue
            }
            marks.push(<mark
                key={data.skill.name+start}
                className={`col-span-${size} col-start-${start+1} text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200`}>
                {data.skill.name}
            </mark>)
            size = 0;
        }
        return <>{marks.reverse()}</>;
    }
}
