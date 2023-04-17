import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './SearchResultList.css'

export default function SearchResultList(props) {
  const clearSearchResults = () => {
    props.searchResult.setsearchResult(null);
  }
  console.log(props);
  return (
<>
<div className="clearfix">
  <span className="float-start">Search results for</span>
  <span className="float-end" onClick={clearSearchResults}><FontAwesomeIcon icon={faTrashCan} /> clear results </span>
</div>
{props.searchResult.searchResult.ProductSearch.result.map((element,index) => {
return(
  <div key={index} className="card mx-4 my-4" >
  <div className="row g-0">
    <div className="col-4">
{<img src={`https://s3.amazonaws.com/pillguru/${element.documentId}/${element.imageNameList.includes(';') ? element.imageNameList.split(';')[0] : element.imageNameList}`} className="img-fluid rounded-start" alt="not available" style={{height:'200px',width:'100%',objectFit:'fill'}}/>}  
  </div>
    <div className="col-8">
      <div className="card-body">
        <h5 className="card-title">Product name : {element.documentTitle}</h5>
        <p className="card-text">AKA (Also known as) :{element.productNames}</p>
        <p className="card-text">Manufactured by :{element.labelerName}</p>
        <p className="card-text">Typecode :{element.documentTypeCode}</p>
        <div className="more-info">
        <p className="card-text">Document Id : <small className="text-muted">{element.documentId}</small></p>
        <p className="card-text">Document set Id :<small className="text-muted">{element.documentSetId}</small></p>
        </div>
      </div>
    </div>
  </div>
</div> 
)

})}
</>  )
}
