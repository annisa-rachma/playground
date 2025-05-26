import React from 'react'
import styles from './style.module.css'

interface projectData {
    
        title: string,
        src: string,
        color: string,
    
}

interface ModalProps {
    modal: {active:boolean, index: number}
    data: projectData[]
}

export default function Modal({modal, data} : ModalProps) {
  return (
    <div className={styles.container}>Modal</div>
  )
}
