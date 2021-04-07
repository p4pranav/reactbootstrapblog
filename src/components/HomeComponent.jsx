import React from 'react';
import NavComponent from '../components/NavComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import thumb1 from '../assests/images/thumb1.jpg';
import thumb2 from '../assests/images/thumb2.jpg';
import thumb3 from '../assests/images/thumb3.jpg';
import thumb4 from '../assests/images/thumb4.jpg';

function Home() {
    return (

        <div className="App">
            <NavComponent />
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/1400x400/?nature,mountain" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Welcome to iCoder</h5>
                            <p>Technoloy, Services & Development</p>
                            <buttton className="btn btn-danger ">Technology</buttton>
                            <buttton className="btn btn-primary mx-1">Web Development</buttton>
                            <buttton className="btn btn-success">Tech Fun</buttton>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/1400x400/?nature,python" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Welcome to iCoder</h5>
                            <p>Technoloy, Services & Development</p>
                            <buttton className="btn btn-danger">Technology</buttton>
                            <buttton className="btn btn-primary mx-1">Web Development</buttton>
                            <buttton className="btn btn-success">Tech Fun</buttton>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/1400x400/?nature,sky" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Welcome to iCoder</h5>
                            <p>Technoloy, Services & Development</p>
                            <buttton className="btn btn-danger">Technology</buttton>
                            <buttton className="btn btn-primary mx-1">Web Development</buttton>
                            <buttton className="btn btn-success">Tech Fun</buttton>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container my-4">
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div
                            className="row g-0 border rounded overflow-hidden  flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">World</strong>
                                <h3 className="mb-0">World Coding Hack</h3>
                                <div className="mb-1 text-muted">Nov 12</div>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural
                         lead-in to additional content.</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img className="bd-placeholder-img" width="200" height="235" src={thumb1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div
                            className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-success">Design</strong>
                                <h3 className="mb-0">Globe Tech Design</h3>
                                <div className="mb-1 text-muted">Nov 11</div>
                                <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to
                         additional content.</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img className="bd-placeholder-img" width="200" height="235" src={thumb2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-4">
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div
                            className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-danger">Technology</strong>
                                <h3 className="mb-0">Tech Development</h3>
                                <div className="mb-1 text-muted">Nov 12</div>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural
                         lead-in to additional content.</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img className="bd-placeholder-img" width="200" height="235" src={thumb3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div
                            className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-warning">Network</strong>
                                <h3 className="mb-0">Cloud Computing</h3>
                                <div className="mb-1 text-muted">Nov 11</div>
                                <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to
                         additional content.</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img className="bd-placeholder-img" width="200" height="235" src={thumb4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    );
}

export default Home;