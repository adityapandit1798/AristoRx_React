import React, { Component } from 'react';
import './DrugsByCondition.css';
import data from '../json/param-by-condition.json'

export default class DrugsByCondition extends Component {

  render() {

    return (
      <div>
        <div className="container">
        <div className="row" style={{justifyContent : 'center'}}>
        { data['x:option'].map((x,index)=>{
            return (
                <>
                 <div key={index} className="col-3 card category-card">
                    <img src={`./images/${x["@icon"]}`} className="card-img-top card-image" alt="..."/>
                    <div className="card-body">
                    <p className="card-text">{x['text()']}</p>
        </div>
    </div>
                </>
            )
        })


        }
   

    
  </div>
        </div>



      </div>
    );
  }
}
