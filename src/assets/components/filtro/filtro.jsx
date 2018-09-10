import React, { Component } from 'react';




function Stars(props) {
    return(
        <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
            <label className="form-check-label" for="exampleRadios1">
                Todas Las Estrellas
            </label>
        </div>
    );
}


function Star5(props) {
    return(
        <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
            <label className="form-check-label" for="exampleRadios1">
                <span className="fa fa-star star"></span> <span className="fa fa-star star"></span> <span className="fa fa-star star"></span> <span className="fa fa-star star"></span> <span className="fa fa-star star"></span>
            </label>
        </div>
    );
}


function Star4(props) {
    return(
        <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
            <label className="form-check-label" for="exampleRadios1">
                <span className="fa fa-star star"></span> <span className="fa fa-star star"></span> <span className="fa fa-star star"></span> <span className="fa fa-star star"></span>
            </label>
        </div>
    );
}


function Star3(props) {
    return(
        <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
            <label className="form-check-label" for="exampleRadios1">
                <span className="fa fa-star star"></span> <span className="fa fa-star star"></span> <span className="fa fa-star star"></span>
            </label>
        </div>
    );
}


function Star2(props) {
    return(
        <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
            <label className="form-check-label" for="exampleRadios1">
                <span className="fa fa-star star"></span> <span className="fa fa-star star"></span>
            </label>
        </div>
    );
}


function Star1(props) {
    return(
        <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
            <label className="form-check-label" for="exampleRadios1">
                <span className="fa fa-star star"></span>
            </label>
        </div>
    );
}


class Filtro extends Component {

    render() {
        return (
            <div className="col-md-3 col-xs-12 filtro">
                <div className="shadow card card-header cursor">
                    <h5 data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"> <strong>Filtro</strong></h5>
                </div>

                <div className="collapse" id="collapseExample">

                    <div className="shadow card carta my-4">
                        <div className="card-body">
                            <h5 data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><span className="fa fa-search"></span> Nombre De Hotel</h5>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Ingrese el nombre del hotel" onChange={this.trackQueryValue}/>
                                <span className="input-group-btn">
                                    <button className="btn btn-secondary" type="button">Buscar</button>
                                </span>
                            </div>
                            <hr />
                        </div>
                        <a className="card-header" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><span className="fa fa-star"></span> Estrellas</a>
                        <div className="card-body">
                            <div className="collapse multi-collapse" id="multiCollapseExample1">
                                <Stars />
                                <Star5 />
                                <Star4 />
                                <Star3 />
                                <Star2 />
                                <Star1 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}





export default Filtro;