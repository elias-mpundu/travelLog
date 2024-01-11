import React from 'react'

import Navbar from './components/header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/footer.jsx'

import data from './data/data.jsx'

import './App.css'

function App() {

  const cards =  data.map(item => {
    return (
      <Main
        key={item.id}
        item={item} 
      />    
    )}
  )
  let viewportWidth = window.innerWidth;

  console.log(viewportWidth)

  return (
    <div>
      <Navbar />
      <section className='card-collection'>
        {cards}
      </section>
      
      <Footer />
    </div>
  )
}

export default App
