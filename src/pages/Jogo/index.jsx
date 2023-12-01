import Cabecalho from '../../componentes/cabecalho/index.jsx'
import Style from './Jogo.module.css'
import { useState } from 'react'
import Persona from '../Personagem/'

function Jogo(){
    const [Hp, setHp] = useState(0)
    const [Magia, setMagia] = useState(0)
    const [Mp, setMp] = useState(0)
    const [nome, setNome] = useState(0)
    const [del, setDel] = useState(0)
    const [card, setCard] = useState([])

    function adicionar(){
        const Card2 = [...card]; 
        const perso = {
            id: Card2.length,
            name: nome,
            vida: Hp,
            mana: Mp,
            descricao: Magia
        };
        Card2.push(perso);
        setCard(Card2);
        console.log(Card2);
    }
    function deletar(x){
        const Card2 = [...card]; 
        let elemento=Card2.findIndex(x=> x.id == del);
        Card2.splice(elemento,1)
        setCard(Card2);
        console.log(Card2);
    }

    return(
        <>
        <Cabecalho/>
        <div className={Style.central}>
        <br/>
        <section className={Style.sec}>
        <ul >
        <li><label className={Style.label}> Nome do personagem</label></li>
        <li><input type="text" id='inputValor' onChange={(e)=> setNome((e.target.value))} className={Style.input}/></li>
        <li><label className={Style.label}> Quantidade Vida</label></li>
        <li><input type="number" id='inputValor' onChange={(e)=> setHp((e.target.value))} className={Style.input}/></li>
        <li><label className={Style.label}> Quantidade Mana</label></li>
        <li><input type="number" id='inputValor' onChange={(e)=> setMp((e.target.value))} className={Style.input}/></li>
        <li><label className={Style.label}>Descrição da Magia</label></li>
        <li> <input type="text" id='inputValor' onChange={(e)=> setMagia((e.target.value))} className={Style.input}/></li>
        <li><label className={Style.label}>Número de serie do personagem a DELETAR</label></li>
        <li><input type="number" id='inputValor' onChange={(e)=> setDel((e.target.value))} className={Style.input}/></li>
        <li><button className={Style.button} onClick={adicionar}>Adicionar</button>
        <button className={Style.button} onClick={function(){deletar(del)}}>Retirar</button></li>
        </ul>
        </section>
        </div> 
        <div className={Style.localcard}>
        {card.length > 0 ? ( 
        <section className={Style.lista}>
            {
             card.map((per) => ( 
                    <Persona 
                        id={per.id}
                        name={per.name}
                        vida={per.vida}  
                        mana={per.mana}
                        descricao={per.descricao}
                    
    
                    />
                )) 
            }
        </section>
    ) : (
        <p>Não há personagem no momento, crie um e mude isso.</p>
    )}
        </div>
        </>
    )
}
/*return(<>
    { 
}
    </>)*/

export default Jogo