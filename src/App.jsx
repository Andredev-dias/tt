import style from './App.module.css'
import { Btn } from './components/btn'
import { Menu } from './components/menu'
import { Card } from './components/card'

import p1 from "./assets/images/p1.jpeg"

function App() {

  return (
    <>
    <Menu s1='Home' s2='Sessão 2' s3='CONTATO' s4='...'/>
    <main>
      <section id='s1' className={style.s1}>
       {/* <Btn text="proxima sessão" func="#s2"/> <br /> */}
        <Card text="primeiro card" img={p1}/>
        <Card text="segundo card" img={p1}/>
        <Card text="terceiro card" img={p1}/>
        <Card text="quarto card" img={p1}/>
        <Card text="quinto card" img={p1}/>
        <Card text="sexto card" img={p1}/>

      </section>
      <section id='s2' className={style.s2}>
      <Btn text="volta pra cima" func="#s1"/>
      </section>
    </main>
    </>
  )
}

export default App
