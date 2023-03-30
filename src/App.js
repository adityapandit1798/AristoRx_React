import React from 'react';
import SearchProducts from './Components/SearchProducts';
import Navbar from './Components/Navbar';
import DrugsByCategory from "./Components/DrugsByCategory";
import Menu from './Components/Menu';
import SearchResultList from './Components/SearchResultList';

export default function App() {
  return (
    <>
    <Navbar/>
        <Menu/>
        <SearchProducts/>
       <SearchResultList/>
       <DrugsByCategory/>    
    </>
  )
}
