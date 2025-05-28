"use client";

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
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const slug = e.target.value;
    if (slug === "home") {
      router.push("/");
    } else {
      router.push(`/demos/${slug}`);
    }
  };

  return (
    <div className={styles.navbar}>
      <label htmlFor="demos"></label>
      <select name="" id="demos" defaultValue="home" onChange={handleChange}>
        <option value="home">-- Home --</option>
        {data.map((demo) => {
          return (
            <option key={demo.slug} value={demo.slug}>
              {demo.title}
            </option>
          );
        })}
      </select>
    </div>
  );
}
