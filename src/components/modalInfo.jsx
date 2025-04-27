
const ModalInfo = ({data, close}) => {
  
  
    return(
       

        <div style={{position: "fixed", left: "50%", top: "35%", transform: "translate(-50%, -35%)", background: "#f0f0f0", width: "auto", height:"auto", zIndex: "999", color: "#090909" }}>
            <button onClick={close}>&#128473;</button><br></br>
            <img src={data.image}/>
            <h1>{data.name}</h1><br/>
            <p><strong>Gender:</strong> {data.gender}</p>
            <p><strong>Location:</strong> {data.location.name}</p>
            <p><strong>Origin:</strong> {data.origin.name}</p>
            <p><strong>Species:</strong> {data.species}</p>
            <p><strong>Created:</strong> {new Date(data.created).toLocaleString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
                })}</p>
        </div>

    
    )
}
export default ModalInfo;