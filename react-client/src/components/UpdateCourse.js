import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/nodeApi";


const UpdateCourse = () => {

    const params = useParams();
    const navigate = useNavigate();


    //const { data } = this.props.location
    // console.log(props);

    //
    //let retrieve_var = props.location.state
    //console.log(retrieve_var);


    //const form = useRef(null);



    useEffect(() => {
        document.title = "Update Course";
        getCourseById();

    }, []);


    // Get all course from server
    const getCourseById = async () => {

        try {
            const response = await axios.get(`${base_url}/api/v1/course/${params.id}`);
            console.log(response.data);
            //toast.success("Success!");
            setCourse(response.data);


        } catch (error) {
            console.error(error);
            toast.error("Somthing Went Wrong");
        }

    };


    const [course, setCourse] = useState({});
    const [c, setC] = useState({});





    // from handler function
    const handleForm = (event) => {
        console.log("c", c);
        updateDataToServer(c);

        event.preventDefault();
    };

    // Creating function for post 
    const updateDataToServer = async (c) => {
        console.log("Update C: ", c);

        try {
            const updateData = await axios.put(`${base_url}/api/v1/course/${params.id}`, c);
            console.log(updateData.data);
            toast.success(`${course.title} Updated Successfully!`);
            navigate("/view-courses", {
                replace: true
            })
        } catch (error) {
            console.log(error);
        }
    };



    return (
        <Fragment >
            <h1 className="text-center my-3">Update Course</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="courseTitle">Course Title</Label>
                    <Input id="courseTitle" name="courseTitle"
                        placeholder="Java Programming" type="text"
                        defaultValue={course.title}
                        onChange={(e) => {
                            setC({ ...c, title: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <FormGroup>
                        <Label for="courseContent">Course Content</Label>
                        <Input id="courseContent" name="text" type="textarea"
                            defaultValue={course.content}
                            onChange={(e) => {
                                setC({ ...c, content: e.target.value });
                            }}
                        />
                    </FormGroup>
                </FormGroup>

                <FormGroup>
                    <Label for="courseVideo">Course Videos</Label>
                    <Input id="courseVideo" name="courseTitle" placeholder="1"
                        defaultValue={course.videos}
                        type="text"
                        onChange={(e) => {
                            setC({ ...c, videos: e.target.value });
                        }}
                    />
                </FormGroup>

                <FormGroup check>
                    <Input type="checkbox"
                        defaultValue={course.active}
                        onChange={(e) => {
                            setC({ ...c, active: e.target.checked });
                        }} />
                    {' '}
                    <Label check>isActive</Label>
                </FormGroup>
                <Container className="text-center">
                    <Button color="primary" type="submit" className="me-1" outline >Update Course</Button>
                </Container>
            </Form>
        </Fragment>
    );

};

export default UpdateCourse;