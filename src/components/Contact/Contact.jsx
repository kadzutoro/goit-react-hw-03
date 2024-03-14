import css from './Contact.module.css'
import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
export default function Contact({data: {id, name, number}, onDelete}) {
    return (
        <div className={css.contact}>
            <div className={css.info}>
                <div className={css.name}>
                <IoPerson />
            <p>{name}</p>
            </div>
            <div className={css.number}>
            <FaPhoneAlt />
            <p>{number}</p>
            </div>
            </div>
            <button className={css.delete} onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}