import React from 'react'
import Form from '../Form'
import "./Home.css"
import Mybox from '../Mybox/Mybox'

const Home = () => {
  return (
    <div>
      <div className="home">
    

        <Form />
        <div className="nboxes">
          <Mybox />
        </div>


      </div>
    </div>
  )
}

export default Home
