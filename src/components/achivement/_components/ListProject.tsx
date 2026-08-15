"use client";

import { Col, Row, Grid, Progress } from "antd";
import { motion } from "framer-motion";

import briefCase from "@/assest/image/svg/brief-case.svg";
import Image from "next/image";
import "./list-project.css";
import { useState } from "react";
import { ModalDetail } from ".";
import { moveLeft } from "@/styles/effects";

const LIST_PROJECTS = [
  {
    id: "aic-center",
    name: "AI-CENTER LANDING PAGE",
    business: `Introduce for AI center department`,
    responsibility: (
      <div>
        <ol>
          <li>Coding and maintain system with Front-end site</li>
        </ol>
      </div>
    ),
    technologies: (
      <div>
        <ul>
          <li>Next Js</li>
        </ul>
      </div>
    ),
    size: "3",
    role: "Front-End",
    time: "MARCH 2024 - APRIL-2024",
    link: "https://fpt-aicenter.com/en",
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
  // {
  //   id: "cobol-migration",
  //   name: "COBOL-MIGRATION",
  //   business: `Utilizing AI for autocompletion and analyzing repositories written in the COBOL language, and translating them into other languages.`,
  //   responsibility: (
  //     <div>
  //       <ol>
  //         <li>Coding and maintain for Front-end site</li>
  //       </ol>
  //     </div>
  //   ),
  //   technologies: (
  //     <div>
  //       <ul>
  //         <li>React Js</li>
  //         <li>Node Js</li>
  //         <li>Python</li>
  //         <li>GPT-Model</li>
  //       </ul>
  //     </div>
  //   ),
  //   size: "More than 10",
  //   role: "Front-End",
  //   time: "JAN 2024 - MARCH-2024",
  // },
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
    responsibility: (
      <div>
        <ol>
          <li>Coding and maintain system with Front-end side</li>
        </ol>
      </div>
    ),
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
    link: "https://pipeflare.io/",
    time: "MAY 2021 - MARCH 2022",
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
    link: "https://www.horizen.io/",
    time: "MAY 2021 - MARCH 2022",
  },
  {
    id: 5,
    name: "Bicycle Blue Book V3",
    business: `A Marketplace helps you buying and selling
          bicycles easily`,
    responsibility: (
      <div>
        <ol>
          <li>Coding and maintain system with Front-end side</li>
        </ol>
      </div>
    ),
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
    responsibility: (
      <div>
        <ol>
          <li>Coding and maintain system with Front-end side</li>
        </ol>
      </div>
    ),
    technologies: (
      <div>
        <ul>
          <li>React Js</li>
          <li>Node Js</li>
        </ul>
      </div>
    ),
    size: "More than 20",
    role: "Front-End Developer",
    link: "https://www.bicyclebluebook.com/",
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
    link: "https://intelads.vn/",
    time: "AUGUST 2019 - MARCH 2020",
  },
];

const RowMotion = motion.create(Row);
const ColMotion = motion.create(Col);

export const ListProject = () => {
  const [projectSelected, setProjectSelected] = useState<any>(null);
  return (
    <div className="mb-10">
      <RowMotion
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          delay: 0.8,
          delayChildren: 0.3,
          staggerChildren: 0.2,
        }}
        gutter={[20, 20]}
      >
        {LIST_PROJECTS?.map((i) => (
          <ColMotion {...moveLeft} xs={24} md={8} key={`project-${i.name}`}>
            <div
              className="list-project-card"
              onClick={() => setProjectSelected(i)}
            >
              <div className="list-project-card__date">{i.time}</div>
              <div className="list-project-card__title">{i.name}</div>
              <div className="list-project-card__description">{i.role}</div>
            </div>
          </ColMotion>
        ))}
      </RowMotion>
      <ModalDetail
        isOpen={Boolean(projectSelected)}
        projectSelected={projectSelected}
        onClose={() => setProjectSelected(undefined)}
      />
    </div>
  );
};
