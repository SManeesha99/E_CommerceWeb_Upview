import React, {useEffect, useState} from 'react';

const Home = () => {

    const [data, setData] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState("");


    useEffect(() => {
        fetch('https://my-json-server.typicode.com/kodplex/pr-re-ec-products/db')
        .then(res => res.json())
        .then(data => {
            setData(data);
            console.log(data);
        })
        .catch(err => console.log(err));
    }, []);
    

    // useEffect(() => {
    //     fetch(`https://my-json-server.typicode.com/kodplex/pr-re-ec-products/db`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))
    // }, []);

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
                    
                </ul>

                </div>
            </div>
        </nav>
        {/* Nav Bar End */}

        {/*Best Seller Start */}
        <div class="container-fluid">
        <h2 style={{  fontWeight:'600' }}>Best Seller</h2>



        <div class="card" style={{ width:"18rem", margin:'15px' }} >
            
        <img src="https://upview-images.s3.ap-south-1.amazonaws.com/ecommerce-practical/1.png" class="card-img-top" alt="..." style={{ width:'200px', margin:'10px' }}/>
        <div class="card-body">
            <h5 class="card-title">Gaming Headphones</h5>
            <p  class="card-text" style={{ color:"gray" , fontSize:'15px' }}>Some quick example text to  content.</p>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span> (230)
            <br/>

            <a href="#" class="btn btn-outline-success">Go somewhere</a>
        </div>
        </div> 
        </div>



            
        




        {/*Best Seller end */}

    </div>
  )
}

export default Home;