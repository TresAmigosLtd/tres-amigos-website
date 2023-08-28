import {AmigoText, Category} from "@components/skillMatrix";

export const amigoBio = {
    ben: "Ping-pong player and surfer.",
    jc: "Powerlifter and drummer.",
    jacek: "Marathon runner and photographer."
};

export interface Skill {
    skill?: { name: string, category: Category }
    amigos: Partial<AmigoText>
}

export const amigoSkills: Skill[] = [
    {
        skill: {name: "Agile", category: "Enablement"},
        amigos: {
            jacek: "I love the art involved in finding the next simplest thing that bring value for users - and repeating that week after week.",
            jc: "On the look for vertical slices to ensure value gets delivered quickly and frequently.",
            ben: "I love fast feedback loops for code, people and processes, and the power of an iterative mindset.",
        }
    }, {
        skill: {name: "Full-stack", category: "Execution"},
        amigos: {
            jacek: "User value may be tied to different pieces of the stack - API, UI, data pipelines. I enjoy iterating on different parts of the stack as I improve the product.",
            jc: "Frontend, backend, and ops. I enjoy lifting domains in the backend and crafting delightful UIs.",
            ben: "I enjoy working across the full stack, with a focus on backend and infrastructure.",
        }
    }, {
        skill: {name: "Business focus", category: "Leadership"},
        amigos: {
            jacek: "For me writing code always starts with understanding the business. When the domain is clearly represented in code, everything becomes possible.",
            jc: "Starting with UX research and making domain explicit and ubiquitous, to close the loop between users, engineers, and business.",
            ben: "Building software, and teams that are in tune with changing business needs is absolutely paramount to avoid waste.",
        }
    }, {
        skill: {name: "High-performing teams", category: "Enablement"},
        amigos: {
            ben: "I focus on creating environments with psychological safety, and developer productivity.",
            jacek: "I believe that shared values and principles are crucial for long-term success."
        }
    }, {
        skill: {name: "Security", category: "Execution"},
        amigos: {jc: "I love web security, with a focus on OIDC and robust authorization architectures."}
    }, {
        skill: {name: "People management", category: "Leadership"},
        amigos: {ben: "Software is a people game; having happy and aligned engineers is half the battle."}
    }, {
        skill: {name: "Data engineering", category: "Execution"},
        amigos: {jacek: "I believe that 'normal' software engineering practices (TDD, single responsibility) apply perfectly to data engineering and result in reliable pipelines everyone can trust."}
    }, {
        skill: {name: "Architecture", category: "Leadership"},
        amigos: {jc: "I believe in bottom-up architecture, with an emphasis on discovering bounded contexts."}
    },
];
