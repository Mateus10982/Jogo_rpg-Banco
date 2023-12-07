import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Jogo from './pages/Jogo'
import Banco from './pages/Banco'

function Routess() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Jogo />} ></Route>
                <Route path="/Banco" element={<Banco />} ></Route>
            </Routes>
    </BrowserRouter>
    )
}
/* <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
Saiba mais sobre mim
</Link>*/

export default Routess
