import "leaflet/dist/leaflet.css";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
// import "leaflet-defaulticon-compatibility";
import { useState, useEffect } from "react";
import { Menu } from "./components/menu";
import { MapContainer, Marker, Popup, TileLayer, useMap  } from "react-leaflet";

function Contact() {
  const [cep, setCep] = useState("80510-070");
  const [lat, setLat] = useState(-25.4248289);
  const [lng, setLng] = useState(-49.3548061,32858);
  const position = [lat, lng];

  function handleCep(e) {
    setCep(e.target.value);
  }

  function ChangeView({ center }) {
    const map = useMap();
    map.setView(center);
    return null;
  }

  useEffect(() => {
    if (cep.length !== 8) return; // Simples validação para CEP

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        if (data.erro) {
          console.log("CEP não encontrado");
          return;
        }
        // console.log(data)

        const {logradouro, localidade, uf} = data;
        const address = `${logradouro ? logradouro + ', ' : ''}${localidade}, ${uf}`;
             // Buscar coordenadas com Nominatim
             fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
             .then(response => response.json())
             .then(locationData => {
               if (locationData.length > 0) {
                 const { lat, lon } = locationData[0];
                 setLat(parseFloat(lat));
                 setLng(parseFloat(lon));
               } else {
                 console.log("Coordenadas não encontradas");
               }
             })
             .catch(error => console.error("Erro ao buscar coordenadas:", error));
         })
         .catch(error => console.error("Erro ao buscar CEP:", error));
  }, [cep]);

  return (
    <>
      <Menu s1="opa" s3="CONTATO" s4="batata" />
      <br />
      <br />
      <br />
      <br />
      <h1>CONTATO</h1>
      <input type="text" placeholder="Insira o CEP" onChange={handleCep}/>

      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "700px" }}
      >
        <ChangeView center={position} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
           <a target="_blank" href={`https://www.google.com.br/maps/@${lat},${lng}m/data=!3m1!1e3?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D`}>Abrir no Google maps</a>
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default Contact;
