import './App.css'
import { Btn } from './components/btn'
import { Menu } from './components/menu'

function App() {

  return (
    <>
    <Menu s1='opa' s2='segunda' s3='banana' s4='batata'/>
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
