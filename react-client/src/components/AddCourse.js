import axios from "axios";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/nodeApi";


const AddCourse = () => {

    const form = useRef(null);

    useEffect(() => {
        document.title = "Add Course"
    }, []);

    const [course, setCourse] = useState({});

    // from handler function
    const handleForm = (event) => {
        console.log(course);
        postDataToServer(course);
        form.current.reset();
        //event.target.reset();
        event.preventDefault();
    };

    const postDataToServer = async (course) => {
        try {
            const postData = await axios.post(`${base_url}/api/v1/course/`, course);
            console.log(postData);
            toast.success("Data Insert Successfully");
        } catch (error) {
            console.log(error);
        }
    };

    // Creating function for post 

    return (
        <Fragment >
            <h1 className="text-center my-3">Add Course</h1>
            <Form ref={form} onSubmit={handleForm}>
                <FormGroup>
                    <Label for="courseTitle">Course Title</Label>
                    <Input id="courseTitle" name="courseTitle"
                        placeholder="Java Programming" type="text"
                        onChange={(e) => {
                            setCourse({ ...course, title: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <FormGroup>
                        <Label for="courseContent">Course Content</Label>
                        <Input id="courseContent" name="text" type="textarea"
                            onChange={(e) => {
                                setCourse({ ...course, content: e.target.value });
                            }}
                        />
                    </FormGroup>
                </FormGroup>

                <FormGroup>
                    <Label for="courseVideo">Course Videos</Label>
                    <Input id="courseVideo" name="courseTitle" placeholder="1"
                        type="text"
                        onChange={(e) => {
                            setCourse({ ...course, videos: e.target.value });
                        }}
                    />
                </FormGroup>

                <FormGroup check>
                    <Input type="checkbox" onChange={(e) => {
                        setCourse({ ...course, active: e.target.checked });
                    }} />
                    {' '}
                    <Label check>isActive</Label>
                </FormGroup>
                <Container className="text-center">
                    <Button color="primary" type="submit" className="me-1" outline >Add Course</Button>
                    <Button type="reset" className="ms-1">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );

};

export default AddCourse;