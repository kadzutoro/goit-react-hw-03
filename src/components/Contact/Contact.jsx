import css from './Contact.module.css'
export default function Contact({data: {id, name, number}, onDelete}) {
    return (
        <div className={css.contact}>
            <div className={css.info}>
                <div className={css.name}>
            <p>{name}</p>
            </div>
            <div className={css.number}>
            <p>{number}</p>
            </div>
            </div>
            <button className={css.delete} onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}