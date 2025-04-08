import style from "./App.module.css";
import { Btn } from "./components/btn";
import { Menu } from "./components/menu";
import { Card } from "./components/card";

import p1 from "./assets/images/p1.jpeg";

import { useState } from "react";

function App() {
  const defaultPhoneNumber = "5541999999999";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleZap = () => {
    const { name, email, message } = formData;

    const urlZAPZAP = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
  Nome:%20${name}%0D%0A
  Email:%20${email}%0D%0A
  Mensagem:%20${message}%0D%0A`;

    window.open(urlZAPZAP, "_blank");
  };

  return (
    <>
      <Menu s1="Home" s2="Sessão 2" s3="CONTATO" s4="..." />
      <main>
        <section id="s1" className={style.s1}>
          {/* <Btn text="proxima sessão" func="#s2"/> <br /> */}
          <Card text="primeiro card" img={p1} />
          <Card text="segundo card" img={p1} />
          <Card text="terceiro card" img={p1} />
          <Card text="quarto card" img={p1} />
          <Card text="quinto card" img={p1} />
          <Card text="sexto card" img={p1} />
        </section>
        <section id="s2" className={style.s2}>
          <Btn text="volta pra cima" func="#s1" />
          <h2>Contato</h2>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Mensagem</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              cols="30"
              rows="10"
              required
            ></textarea>
          </div>
          <button onClick={handleZap}>Enviar mensagem</button>
        </section>
      </main>
    </>
  );
}

export default App;
