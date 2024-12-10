import React, { useState } from 'react'
import img from './2-1.avif'


export default function Product({products}) {
  
  return <>

    <div className="container">
        <div className="row">
            <div className="col-md-12 m-auto">
            <div className="ProductsCon my-5 row gy-3">
  {products.map((product) => <div className='col-md-3' key={product.id}> <div className="card" style={{width: 16+"rem"}}>
  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, deleniti?</p>
    <h3 className='my-2'>{product.Price}</h3>
    <h6>[{product.sizes.map((size) => `${size} ,`)}]</h6>
    <a href="#" className="btn btn-dark">Buy it</a>
  </div>
</div>
</div>
  )}
  </div>
            </div>
        </div>
    </div>


  </>
}
