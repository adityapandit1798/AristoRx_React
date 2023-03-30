import React from 'react'
import {useState } from "react";
import './SearchProduct.css';
export default function SearchProducts(props) {
  const [SearchPhrase, setSearchPhrase] = useState('');

  const search =async (e) =>{
    e.preventDefault();
   await fetch(`https://ws.aristorx.com/public/query/ProductSearch.data.json?productCategory=MP&phrase=${SearchPhrase}`)
    .then(resp => resp.json())
    .then(x=> {console.log(x)})
  }
  
      return (
        <>
        <div className="search-product">
        <div className="container">
        <h1 className="search-box-heading">Search by product type here</h1>
  
  <div className="container text-center">
    <div className="row">
      <div className="col-sm-4 my-3">
        <button type="button" className="btn btn-outline-light"><img src="./images/ic_medicinalproduct.svg" alt="" />Medicinal Product</button>
      </div>
      <div className="col-sm-4 my-3">
        <button type="button" className="btn btn-outline-light"><img src="./images/ic_veterinary.svg" alt="" />Veterinary Products</button>
      </div>
      <div className="col-sm-4 my-3">
        <button type="button" className="btn btn-outline-light"><img src="./images/ic_dietary.svg" alt="" />Dietary Suppliments</button>
      </div>
    </div>
  </div>
  
        <form onSubmit={search}>
          <div className="input-group mb-3">
          <input type="text" onChange={(e)=>{setSearchPhrase(e.target.value)}} className="form-control search-input" placeholder="Enter Name or ingridients" aria-describedby="Search-icon"/>
          <span className="input-group-text search-icon"  id="Search-icon"><img src="./images/Search-icon.svg" alt="" /></span>
          </div>
        </form>
        </div>
        </div>
        </>
      );
        }

