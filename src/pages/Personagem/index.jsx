import styles from './personagem.module.css'
function Persona({  id,name,vida,mana,descricao}) {
    return (
        <section className={styles.cardP}>
            <h3>Número de serie:{id}</h3>
            <h3>Nome:{name}</h3>
            <h4>Vida:{vida}</h4>
            <h4>Mana:{mana}</h4>
            <p>Magia: {descricao}</p>
        </section>
    )
}

export default Persona 