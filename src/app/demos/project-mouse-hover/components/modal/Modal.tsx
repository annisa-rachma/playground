// "use client";
import React from "react";
import styles from "./style.module.css";
import Image from "next/image";

interface projectData {
  title: string;
  src: string;
  color: string;
}

interface ModalProps {
  modal: { active: boolean; index: number };
  data: projectData[];
}

export default function Modal({ modal, data }: ModalProps) {
  const { active, index } = modal;
  return (
    <div className={styles.container}>
      <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
        {data.map((el, index) => {
          const { src, color } = el;
          return (
            <>
              <div
                style={{ backgroundColor: color }}
                className={styles.modal}
                key={`${modal}-${index}`}
              >
                <Image
                  src={`/images/project-mouse-hover/${src}`}
                  alt="modal image"
                  width={300}
                  height={0}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
