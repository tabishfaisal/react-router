import Blog from './pages/blog.posts';
import Home from './pages/Home';
import About from './pages/About';
import Default from './pages/Default';
import Nav from './pages/Nav';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Link } from 'react-router';
function App() {


  return (
    <>
     <header>
      <h1 className="header">My blog</h1>
     </header>
     <BrowserRouter>
     <Nav />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route  path='/blog' element={<Blog />}/>
          <Route path='about' element={<About />}/>
          <Route path='*' element={<Default />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
