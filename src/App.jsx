import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import {useEffect} from 'react'

import {useDispatch} from "react-redux"
import {getMovieData} from "./features/movieDataSlice"

import Header from '../src/components/Header'
import Home from '../src/pages/Home'
import Movies from '../src/pages/Movies'
import Contact from '../src/pages/Contact'
import Footer from '../src/components/Footer'


const App = () => {
  
  // const [data, setData] = useState([])
    
  // useEffect(() => {
  //       const options = {
  //         method: 'GET',
  //         headers: {
  //           accept: 'application/json',
  //           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmE0YjkxYmNjNGZiMmMyZDk1NGFlZjlkMmViMmU0NCIsInN1YiI6IjY0ZjBmZWZjM2E5OTM3MDExY2JkZDZiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sPjp8MlpHbSaX30XcjKyPlVcmv8-_N50jApvjq4x7bg'
  //         }
  //       };
        
  //       fetch('https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1', options)
  //         .then(response => response.json())
  //         .then(response => {
  //           setData(response.results)
  //           useDispatch(getMovieData(data))
  //           console.log(data)
  //         })
  //         .catch(err => console.error(err));
  //   }, [])
  

  
  
  return (
    <>
   <Header />
   <Routes>
     <Route path="/" element={<Home />} />
    <Route path="/films" element={<Movies />} />
    <Route path="/contact" element={<Contact />} />
   </Routes>
   <Footer />
   </>
      
  )
}

export default App
