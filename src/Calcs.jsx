import { useEffect, useState } from 'react'
import style from './Calcs.module.css'
import { stringify } from 'postcss'

export default function Calcs(){
    const [n1, setN1] = useState('20')
    const [n2, setN2] = useState('2')
    const [respSoma, setRespSoma] = useState()
    const [respSub, setRespSub] = useState()
    const [respMulti, setRespMulti] = useState()
    const [respDiv, setRespDiv] = useState()

    const somar = () => {
        var res = parseFloat(n1) + parseFloat(n2)
        setRespSoma(res)
    } 

    const sub = () => {
        var res = parseFloat(n1) - parseFloat(n2)
        setRespSub(res)
    } 

    const mult = () => {
        var res = parseFloat(n1) * parseFloat(n2)
        setRespMulti(res)
    } 

    const div = () => {
        var res = parseFloat(n1) / parseFloat(n2)
        setRespDiv(res)
    } 

    const handleAll = (a, b) => {
        setRespSoma(parseFloat(a) + parseFloat(b))
        setRespSub(parseFloat(a) - parseFloat(b))
        setRespMulti(parseFloat(a) * parseFloat(b))
        setRespDiv(parseFloat(a) / parseFloat(b))
    }

    // useEffect(() => {
    //     setRespSoma(parseFloat(n1) + parseFloat(n2))
    //     setRespSub(parseFloat(n1) - parseFloat(n2))
    //     setRespMulti(parseFloat(n1) * parseFloat(n2))
    //     setRespDiv((parseFloat(n1) / parseFloat(n2)))
    // }, [n1, n2])


    return(
        <>
            <h5><a href={"/"} className={style.backBtn}>voltar</a></h5>
            <h1>Cálculos</h1>
            <br />
            <div className={'wrapInputs'}>
                <h4>Digite os números para os cálculos</h4>
                <input type="number" value={n1} onChange={(e) => setN1(e.target.value)} placeholder='Primeiro número'/>
                <input type="number" value={n2} onChange={(e) => setN2(e.target.value)} placeholder='Segundo número'/>
            </div>
            <br />
            <div>
                <h4>Respostas</h4>
                <p>
                    <button onClick={somar}>Somar</button> 
                    <strong> - Soma: </strong>
                    {!isNaN(respSoma) ? respSoma : "Digite números válidos"}
                </p>
            
                <p>
                    <button onClick={sub}>Subtrair</button>
                    <strong> - Subtração: </strong>
                    {!isNaN(respSub) ? respSub : "Digite números válidos"}
                </p>
            
                <p>
                    <button onClick={mult}>Multiplicar</button>
                    <strong> - Multiplicação: </strong>
                    {!isNaN(respMulti) ? respMulti : "Digite números válidos"}
                </p>
                
                <p>
                    <button onClick={div}>Dividir</button>
                    <strong> - Divisão: </strong>
                    {n2 === "0" ? "Erro ao dividir por 0" 
                    : !isNaN(respDiv) && isFinite(respDiv) ? respDiv 
                    : "Digite números válidos"}
                </p>
                <br />
                <button onClick={() => handleAll(n1, n2)}>Calcular todas</button>
            </div>
        </>
    )
}