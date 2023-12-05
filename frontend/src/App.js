import React from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
// import Menu from './components/Menu';
// import Footer from './components/Footer';
// import CarbonEmission from './components/CarbonEmission';

const App = () => {
  return (
    <div className='relative'>
      <Navbar />
      <Header />
      <Dashboard />
      {/* <Menu />
      <CarbonEmission />
      <Footer /> */}
    </div>
  )
}

export default App;