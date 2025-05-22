import styles from './Frase.module.css'

function Frase(){
    return (
        <>
            <div className={styles.classFrase}>
                <p className={styles.FraseP}> Este é um componente com uma frase</p>
            </div>
        </>
    )
}

export default Frase