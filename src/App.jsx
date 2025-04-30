import { Route, Routes } from 'react-router-dom'
import './App.css'
import ArticlesPage from "./pages/ArticlesPage"
import ArticlePage from "./pages/ArticlePage"

import HomePage from './pages/HomePage'
import NoContent from './pages/NoContent'
import ContactPage from './pages/ContactPage'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/articles" element={<ArticlesPage/>} />
      {/* <Route path="/contact" element={<ContactPage/>} /> */}
      <Route path="/articles/:id" element={<ArticlePage />} />
      <Route path="*" element={<NoContent/>} />
    </Routes>
      
    </>
  )
}

export default App
