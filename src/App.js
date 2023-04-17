import React ,{useState} from 'react';
import SearchProducts from './Components/SearchProducts';
import Navbar from './Components/Navbar';
import DrugsByCategory from "./Components/DrugsByCategory";
import Menu from './Components/Menu';
import SearchResultList from './Components/SearchResultList';
import {SearchContext} from "./Context/SearchContext";


export default function App() {
  const [searchResult, setsearchResult] = useState(null);
  return (
    <>
    <Navbar/>
        <Menu/>
        <SearchContext.Provider value={{setsearchResult}}>
        <SearchProducts/>
          {searchResult !== null ? <SearchResultList searchResult={{searchResult , setsearchResult}}/> : <DrugsByCategory/>}
        </SearchContext.Provider>
        
    </>
  )
}
