import styles from './Project.module.css'

interface ModalState {
    active: boolean;
    index: number;
  }
interface ProjectProps {
    title: string,
    index: number,
    setModal: React.Dispatch<React.SetStateAction<ModalState>>
}
export default function Project({title,  setModal, index} : ProjectProps) {
  return (
    <div className={styles.project} onMouseEnter={() => {setModal({active:true, index: index})}} onMouseLeave={() => {setModal({active: false, index: index})}} >
        <h2>{title}</h2>
        <p>Design & Development</p>
    </div>
  )
}
