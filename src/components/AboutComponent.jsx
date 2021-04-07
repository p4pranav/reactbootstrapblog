import React from 'react';
import NavComponent from './NavComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import About1 from '../assests/images/about1.jpg';
import About2 from '../assests/images/about2.jpg';

function About() {
    return (
        <div>
            <NavComponent />
            <div className="container my-4">
                <div class="row featurette d-flex justify-content-center align-items-center">
                    <div class="col-md-7 order-md-1">
                        <h2 class="featurette-heading">Cloud Computing. <span class="text-muted">It’ll blow your mind.</span></h2>
                        <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                    </div>
                    <div class="col-md-5 order-md-2">
                        <img className="img-fluid" src={About1} alt="" />
                    </div>
                </div>

                <div class="row featurette d-flex justify-content-center align-items-center">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading">Data Mining. <span class="text-muted">It’ll blow your mind.</span></h2>
                        <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <img className="img-fluid" src={About2} alt="" />
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    );
}

export default About;