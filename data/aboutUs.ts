import {AmigoText, Category} from "@components/skillMatrix";

export const amigoBio = {
    ben: "Ping-pong player and ocean lover.",
    jc: "Powerlifter and drummer.",
    jacek: "Marathon runner and photographer."
};

export interface Skill {
    skill?: { name: string, category: Category }
    amigos: Partial<AmigoText>
}

export const amigoSkills: Skill[] = [
    {
        skill: {name: "Agile Development", category: "Enablement"},
        amigos: {
            jacek: "I love the art involved in finding the next simplest thing that bring value for users - and repeating that week after week.",
            jc: "I'm always on the lookout for vertical slices to ensure value gets delivered quickly and frequently.",
            ben: "I believe in fast feedback loops for software, people and processes, and iterations instead of perfection.",
        }
    }, {
        skill: {name: "Hands-on development", category: "Execution"},
        amigos: {
            jacek: "I enjoy iterating on different parts of the stack as I improve the product and unlock user value.",
            jc: "Frontend, backend, and ops. I enjoy lifting domains in the backend and crafting delightful UIs.",
            ben: "I enjoy being hands-on where possible, and working across the full stack with team members.",
        }
    }, {
        skill: {name: "Business Focus", category: "Leadership"},
        amigos: {
            jacek: "Writing code always starts with understanding the business, representing the domain clearly represented in code.",
            jc: "Starting with UX research and making domain explicit and ubiquitous, to close the loop between users, engineers, and business.",
            ben: "Building software, and teams that are in tune with changing business needs is absolutely paramount to avoid waste.",
        }
    }, {
        skill: {name: "High-performing teams", category: "Enablement"},
        amigos: {
            ben: "I focus on creating environments with psychological safety, and developer productivity.",
            jacek: "Like with software, teams needs engineering and debugging. Values and principles are crucial for long-term success."
        }
    }, {
        skill: {name: "Web Security", category: "Execution"},
        amigos: {jc: "I love web security, with a focus on OIDC and robust authorization architectures."}
    }, {
        skill: {name: "People management", category: "Leadership"},
        amigos: {ben: "The hardest problem in software is people. Keeping engineers happy and growing their careers is half the battle."}
    }, {
        skill: {name: "Data engineering", category: "Execution"},
        amigos: {jacek: "Normal software engineering practices like TDD apply perfectly to data engineering and result in reliable pipelines."}
    }, {
        skill: {name: "Architecture", category: "Leadership"},
        amigos: {jc: "I believe in bottom-up architecture, with an emphasis on discovering bounded contexts."}
    },
];
