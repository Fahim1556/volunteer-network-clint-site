import React from 'react';
import './Home.css';

const Bannar = () => {
    return (
        <div className="container-fluid bannar-part d-flex flex-column justify-content-center align-items-center">
           <h3 className="font-weight-bolder">I GROW BY HELPING PEOPLE IN NEED</h3>
            <div className="input-group mx-auto mt-4 w-25">
              <input type="text" className="from-control py-1" placeholder="scarch"/>
              <div className="input-group-append">
                <button className="btn btn-success">Scarch</button>
              </div>
            </div>
            
        </div>
    );
};

export default Bannar;