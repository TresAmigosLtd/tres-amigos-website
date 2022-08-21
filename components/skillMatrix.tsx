import React, {useState} from "react";

export type Category = 'Enablement' | 'Execution' | 'Leadership'
export const categoryGradients: { [key in Category]: string } = {
    Enablement: "gradient-blue",
    Execution: "gradient-pink",
    Leadership: "gradient-orange",
}
export type AmigoText = { ben: string, jc: string, jacek: string }

export interface Skill {
    skill: { name: string, category: Category }
    amigos: Partial<AmigoText>
}

export const SkillMatrix = React.memo(({data, order, onSelected}: { data: Skill[], order: (keyof AmigoText)[], onSelected: (text: Partial<AmigoText>) => void }) => {
    const [selected, setSelected] = useState<string>("")
    return <div className="grid grid-cols-3 sm:gap-x-10 gap-x-3 gap-y-3 mt-6">
        {data.map((sk: Skill, idx) => <SkillTag key={sk.skill.name + idx} data={sk} selected={selected} onSelected={ (text, skill) => {
            setSelected(skill);
            onSelected(text);
        }}/>)}
    </div>

    function SkillTag({data, onSelected, selected}: { data: Skill, onSelected: (text: Partial<AmigoText>, skill: string) => void, selected?: string}) {
        const active = selected === data.skill.name ? "bg-clip-padding text-white" : "";
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
                className={`col-start-${start + 1} col-end-${start + size + 1} p-1 rounded-full ${categoryGradients[data.skill.category]} animate-gradient text-xl shadow text-center transition-opacity opacity-80 hover:opacity-100`}>
                <div className="dark:bg-trueGray-900 bg-white h-full w-full rounded-full text-xl">
                    <div
                        onClick={() => {
                            onSelected(data.amigos, data.skill.name);
                        }}
                        className={`p-1 sm:px-10 rounded-full ${categoryGradients[data.skill.category]} cursor-pointer animate-gradient text-gradient transition-colors font-extrabold sm:text-xl text-sm ${active}`}
                    >{data.skill.name}</div>
                </div>
            </div>)
            size = 0;
        }
        return <>{marks.reverse()}</>;
    }
})

