import Cabecalho from '../../componentes/cabecalho/index.jsx'
import Style from './Jogo.module.css'
import { useState } from 'react'
import Persona from '../Personagem/'
/*<button className={Style.button2} onClick={function(){ setFil("0"); Filt(Filtro,fil)}}>Filtro</button> */
function Jogo(){
    const [Hp, setHp] = useState(0)
    const [Magia, setMagia] = useState(0)
    const [Mp, setMp] = useState(0)
    const [nome, setNome] = useState(0)
    const [del, setDel] = useState(0)
    const [card, setCard] = useState([])
    const [cardtt, setCardtt] = useState([])
    const [Filtro,setFiltro]=useState(0)
    const [fil,setFil]=useState(0)
    function adicionar(){
        let Card2 = [...card]; 
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
        setCardtt(Card2)
    }
    function deletar(x){
        let Card2 = [...card]; 
        let elemento=Card2.findIndex(x=> x.id == del);
        Card2.splice(elemento,1)
        setCard(Card2);
        console.log(Card2);
        setCardtt(Card2)
        let f=document.getElementById("inputValor2");
        f.value="";
    }
    function filt(x){
        let f=document.getElementById("inputValorFiltro");
        switch(x){
            case "1":
                setCardtt(card);
                f.value="";
                break;
            case "2":
                let v=card.filter((x)=> x.id == Filtro || x.descricao == Filtro)
                setCardtt(v);
                f.value="";
                break;
        }
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
        <li><input type="number" id='inputValor7' onChange={(e)=> setHp((e.target.value))} className={Style.input}/></li>
        <li><label className={Style.label}> Quantidade Mana</label></li>
        <li><input type="number" id='inputValor5' onChange={(e)=> setMp((e.target.value))} className={Style.input}/></li>
        <li><label className={Style.label}>Descrição da Magia</label></li>
        <li> <input type="text" id='inputValor4' onChange={(e)=> setMagia((e.target.value))} className={Style.input}/></li>
        <li><label className={Style.label}>Número de serie do personagem a DELETAR</label></li>
        <li><input type="number" id='inputValor2' onChange={(e)=> setDel((e.target.value))} className={Style.input}/></li>
        <li><button className={Style.button} onClick={adicionar}>Adicionar</button>
        <button className={Style.button} onClick={function(){deletar(del)}}>Retirar</button></li>
        <br/><li><label className={Style.label}>Ache seu personagem</label></li>
        <li><input type="text" id='inputValorFiltro' placeholder='Número de serie do personagem ou DESCRIÇÂO magia'  onChange={(e)=>{setFiltro((e.target.value)) } } className={Style.input}/></li><br/>
        <li> <button className={Style.button2} onClick={function(){setFil("2"); filt(fil)}}>Filtro</button>   <button className={Style.button2} onClick={function(){ setFil("1"); filt(fil) }}>Todos</button></li>
        </ul>
        </section>
        </div> 
        <div className={Style.localcard}>
        {cardtt.length > 0 ? ( 
        <section className={Style.lista}>
   { cardtt.map((per) => (
        <Persona 
        id={per.id}
        name={per.name}
        vida={per.vida}  
        mana={per.mana}
        descricao={per.descricao}
    /> ))  }      
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