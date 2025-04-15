import { useEffect, useState } from "react"
import { api } from "./api/api"

import { Card } from "./components/card"

import style from './Req.module.css'

export default function Req(){
    const [data, setData] = useState([])
    const [page, setPage] = useState("")
    const [searchName, setSearchName] = useState("")
    const [erro, setErro] = useState(false)


    useEffect(() => {
        api.get(`/character/?page=${page}&name=${searchName}`).then((res) => {
            setErro(false)
            setData(res.data.results)
        }).catch((error) => {
            if(error.response.status === 404){
                setErro(true)
            }
            console.error(error)
        })
    }, [page, searchName])
    
    return(
        <section className={style.opa}>
        <h1>RICK AND MORTY API</h1>
        <br />
        {erro &&  <p style={{ color: "red" }}>Página não existe, 1 até 42</p> }
        <input style={{ width: "330px", marginRight: "10px", padding: "10px" }} type="text" placeholder="Digite uma pagina (1/42)" value={page} onChange={(event) => setPage(event.target.value)}/>
        <input style={{ width: "330px", padding: "10px"}} type="text" placeholder="Digite um nome de personagem" value={searchName} onChange={(event) => setSearchName(event.target.value)}/>
        <br />
        <br />
        {data.map((item, index) => (
                <div className={style.wrapAll1} key={index}>
                    <Card img={item.image} text={item.name}/>
                </div>
        ))}
        </section>

    )
}