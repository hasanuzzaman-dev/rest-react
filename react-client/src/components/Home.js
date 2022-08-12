import React, { useEffect } from "react";
import { Button } from "reactstrap";


const Home = () => {

    useEffect(() => {

        document.title = "Home"

    }, []);

    return (
        <div>
            <div className ="p-5 mb-4 bg-light rounded-3 text-center">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Node rest API + React Demo App</h1>
                    <p className="fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                    <Button color="primary" type="button">Example button</Button>
                </div>
            </div>
        </div>
    );
    
}

export default Home;