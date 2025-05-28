// "use client";
import React, { useEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";

interface projectData {
  title: string;
  src: string;
  color: string;
}

interface ModalProps {
  modal: { active: boolean; index: number };
  data: projectData[];
}

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Modal({ modal, data }: ModalProps) {
  const { active, index } = modal;
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const handleMouseMove = (e:MouseEvent) => {
        const { clientX, clientY } = e;
        moveContainerX(clientX);
        moveContainerY(clientY);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
        window.removeEventListener("mousemove", handleMouseMove)
    }
  }, []);

  return (
    <motion.div
      ref={container}
      variants={scaleAnimation}
      initial={"initial"}
      animate={active ? "open" : "closed"}
      className={styles.container}
    >
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
    </motion.div>
  );
}
