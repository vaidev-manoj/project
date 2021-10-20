import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
//import slick from '../components/slick/slick';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import {Row,Col,Container,Badge,Image} from 'react-bootstrap'
import styled from 'styled-components';const Styles = styled.div`

* {
  box-sizing: border-box;
}

/* Style the body */
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

.url {
  width:120px;
}
.slick{
  height:40px;
}
.header
{
  padding:20px;
}

.image{
  width:20%

}


}`;

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  var url=["https://d2sj89osparb2a.cloudfront.net/images/campaigns/myntra/blog-banner.jpg",
  "https://trak.in/wp-content/uploads/2018/03/Myntra-Banner-Opt-1.jpg",
  "https://www.couponsloka.com/wp-content/uploads/2019/11/myntra_v3.jpg",
  "https://cdn.static-zoutons.com/images/originals/blog/BANNER2_1590066235.png"
]
  var settings = {
    dots: true,
    infinite: true,
    speed: 50,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const userTopSellersList = useSelector((state) => state.userTopSellersList);
  const {
    loading: loadingSellers,
    error: errorSellers,
    users: sellers,
  } = userTopSellersList;

  useEffect(() => {
    dispatch(listProducts({}));
    dispatch(listTopSellers());
  }, [dispatch]);
//   return(
//   <Slider {...settings}>
//   <div>
//     <img src={url[0]} alt="img_1" />
//   </div>
//   <div>
//   <img src={url[1]} alt="img_2" />
//   </div>
//   <div>
//   <img src={url[2]} alt="img_3" />
//   </div>
//   <div>
//   <img src={url[3]} alt="img_4" />
//   </div>
 
// </Slider>);
  return (
    <div>
      
      <Badge variant="primary" className="badge badge-light">NEW</Badge>   ENJOY THE SHOPPING FESTIVAL   <Badge variant="primary" className="badge badge-light">NEW</Badge>
      {loadingSellers ? (
        <LoadingBox></LoadingBox>
      ) : errorSellers ? (
        <MessageBox variant="danger">{errorSellers}</MessageBox>
      ) : (
        <>
          {sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}
   
          <Carousel showArrows={true} showThumbs={true}{...settings}>
         <settings></settings>
{
    url.map((url, index) => (
      
       <img key={index} src={url } style= {{height: "100%", width :"100%"},{...settings}} />
    ))
}
</Carousel>


          {/* <Carousel showArrows autoPlay showThumbs={true}>
            {sellers.map((seller) => (
              <div key={seller._id}>
                <Link to={`/seller/${seller._id}`}>
                  <img src={seller.seller} alt={seller.seller} width = {"30%"} />
                  <p></p>
                  
                  <p className="legend">{seller.seller.name}</p>
                </Link>
              </div>
            ))}
          </Carousel>
           */}
        </>
        
      )}
    
     
            <h2>Featured Products</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}

          <div className="row center">
           
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
           
          </div>
         
        </>
      )}
    </div>
  );
}
