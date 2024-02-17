import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"
import "./styles/mediaquery.scss"
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
