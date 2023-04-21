import React, {  useState } from 'react';
import './DrugsByCondition.css';
import data from '../json/param-by-condition.json'

function DrugsByCondition() {
    const [conditionsInfo, setconditionsInfo] = useState('');
    const getConditionInfo = (condition) =>{
    fetch(`https://static.pill.guru/assets/json/conditions/${condition}.json`).then(r=>r.json()).then(x=>{setconditionsInfo(x.condition.info[0])
    })
    }
    return (
      <>
      <div className="modal fade" id="category-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="category-modalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg  modal-dialog-scrollable">
          <div className="modal-content">
          {conditionsInfo ? ( <>
                  <div className="modal-header">
                      <h1 className="modal-title fs-5" id="category-modalLabel">{conditionsInfo.conditionName}</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body row">
                  <div className="col-3">
                  <img src={`https://medlineplus.gov/images/${conditionsInfo.conditionName.replace(/\s/g, '')}.jpg`} alt={conditionsInfo.conditionName} style={{maxWidth:'100%'}} />

                  </div>
                  <div className="col-9">
                  <p className="card-text"><strong>Description:</strong> {conditionsInfo.description}</p>
                  </div>
                  <div className="col">
                    <hr />
                    <div dangerouslySetInnerHTML={{ __html: conditionsInfo.Symptoms }} />
                  </div>
                  <div className="col">
                    <hr />
                  <p className="card-text"><strong>Details:</strong> {conditionsInfo.druginfo}</p>
                  </div>
                  </div>
                  <div className="modal-footer">
                  For more info check : <a href={conditionsInfo.viewMore} className="info-light">MedLinePlus website</a>
                </div>
                </>
              ) : (
            <div>
              <span className="placeholder col-6"></span>
              <span className="placeholder w-75"></span>
              <span className="placeholder"></span>
            </div>
          
)}
</div>
             

          </div>
      </div>



        <div className="container">
        <div className="row" style={{justifyContent : 'center'}}>
        { data['x:option'].map((x,index)=>{
            return (
                <>
                 <div key={index} className="col-3 card category-card" data-bs-toggle="modal" data-bs-target="#category-modal" onClick={()=>{getConditionInfo(x['text()'].split(' ').join(''))}}>
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
      </>
    );

}

export default DrugsByCondition
