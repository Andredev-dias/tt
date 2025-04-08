import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import { useState, useEffect } from "react";
import { Menu } from "./components/menu";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Loading } from "./components/spinner";

function Contact() {
  const [cep, setCep] = useState("80510-070");
  const [lat, setLat] = useState(-25.4248289);
  const [lng, setLng] = useState(-49.3548061);
  const [loading, setLoading] = useState(false);

  const position = [lat, lng];

  function handleCep(e) {
    setCep(e.target.value);
  }

  function ChangeView({ center }) {
    const map = useMap();
    map.setView(center, 15); // Aumentei o zoom aqui
    return null;
  }

  useEffect(() => {
    const sanitizedCep = cep.replace(/\D/g, ""); // remove qualquer caractere não numérico

    if (sanitizedCep.length !== 8) return;

    setLoading(true);

    fetch(`https://viacep.com.br/ws/${sanitizedCep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        if (data.erro) {
          console.warn("CEP não encontrado");
          setLoading(false);
          return;
        }

        const { logradouro, localidade, uf } = data;
        const address = `${logradouro ? logradouro + ', ' : ''}${localidade}, ${uf}`;

        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
          .then((response) => response.json())
          .then((locationData) => {
            if (locationData.length > 0) {
              const { lat, lon } = locationData[0];
              setLat(parseFloat(lat));
              setLng(parseFloat(lon));
            } else {
              console.warn("Coordenadas não encontradas");
            }
            setLoading(false);
          })
          .catch(error => {
            console.error("Erro ao buscar coordenadas:", error);
            setLoading(false);
          });
      })
      .catch(error => {
        console.error("Erro ao buscar CEP:", error);
        setLoading(false);
      });
  }, [cep]);

  return (
    <>
      <Menu s1="opa" s3="CONTATO" s4="batata" />
      <br /><br /><br /><br />
      <h1>CONTATO</h1>
      <input type="text" placeholder="Insira o CEP" onChange={handleCep} />

      {loading ?
       <Loading/> :
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
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
            >
              Abrir no Google Maps
            </a>
          </Popup>
        </Marker>
      </MapContainer> }

      
    </>
  );
}

export default Contact;