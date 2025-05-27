"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Project from "./components/project/Project";
import Modal from "./components/modal/Modal";

const projects = [
  {
    title: "C2 Montreal",
    src: "c2montreal.png",
    color: "#000000",
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3",
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706D63",
  },
];

export default function ProjectMouseHover() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <div className={styles.view}>
        <div className={styles.project}>
          {projects.map((project, idx) => {
            return (
              <>
                <Project
                  key={idx}
                  title={project.title}
                  index={idx}
                  setModal={setModal}
                />
              </>
            );
          })}
        </div>
        <Modal modal={modal} data={projects} />
      </div>
    </>
  );
}
