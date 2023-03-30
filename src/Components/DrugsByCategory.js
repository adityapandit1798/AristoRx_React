import React, { Component } from 'react';
import './DrugsByCategory.css'
import DrugsByCondition from './DrugsByCondition';
export default class DrugsByCategory extends Component {
  render() {
    return (
      <div>
       <div id="drugs-by-category" className="carousel slide" data-bs-ride="true">
       <div className="btn-group drugs-by-category-btns" role="group" >
       <button type="button" data-bs-target="#drugs-by-category" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">Drugs By Condition</button>
    <button type="button" data-bs-target="#drugs-by-category" data-bs-slide-to="1" aria-label="Slide 2">Drugs by Class</button>
    <button type="button" data-bs-target="#drugs-by-category" data-bs-slide-to="2" aria-label="Slide 3">Drugs by Company</button>
</div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <DrugsByCondition/>
    </div>
    <div className="carousel-item">
      1 one
    </div>
    <div className="carousel-item">
      1 one
    </div>
  </div>
</div>
      </div>
    );
  }
}
