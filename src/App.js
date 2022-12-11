import React, {useEffect, useState} from 'react';
import './App.css'
import Cards from './components/cards/Cards'
import {Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Nav from './components/nav/Nav'
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';

function App () {
  const location=useLocation();
  const navigate=useNavigate();
  const [characters, setCharacters]=useState([]);
  const [access, setAccess]=useState(false);
  const username='rafbar2000rr@gmail.com';
  const password='123456';

  function login(userData){
    if(userData.username===username && userData.password===password)
    {
      setAccess(true)
      navigate('/home')
    }
    else{
      alert('usuario o contraseña no válidos')
    }
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }


 

const onClose = (id) => {
  setCharacters(characters.filter(char => char.id !== id))
}

useEffect(() =>{
  !access && navigate('/')},[access])

  return (
    
    <div className='App' style={{ padding: '25px' }}>
      
      <div>
        {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
      </div>

      <Routes>
        <Route path='/' element={<Form Login={login}/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose = {onClose} />}/>
        <Route path='/about'element= {<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App
