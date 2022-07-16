import React from "react";

export type Category = 'Enablement' | 'Execution' | 'Leadership'
export const categoryColors: { [key in Category]: string } = {
    Enablement: "blue",
    Execution: "pink",
    Leadership: "orange",
}
export type AmigoText = { ben: string, jc: string, jacek: string }

export interface Skill {
    skill: { name: string, category: Category }
    amigos: Partial<AmigoText>
}

export function SkillMatrix({data, order}: { data: Skill[], order: (keyof AmigoText)[] }) {
    return <div className="grid grid-cols-3 gap-x-10 gap-y-3 mt-6">
        {data.map((sk: Skill, idx) => <SkillTag key={sk.skill.name + idx} data={sk}/>)}
    </div>

    function SkillTag({data}: { data: Skill }) {
        const skilledAmigos = Object.keys(data.amigos)
        if (skilledAmigos.length == 0) return null
        const marks: React.ReactNode[] = []

        let size = 0;
        let start = 0;
        for (let i = 0; i < order.length; i++) {
            if (!data.amigos[order[i]]) {
                start = i + 1;
                continue;
            }
            size++;
            let nextSkilledAmigoIsContiguous = order.length > i && data.amigos[order[i + 1]];
            if (nextSkilledAmigoIsContiguous) {
                continue
            }
            marks.push(<div
                key={data.skill.name + start}
                className={`col-start-${start + 1} col-end-${start + size + 1} p-1 rounded-full gradient-${categoryColors[data.skill.category]} animate-gradient text-xl`}>
                <div className="dark:bg-trueGray-900 bg-white h-full w-full rounded-full text-xl">
                    <div
                        className={`py-1 px-10 rounded-full gradient-${categoryColors[data.skill.category]} animate-gradient text-gradient font-extrabold text-xl`}
                    >{data.skill.name}</div>
                </div>
            </div>)
            size = 0;
        }
        return <>{marks.reverse()}</>;
    }
}
