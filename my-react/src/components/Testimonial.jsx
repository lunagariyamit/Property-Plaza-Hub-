
import Navbared from './Navbared'
import Search from './Search'



import photo2 from '../assets/photo/img1.jpg'
import photo3 from '../assets/photo/img2.jpg'

import Footered from './Footered'

import photo19 from '../assets/photo/img24.jpg'
import photo20 from '../assets/photo/img25.jpg'
import Contact from './Contact'




function Testimonial(){
    return(
        <div>
            <Navbared />
            
            <div className="container-fluid header bg-white p-0">
                <div className="row g-0 align-items-center">
                    <div className="col-md-6 p-5 mt-lg-5">
                        <h1 className="display-5 mb-4" style={{fontWeight: 'bold'}}>Testimonial</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a style={{textDecoration:'none', color:'green', textTransform: 'uppercase', fontWeight:'bold'}} href="/home">Home</a></li>
                                <li class="breadcrumb-item"><a style={{textDecoration:'none', color:'green', textTransform: 'uppercase', fontWeight:'bold'}} href="#">Pages</a></li>
                                <li class="breadcrumb-item"><a style={{textDecoration:'none', color:'gray', textTransform: 'uppercase', fontWeight:'bold'}} href="#">Testimonial</a></li>
                            </ol>
                        </nav>
                    </div>


                    <div className="col col-md-6 col-12">
                        <div id="carouselExampleFade" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={photo2} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={photo3} className="d-block w-100" alt="..." />
                                </div>

                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                                <span className="visually-hidden ">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div> 

            <Search />

            <div className="container-fluid mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center mx-auto" style={{maxWidth: "600px"}}>
                                <h1 className="mb-3">Our Clients Say!</h1>
                                <p>Amazing experience working with you – awesome design and unbelievable customer service!! 
                                    Highly recommend time4design!!
                                </p>
                            </div>
                        </div>

                        <div className="row mt-5 d-flex justify-content-around">

                            <div className="col-lg-6 col-xl-6 goli rounded p-3" style={{maxWidth: "550px"}}>
                                <div className="bg-white gol p-3">
                                    <p> We are extremely pleased with the work done by time4design in turning our
                                         ideas into a much better version of themselves. This is very good.
                                    </p>
                                    <div className="d-flex">
                                        <img src={photo19} alt="img" style={{width: "45px", height: "45px"}}
                                            className="img-fluid rounded" />
                                        <div className="ps-3">
                                            <h6 className="fw-bold mb-1">Jack Denial</h6>
                                            <p>Profession</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-6 col-xl-6 rounded goli p-3 mt-3 mt-lg-0" style={{maxWidth: "550px"}}>
                                <div className="bg-white gol p-3 ">
                                    <p>They are professional, prompt, creative and patient. During the course of the project,
                                         time4design was attentive and compassionate about the parameters of the project.
                                    </p>
                                    <div className="d-flex">
                                        <img src={photo20} alt="img" style={{width: "45px", height: "45px"}}
                                            className="img-fluid rounded" />
                                        <div className="ps-3">
                                            <h6 className="fw-bold mb-1">Pankaj Vadi</h6>
                                            <p>Profession</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            
           
           
            <Footered />
                        
        </div>

    )
}

export default Testimonial