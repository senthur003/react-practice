import React,{ Fragment, useState } from 'react'
import './App.css'
import FirstComponent from './components/firstComponent'
import HeaderComponent from './components/headerComponent'
import FooterComponent from './components/footerComponent'

function App() {

  return (
    <Fragment>
      <HeaderComponent/>
<FirstComponent/>
<FooterComponent/>
    </Fragment>
  )
}

export default App
