import React from 'react'
import PropTypes from 'prop-types';


const Person= (props) => {
  //console.log(Person.defaultProps)
  //console.log(props)
  return (
    <div>
      <h1  style={{color:"rgb(5,47,73)", marginTop:"50px"}}>{props.Hend.fullName}</h1>
      <div style={{display:"flex", marginLeft:"60px", marginTop:"70px"}}>
      <img src={props.Hend.image} alt={props.Hend.fullName} style={{borderRadius:"5px"}} />
      <div>
      <h2 style={{color:"rgb(5,47,73)"}}>{props.Hend.profession}</h2>
      <h3 style={{width:"700px", color:"rgb(70,130,180)"}}>{props.Hend.bio}</h3>
      </div>
      </div>

<button onClick= {()=>props.handle(props.Hend)} style={{marginTop:"70px", height:"40px", boxShadow:"0px 0px 0px 0px", fontSize:"18px", backgroundColor:"rgb(173,216,230)", color:"rgb(70,130,180)", border:"none", borderRadius:"5px"}}> Click here to get my name </button>
    </div>
  )
}
Person.propTypes = {
    normal: PropTypes.string
  };
Person.defaultProps={
    normal:"this is a default props"
};
export default Person
