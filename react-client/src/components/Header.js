import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({ name }) {
    return (
        <div>
            <Card className="mt-3">
                <CardBody>
                    <h1 className="text-center my-3">{name}</h1>
                </CardBody>
            </Card>
        </div>
    );
}

export default Header;