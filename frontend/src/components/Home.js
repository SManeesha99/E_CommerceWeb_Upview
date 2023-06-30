import React, {useEffect, useState} from 'react';

const Home = () => {

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/kodplex/pr-re-ec-products/db`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }, []);

  return (
    <div>
        {/* Nav Bar Start */}
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <img src='https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/logo.png'  style={{ width:'100px' }}/>
                <div class="d-flex">
                    
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" >
                    <i class="fa fa-cart-shopping"></i> Cart
                    </a>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>

                </div>
            </div>
        </nav>
        {/* Nav Bar End */}

        {/*Best Seller Start */}




        {/*Best Seller end */}

    </div>
  )
}

export default Home;