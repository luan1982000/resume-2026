"use client";

import { Button, Col, Timeline } from "antd";
import { motion } from "framer-motion";

import { useState } from "react";
import { ModalDetail } from ".";
import "./list-project.css";

const RESPONSIBILITY_FRONTEND = (
  <div>
    <ol>
      <li>Coding and maintain system with Front-end site</li>
    </ol>
  </div>
);

const RESPONSIBILITY_FULLSTACK = (
  <div>
    <ol>
      <li>Work directly with customers</li>
      <li>
        Coding and maintain system with Front-end mainly, Back-end sometime
      </li>
    </ol>
  </div>
);

const TECHNOLOGIES_NEXTJS = (
  <div>
    <ul>
      <li>Next Js</li>
    </ul>
  </div>
);

const TECHNOLOGIES_REACT_NODE = (
  <div>
    <ul>
      <li>React Js</li>
      <li>Node Js</li>
    </ul>
  </div>
);

const LINKS = {
  LUYENVIET: "https://luyenviet.io/",
  CODE_VISTA: "https://codevista.ai/",
  LUAN_BLOG: "https://luan-blog-2025.vercel.app/",
  AIC_CENTER: "https://fpt-aicenter.com/en",
  PIPEFLARE: "https://pipeflare.io/",
  HORIZEN: "https://www.horizen.io/",
  BICYCLE_BLUE_BOOK: "https://www.bicyclebluebook.com/",
  INTELADS: "https://intelads.vn/",
};

const LIST_PROJECTS = [
  {
    id: "pas-brain-ai",
    name: "PAS Brain AI",
    business: `An AI-powered Wiki project that enables easy access to SharePoint and aggregates internal company information.`,
    responsibility: (
      <div>
        <ol>
          <li>Worked directly with clients</li>
          <li>
            Collaborated with Front-End, Back-End, and AI Engineering teams
          </li>
        </ol>
      </div>
    ),
    technologies: (
      <div>
        <ul>
          <li>React</li>
          <li>Python</li>
          <li>LangChain</li>
          <li>LangGraph</li>
          <li>Azure</li>
        </ul>
      </div>
    ),
    size: "More than 20",
    role: "FullStack SE, AIE",
    time: "MARCH 2026 - NOW",
    link: null,
    country: "Germany",
  },
  {
    id: "Luyen Viet With AI",
    name: "Luyen Viet With AI",
    business: `AI support to help Vietnamese learners practice writing skills`,
    responsibility: "Do everything from A to Z",
    technologies: (
      <div>
        <ul>
          <li>Next Js</li>
          <li>Postgre</li>
          <li>Docker</li>
          <li>OpenAI</li>
        </ul>
      </div>
    ),
    size: "1",
    role: "Owner - Fullstack",
    time: "Oct 2025 - Now",
    link: LINKS.LUYENVIET,
  },
  {
    id: "Code Vista",
    name: "Code Vista",
    business: `AI chatbot for developers, allowing them to ask questions and receive
          answers about code, as well as generate code snippets based on
          natural language descriptions`,
    responsibility: RESPONSIBILITY_FRONTEND,
    technologies: TECHNOLOGIES_NEXTJS,
    size: "1",
    role: "FE",
    time: "JAN 2025 - APRIL 2025",
    link: LINKS.CODE_VISTA,
  },
  {
    id: "luan-blog",
    name: "Luan Blog",
    business: `A blog for sharing knowledge and experience in
          programming`,
    responsibility: RESPONSIBILITY_FULLSTACK,
    technologies: (
      <div>
        <ul>
          <li>Next Js</li>
          <li>Node Js</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>
      </div>
    ),
    size: "1",
    role: "Full-stack",
    time: "MARCH 2025 - APRIL 2025",
    link: LINKS.LUAN_BLOG,
  },
  {
    id: "test-vista",
    name: "TEST-VISTA",
    business: `The AI project allows the generation of test cases automatically`,
    responsibility: RESPONSIBILITY_FRONTEND,
    technologies: (
      <div>
        <ul>
          <li>Next Js</li>
          <li>Node Js</li>
          <li>Redis</li>
          <li>MongoDB</li>
        </ul>
      </div>
    ),
    size: "8",
    role: "Front-End",
    time: "APRIL 2024 - PRESENT",
    link: null,
  },
  {
    id: "aic-center",
    name: "AI-CENTER LANDING PAGE",
    business: `Introduce for AI center department`,
    responsibility: RESPONSIBILITY_FRONTEND,
    technologies: TECHNOLOGIES_NEXTJS,
    size: "3",
    role: "Front-End",
    time: "MARCH 2024 - APRIL-2024",
    link: LINKS.AIC_CENTER,
  },
  {
    id: "pm-gpt",
    name: "PM-GPT",
    business: `AI project supports all managers and members in easily generating
            and assigning tasks to team members. Integration with Jira allows
            for the synchronization of all tasks and user stories`,
    responsibility: (
      <div>
        <ol>
          <li>
            Developing the entire front-end of the site with complex systems
            such as OAuth2, Socket.IO, Jira authentication, and Jira
            synchronization.
          </li>
        </ol>
      </div>
    ),
    technologies: (
      <div>
        <ul>
          <li>React Js</li>
          <li>Node Js</li>
          <li>Socket IO</li>
          <li>Langchain</li>
          <li>GPT-Model</li>
        </ul>
      </div>
    ),
    size: "2",
    role: "Front-End",
    time: "JAN 2024 - MARCH-2024",
  },
  {
    id: "cobol-migration",
    name: "COBOL-MIGRATION",
    business: `Utilizing AI for autocompletion and analyzing repositories written in the COBOL language, and translating them into other languages.`,
    responsibility: RESPONSIBILITY_FRONTEND,
    technologies: (
      <div>
        <ul>
          <li>React Js</li>
          <li>Node Js</li>
          <li>Python</li>
          <li>GPT-Model</li>
        </ul>
      </div>
    ),
    size: "More than 10",
    role: "Front-End",
    time: "AUGUS 2023 - JAN-2024",
  },
  {
    id: 1,
    name: "I-nautix",
    business: `Global Market Place for Inspectors and Inspection
          Management`,
    responsibility: (
      <div>
        <ol>
          <li>Work directly with customers</li>
          <li>Coding and maintain system with Front-end leader side</li>
          <li>Review members code and deloy</li>
        </ol>
      </div>
    ),
    technologies: (
      <div>
        <ul>
          <li>React Js</li>
          <li>Nest Js</li>
          <li>Node Js</li>
          <li>My Sql</li>
        </ul>
      </div>
    ),
    // link: 'https://dev.i-nautix.com/',
    size: "More than 20",
    role: "Front-End Leader",
    time: "APRIL 2022 - AGUST-2023",
  },
  {
    id: 2,
    name: "Angkorpass reseller",
    business: `Selling and managing tickets for angkor temple.`,
    responsibility: RESPONSIBILITY_FRONTEND,
    technologies: (
      <div>
        <ul>
          <li>React Js</li>
          <li>Node Js</li>
          <li>My Sql</li>
        </ul>
      </div>
    ),
    size: "2",
    role: "Front-End Developer",
    link: "",
    time: "MARCH 2022 - APRIL 2022",
  },
  {
    id: 3,
    name: "Pipeflare",
    business: `Marketing Zen crypto currency.(Belong project
          Zen)`,
    responsibility: (
      <div>
        <ol>
          <li>Work directly with customers</li>
          <li>
            Coding and maintain system with Front-end mainly, Back-end sometime
          </li>
        </ol>
      </div>
    ),
    technologies: (
      <div>
        <ul>
          <li>Javascript</li>
          <li>Css</li>
          <li>PHP</li>
          <li>Laravel</li>
          <li>My SQL</li>
        </ul>
      </div>
    ),
    size: "More than 20",
    role: "FULL STACK Developer",
    link: LINKS.PIPEFLARE,
  },
  {
    id: 4,
    name: "Horizen",
    business: `Marketing Zen crypto currency.(Belong project
          Zen)`,
    responsibility: (
      <div>
        <ol>
          <li>Work directly with customers</li>
          <li>
            {" "}
            Coding and maintain system with Front-end mainly, Back-end sometime
          </li>
        </ol>
      </div>
    ),
    technologies: (
      <div>
        <ul>
          <li>Ruby</li>
          <li>Javscript Js</li>
          <li>Scss</li>
        </ul>
      </div>
    ),
    size: "More than 20",
    role: "FULL STACK Developer",
    link: LINKS.HORIZEN,
  },
  {
    id: 5,
    name: "Bicycle Blue Book V3",
    business: `A Marketplace helps you buying and selling
          bicycles easily`,
    responsibility: RESPONSIBILITY_FRONTEND,
    technologies: (
      <div>
        <ul>
          <li>Next Js</li>
          <li>Typescript Js</li>
          <li>Node Js</li>
          <li>Express</li>
        </ul>
      </div>
    ),
    size: "8",
    role: "Front-End Developer",
    // link: 'https://www.bicyclebluebook.com/',
    time: "FEBRUARY 2021 - MAY 2021",
  },
  {
    id: 6,
    name: "Bicycle Blue Book",
    business: ` A Marketplace helps you buying and selling
          bicycles easily.`,
    responsibility: RESPONSIBILITY_FRONTEND,
    technologies: TECHNOLOGIES_REACT_NODE,
    size: "More than 20",
    role: "Front-End Developer",
    link: LINKS.BICYCLE_BLUE_BOOK,
    time: "APRIL 2020 - FEBRUARY 2021",
  },
  {
    id: 7,
    name: "IntelAds",
    business: `Deliver advertising through outdoor signage and
          buses quickly and easily`,
    responsibility: (
      <div>
        <ol>
          <li>Work directly with customers</li>
          <li>Coding and maintain system with Front-end mainly, sometime BE</li>
          <li>Review members code and deloy</li>
        </ol>
      </div>
    ),
    technologies: (
      <div>
        <ul>
          <li>React Js</li>
          <li>Javascript</li>
          <li>Java</li>
          <li>Postgre Sql</li>
        </ul>
      </div>
    ),
    size: "More than 5",
    role: "FULL STACK Developer",
    link: LINKS.INTELADS,
    time: "AUGUST 2019 - MARCH 2020",
  },
];

const ColMotion = motion.create(Col);

export const ListProject = () => {
  const [projectSelected, setProjectSelected] = useState<any>(null);
  return (
    <div className="mb-10">
      <Timeline
        mode="alternate"
        className="timeline"
        items={LIST_PROJECTS.map((i, index) => ({
          label: <span className="timeline-date">{i.time}</span>,
          children: (
            <ColMotion
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40,
                scale: 0.92,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              span={24}
              onClick={() => setProjectSelected(i)}
            >
              <div className="list-project-card relative">
                {i?.link ? (
                  <a
                    href={i?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="list-project-card__view"
                  >
                    <Button
                      type="primary"
                      size="small"
                      onClick={(e) => {
                        e?.stopPropagation?.();
                      }}
                    >
                      Visit
                    </Button>
                  </a>
                ) : null}
                <div className="project-card-header">
                  <div className="project-card-badge">{i.role}</div>
                </div>
                <div className="project-card-content">
                  <div className="list-project-card__title">{i.name}</div>
                  <div className="project-card-business">{i.business}</div>
                  <div className="project-card-meta">
                    <span className="team-size">Team: {i.size}</span>
                  </div>
                </div>
                <div className="project-card-hover-overlay">
                  <div className="hover-content">
                    <span className="view-detail-text">View Details</span>
                    <div className="hover-meta">Click to see more info</div>
                  </div>
                </div>
              </div>
            </ColMotion>
          ),
        }))}
      />

      <ModalDetail
        isOpen={Boolean(projectSelected)}
        projectSelected={projectSelected}
        onClose={() => setProjectSelected(undefined)}
      />
    </div>
  );
};
