import React, { useState } from 'react'
import img from './first.avif'
import './Product.css'

export default function Product({products}) {
  const [productDetails, setproductDetails] = useState('')

  function openModal(product){
    setproductDetails(product);
    console.log(product);
  }

  return <>
    <div className="container">
        <div className="row">
            <div className="col-md-12 m-auto">
            <div className="ProductsCon row gy-3 my-5">
{products.map((product) => <div key={product.id} className="col-md-4" onClick={() => openModal(product)}>
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
      {productDetails === "" ? "" : <div className='popUp' onClick={() => setproductDetails('')}><div class="card cardPopUp mb-3" style={{width: 18+"rem"}}>
  <div class="row g-0">
    <div class="col-md-4 imgCover">
      <img src={img} class="img-fluid rounded-start imgProductDetails" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{productDetails.title}</h5>
        <p class="card-text">{productDetails.Desc}</p>
        <h1>{productDetails.Price}</h1>
      </div>
    </div>
  </div>
</div>
</div>}
  </div>
            </div>
        </div>
    </div>


  </>
}
