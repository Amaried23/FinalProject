import React, {Component} from 'react';
import styles from './endpoint.css';
import API from '../../utils/database';

// const EndpointItem = (props) => {
//   return(
//     <div className="slide">
//     </div>
//   );
// }

// export default EndpointItem;


function handleClick (props) {
    API.postArticle(props.museumObj)
  }
export const EndpointItem = (props) => {
  
  console.log(props.museumObj, "******")
  return (
    <div className={`carousel-item item${props.index}`}>
      <h3>{props.museumObj.name}
      </h3>
      <img src={props.museumObj.img} alt="Unable to load"></img>
      <div className="caption">
        <p>
          {props.museumObj.description}
        </p>
        <a href={props.museumObj.link} target="_blank"> Learn More </a> 
        <span> 
          <button onClick={() => this.handleClick(props.museumObj)} type="button" className="btn-primary">Save</button>
        </span>

        {/* Left and right controls */}
        <a class="carousel-control-prev" href="#carousel-item" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#carousel-item" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
  );
}