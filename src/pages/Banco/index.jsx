import Cabecalho from '../../componentes/cabecalho'
import Style from './Banco.module.css'
import { useState } from 'react'


function Banco(){
    const [Valor, setValor] = useState(0)
    const [input, setInput] = useState(0)
    let num;
    function subtacao(){
        if(Valor < input){
            setValor(0)
            alert("O valor que o Usuario queria retirar era maior que o saldo.")
        }else{
            setValor(parseFloat(Valor) - parseFloat(input))
        }
    }
    function adicao(){
        setValor(parseFloat(Valor) + parseFloat(input))
        }
   
    return(
        <>
        <Cabecalho/>
        <div className={Style.central}>
            <label className={Style.label}>R$ {Valor.toFixed(2)}</label>
        <input type="number" id='inputValor'  onChange={(e)=> setInput((e.target.value))} className={Style.input}/>
        <button className={Style.button} onClick={adicao}>Adicionar</button>
        <button className={Style.button} onClick={subtacao}>Retirar</button>
        </div>
        </>
    )
}
//onClick={setValor=valor+1}
export default Banco