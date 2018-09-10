import React, { Component } from 'react';
import PostData from "./../../../data/data.json";


const Stars1 = <span className='fa fa-star star' /> ;


const Stars2 = (
    <div>
        <span className='fa fa-star star' />
        <span className='fa fa-star star' />
    </div>
);


const Stars3 = (
    <div>
        <span className='fa fa-star star' />
        <span className='fa fa-star star' />
        <span className='fa fa-star star' />
    </div>
);

const Stars4 = (
    <div>
        <span className='fa fa-star star' />
        <span className='fa fa-star star' />
        <span className='fa fa-star star' />
        <span className='fa fa-star star' />
    </div>
);


const Stars5 = (
    <div>
        <span className='fa fa-star star' />
        <span className='fa fa-star star' />
        <span className='fa fa-star star' />
        <span className='fa fa-star star' />
        <span className='fa fa-star star' />
    </div>
);






class Hotels extends Component {
    render() {

        const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafsJVDct7TPGscxHHIYSVLGqNWDyAt_jQzVLuIOZrpXYDvGRiuQ";

        return (
            <div className="container-fluid col-md-9 col-xs-12 container-card">
                {PostData.map((postDetail, index) => {
                    const star = postDetail.stars;

                                    return (
                    
                        <div className="container-fluid card flex-md-row mb-4 shadow-sm h-md-250">
                            <img className="card-img-right img-fluid" src={img} data-holder-rendered="true"/>
                            <div className="card-body d-flex flex-column align-items-start">
                                <div key={postDetail.id}>
                                    <h1>{postDetail.name}</h1>
                                </div>
                                <div className="container stars">
                                                
                                    <div className="icons container">
                                        <p>{postDetail.amenities[1]}</p>
                                        <p>{postDetail.amenities[2]}</p>
                                        <p>{postDetail.amenities[3]}</p>
                                    </div>
                                </div>

                                <div className="container-card puntos">
                                    <p>Precio por noche por <br/>havitacion</p>
                                        <h4>ARS {postDetail.price}</h4>
                                        <a className="btn btn-hotel">Ver Hotel</a>
                                </div>
                            </div>
                        </div>

                          );
                })}
                    </div>
                  

        );
    }

}

export default Hotels;