import React from 'react';
import {Row,Col,Container,Badge,Image} from 'react-bootstrap'
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const footer=()=>{
    return(
        <div className="Footer bg-light p-3 mt-4">
            <Container>
                <Row>
                    <Col xs={2}>
                        ONLINE SHOPPING
                  <ul className="list-unstyled lists">
                            <li>
                                Men</li>
                            <li>Women</li>
                            <li>Kids</li>
                            <li>Home & Livings</li>
                            <li>Offers</li>
                            <li>Gift Cards</li>
                        <Link>   <li>Myntra Insider <Badge variant="danger" className="rounded-pill">New</Badge></li> </Link> 
                        </ul>
                        </Col>
                    <Col xs={2}>
                        USEFUL LINKS
                        <ul className="list-unstyled lists pl-1">
                            <li>Contact US</li>
                            <li>FAQ</li>
                            <li>T&C</li>
                            <li>Terms of Use</li>
                            <li>Track Orders</li>
                            <li>Shipping</li>
                            <li>Cancellation</li>
                            <li>Returns</li>
                            <li>WhiteHat</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Privacy Policy</li>
                            <li>Site Map</li>
                           
                        </ul>
                    </Col>
                    <Col xs={4}>EXPERIENCE MYNTRA APP ON MOBILE
                         <Row >
                             <Col md={5} className="ml-4"> <a href ="https://play.google.com/store/apps/details?id=com.myntra.android&hl=en_IN&gl=US"><Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png" width="120px" className="mt-4 ml-5"  height="40px" alt="google Play" /> </a></Col>
                             <Col md={6} ><Image src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" width="120px" className="mt-4" height="40px" alt="google Play" /></Col>
                        </Row>
                        <Row className="mt-5" style={{marginLeft:"70px"}}>
                            KEEP IN TOUCH
                        </Row>
                        <Row className="mt-3" style={{marginRight:'60px'}} >
                            <span><Image src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png" alt="FB" className="mr-2" width="20px" height="20px"/>
                            <Image src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png" className=" mr-2 ml-2"  alt="twitter" width="20px" height="20px"/>
                            <Image src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png" alt="FB" width="20px" className=" mr-2 ml-2"  height="20px"/>
                            <Image src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png" alt="FB" width="20px" className=" mr-2 ml-2"  height="20px"/></span>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col md={2} className="ml-5 mt-2"> <Image src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" width="60px" height="50px" alt="100%"/></Col>
                            <Col md={8}  className="mt-3 ml-2" style={{fontWeight:"lighter",fontSize:'14px'}}><b style={{fontSize:'12px'}}>100% ORIGINAL</b><span className="mr-5 ml-1">guarantee for all products at myntra.com</span></Col>
                        </Row>
                        <Row>
                            <Col md={2} className="ml-5 mt-2"> <Image src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" width="60px" height="60px" alt="30 days"/></Col>
                            <Col md={8}  className="mt-3 ml-2" style={{fontWeight:"lighter",fontSize:'14px'}}><b style={{fontSize:'14px'}}>Return within 30days</b><span style={{marginRight:"140px"}}>of receiving your order</span></Col>
                        </Row>
                        <Row>
                            <Col md={2} className="ml-5 mt-2"> <Image src="https://constant.myntassets.com/web/assets/img/cafa8f3c-100e-47f1-8b1c-1d2424de71041574602902399-truck.png" width="60px" height="50px" alt="Delivery"/></Col>
                            <Col md={8}  className="mt-3 ml-2" style={{fontWeight:"lighter",fontSize:'14px'}}><b style={{fontSize:'12px'}}>Get Free Delivery</b><span style={{marginRight:"110px"}}>for every order above Rs.799</span></Col>
                        </Row>
                      
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default footer