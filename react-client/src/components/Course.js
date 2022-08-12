import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
    Button, Card, CardBody, CardSubtitle,
    CardText, CardTitle, Container
} from 'reactstrap';
import base_url from "../api/nodeApi";

const Course = ({ course, update }) => {

    // Delete course after clicking delete button
    const deleteCourse = async (id) => {
        try {
            await axios.delete(`${base_url}/api/v1/course/${id}`);
            toast.success("Deleted Successfully!");
            update(id);
        } catch (error) {
            console.log(error);
            toast.error("Course not deleted!");
        }
    };



    return (
        <Card>
            <CardBody>
                <CardTitle tag="h5">{course.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                    videos : {course.videos}
                </CardSubtitle>
                <CardText>{course.content}</CardText>
                <Container className="text-center">
                    <Link color="warning me-1" className="btn btn-info"
                        to={`/update-course/${course._id}`}
                    >Update</Link>
                    <Button color="danger ms-1" onClick={() => {
                        deleteCourse(course._id);
                    }}>Delete</Button>
                </Container>
            </CardBody>
        </Card>
    );
};

export default Course;