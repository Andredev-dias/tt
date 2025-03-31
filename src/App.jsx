import './App.css'
import { Btn } from './components/btn'

function App() {

  return (
    <>
    <nav className='navbar-style'>
      <p><a href="#s1">Primeira</a></p>
      <p><a href="#s2">Segunda</a></p>
      <p>Terceira</p>
      <p>Quarta</p>
    </nav>
    <main>
      <section id='s1'>
       <Btn text="me clica" func="#s2"/>
      </section>
      <section id='s2'>

      </section>
    </main>
    </>
  )
}

export default App
