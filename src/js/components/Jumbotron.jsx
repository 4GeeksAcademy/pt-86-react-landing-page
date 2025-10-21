import React from "react";


const Jumbotron = (props) =>{
return(
    <div className="jumbotron text-center">
        <h1 className="display-4" style={{backgroundColor: 'lightgray'}}>{props.title}</h1>
        <p className="lead">{props.description}</p>
        <hr className="my-4"/>
        <p>{props.paragraph}</p>
        <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
    </div>
)


}

export default Jumbotron;