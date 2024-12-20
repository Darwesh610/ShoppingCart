import React from 'react'
import img from './first.avif'

export default function Product({products}) {
  return <>
    <div className="container">
        <div className="row">
            <div className="col-md-12 m-auto">
            <div className="ProductsCon row gy-3 my-5">
{products.map((product) => <div className="col-md-4">
    <div class="card" style={{width: 18+"rem"}}>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  <div class="card-body">
    <h5 class="card-title">{product.title}</h5>
    <p class="card-text">{product.Desc}</p>
    <h3>{product.Price}</h3>
    <h6>[{product.sizes.map((size) => `${size}, `)}]</h6>
    <a href="#" class="btn btn-dark">Buy It</a>
  </div>
</div>
</div> )}
  </div>
            </div>
        </div>
    </div>


  </>
}
