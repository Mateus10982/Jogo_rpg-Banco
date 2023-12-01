import { Link } from 'react-router-dom'
import styles from './cabecalho.module.css'

function Header() {
    return (
        <header className={styles.cabecalho}>
            <nav>
                <Link to="/"  className={styles.link}>Jogo</Link>
                <Link to="/Banco"  className={styles.link}>Banco</Link>
            </nav>
        </header>
    )    
}

export default Header
