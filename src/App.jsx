import './App.css'
import { Btn } from './components/btn'
import { Menu } from './components/menu'

function App() {

  return (
    <>
    <Menu s1='Home' s2='Sessão 2' s3='CONTATO' s4='...'/>
    <main>
      <section id='s1'>
       <Btn text="proxima sessão" func="#s2"/>
      </section>
      <section id='s2'>
      <Btn text="volta pra cima" func="#s1"/>
      </section>
    </main>
    </>
  )
}

export default App
