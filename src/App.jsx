import { Route, Routes } from 'react-router-dom'
import './App.css'
import ArticlesPage from "./pages/ArticlesPage"
import ArticlePage from "./pages/ArticlePage"

import HomePage from './pages/HomePage'
import NoContent from './pages/NoContent'
import ProjectsPage from './pages/ProjectsPage'
import BifidCipher from './pages/Coders/BifidCipher'
import VigenereCipher from './pages/Coders/VigenereCipher'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/articles" element={<ArticlesPage/>} />
      <Route path="/articles/:id" element={<ArticlePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/vigenere" element={<VigenereCipher/>} />
      <Route path="/projects/bifid" element={<BifidCipher/>} />
      <Route path="*" element={<NoContent/>} />
    </Routes>
      
      
    </>
  )
}

export default App
