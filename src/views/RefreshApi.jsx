import React from "react";
import { Link } from "react-router-dom";

const RefreshApi = () => {
    return (
        <section className="container my-5">
            <div className="row">
                <div class="card px-0">
                    <h5 class="card-header">Sorry</h5>
                    <div class="card-body">
                        <h5 class="card-title">Looks like there is a problem here</h5>
                        <p class="card-text">
                            Your request could not react to the server. Please click on the button and try again
                        </p>
                        <Link to="/" class="btn btn-primary">
                            Go Home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RefreshApi;
