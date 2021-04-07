import React from 'react';
import NavComponent from './NavComponent.jsx';
import FooterComponent from './FooterComponent';

function Contact() {
    return (
        <div>
            <NavComponent />
            <div className="container my-4">
                <h2>Conatact us</h2>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <select class="form-select" aria-label="Default select example">
                        <option selected disabled>Select Query</option>
                        <option value="1">Web Stack</option>
                        <option value="2">Cloud</option>
                        <option value="3">Networking</option>
                    </select>

                    <div className="my-2">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                            <label class="form-check-label" for="flexCheckDefault1">
                                Are you member?
                        </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                            <label class="form-check-label" for="flexCheckDefault2">
                                Are you coder
                        </label>
                        </div>
                    </div>

                    <div class="form-floating mt-3">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Comments</label>
                    </div>
                    <button className="btn btn-primary my-3">Submit</button>
                </form>
            </div>
            <FooterComponent />
        </div>
    );
}

export default Contact