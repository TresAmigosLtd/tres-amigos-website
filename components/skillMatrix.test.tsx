import React from "react";
import {AmigoText, Category, Skill, SkillMatrix} from "@components/skillMatrix";
import {render, screen} from '@testing-library/react'

describe("SkillMatrix", () => {

    describe("positioning", () => {
        describe("individual skill", () => {
            it("renders first person", () => {
                render(<SkillMatrix
                    order={["ben", "jacek", "jc"]}
                    data={[sampleSkill({name: "Skill"}, {ben: "irrelevant"})]}
                />);

                expectSkill(
                    screen.getAllByText('Skill'),
                    {position: 1, size: 1}
                );
            });

            it("renders second person", () => {
                render(<SkillMatrix
                    order={["ben", "jacek", "jc"]}
                    data={[sampleSkill({name: "Skill"}, {jacek: "irrelevant"})]}
                />);

                expectSkill(
                    screen.getAllByText('Skill'),
                    {position: 2, size: 1}
                );
            });

            it("renders third person", () => {
                render(<SkillMatrix
                    order={["ben", "jacek", "jc"]}
                    data={[sampleSkill({name: "Skill"}, {jc: "irrelevant"})]}
                />);

                expectSkill(
                    screen.getAllByText('Skill'),
                    {position: 3, size: 1}
                );
            });
        });

        describe("shared skill", () => {
            it("contiguous everybody", () => {
                render(<SkillMatrix
                    order={["ben", "jacek", "jc"]}
                    data={[sampleSkill({name: "Skill"}, {ben: "irrelevant", jc: "irrelevant", jacek: "irrelevant"})]}
                />);

                expectSkill(
                    screen.getAllByText('Skill'),
                    {position: 1, size: 3}
                );
            });

            it("contiguous first 2", () => {
                render(<SkillMatrix
                    order={["ben", "jacek", "jc"]}
                    data={[sampleSkill({name: "Skill"}, {ben: "irrelevant", jc: "irrelevant"})]}
                />);

                expectSkill(
                    screen.getAllByText('Skill'),
                    {position: 1, size: 2}
                );
            });

            it("contiguous last 2", () => {
                render(<SkillMatrix
                    order={["ben", "jacek", "jc"]}
                    data={[sampleSkill({name: "Skill"}, {jacek: "irrelevant", jc: "irrelevant"})]}
                />);

                expectSkill(
                    screen.getAllByText('Skill'),
                    {position: 2, size: 2}
                );
            });

            it("first and last", () => {
                render(<SkillMatrix
                    order={["ben", "jacek", "jc"]}
                    data={[sampleSkill({name: "Skill"}, {ben: "irrelevant", jc: "irrelevant"})]}
                />);

                expectSkill(
                    screen.getAllByText('Skill'),
                    {position: 1, size: 1},
                    {position: 3, size: 1},
                );
            });
        });

    })

});

function sampleSkill(
    skill: Partial<{ name: string, category: Category }>,
    amigos?: Partial<AmigoText>
): Skill {
    return {
        skill: {
            name: skill?.name || "Skill",
            category: skill?.category || "Enablement"
        }, amigos: amigos ||
            {ben: "what ben does with this"}
    }
}

function expectSkill(
    renderedSkills,
    ...placement: { position: number, size: number }[]) {
    expect(renderedSkills).toHaveLength(placement.length)
    placement.forEach((p, idx) => {
        expect(renderedSkills[idx]).toHaveClass(`col-start-${p.position}`)
        expect(renderedSkills[idx]).toHaveClass(`col-span-${p.size}`)
    })
}
