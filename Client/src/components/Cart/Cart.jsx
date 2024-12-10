import React from 'react'
import img from './first.avif'
import { words } from '../../Words'

export default function Cart() {
  return <>
  <div className="container">
    <div className="row">
        <div className="col-md-12 my-5">
            <h1 className='text-center'>{words.HeaderTitle}</h1>
            <hr />
  <div class="card" style={{width: 18+"rem"}}>
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        </div>
    </div>
  </div>

  </>
}
