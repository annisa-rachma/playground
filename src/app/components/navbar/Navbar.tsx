'use client'

import React from "react";
import styles from "./navbar.module.css";
import { useRouter } from "next/navigation";

interface DemoProps {
  title: string;
  slug: string;
}

interface NavbarProps {
  data: DemoProps[];
}

export default function Navbar({ data }: NavbarProps) {
    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const slug = e.target.value
        if(slug) {
            router.push(`/demos/${slug}`)
        } else {
            router.push('/')
        }
    }

  return (
    <div className={styles.navbar}>
      <label htmlFor="demos"></label>
      <select name="" id="demos" onChange={handleChange}>
        <option value=""  selected>
          -- Home --
        </option>
        {data.map((demo, idx) => {
          return (
            <>
              <option key={idx} value={demo.slug}>
                {demo.title}
              </option>
            </>
          );
        })}
      </select>
    </div>
  );
}
