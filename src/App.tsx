import './App.css'
import Header from './components/Header'
import EventBanner from './components/EventBanner'
import Newsletter from './components/Newsletter'
import Episodes from './components/Episodes'
import Members from './components/Members'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'

function App() {

  return (
    <div className="bg-neutral-900">
      <EventBanner text="¡Nuevo episodio disponible!" link="#episodes"/>
      <Header />
      <section id="newsletter">
        <Newsletter />
      </section>
      <section id="episodes">
        <Episodes />
      </section>
      <section id="members">
        <Members />
      </section>
      <section id="sponsors">
        <Sponsors />
      </section>
      <Footer />
    </div>
  )
}

export default App