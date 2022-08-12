import { useEffect, useState } from "react";
import base_url from "../api/nodeApi";
import Course from "./Course";

import axios from 'axios';
import { toast } from "react-toastify";


const AllCourse = () => {


    // Similar to componentDidMount and componentDidUpdate:
    // If u add [] letter in arrow function then its work only componentDidMount
    useEffect(() => {

        document.title = "All Course";
        getAllCourseFromServer();

    }, []);

    // Get all course from server
    const getAllCourseFromServer = async () => {

        try {
            const response = await axios.get(`${base_url}/api/v1/courses/`);
            console.log(response.data);

            // toast.success("Success!");
            setCourses(response.data)
        } catch (error) {
            console.error(error);
            toast.error("Somthing Went Wrong");
        }

    };

    // initial declare
    const [courses, setCourses] = useState([]);

    // after deleting update the course
    const updateCourse = (_id) => {
        setCourses(courses.filter((course) => course._id !== _id))

    }

    return (
        <div>
            <h1>All Course</h1>
            {
                courses.length > 0 ?
                    courses.map((course) => <Course key={course._id} course={course} update={updateCourse} />)
                    : "No Course"
            }
        </div>
    );
};

export default AllCourse;