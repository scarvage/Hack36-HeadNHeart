import React from "react";
import "../styles/RegisterStyle.css";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {



    // form handler
    const onfinishHandler =(values)=>{
        console.log(values)
    }
    return (
        <>
        
<div className="form-container">
    <Form layout ="vertical" onFinish={onfinishHandler} className="register-form" >
        <h3>registration Form</h3>
        <Form.Item label="Name" name="name">
            <input type="text" required/>
        </Form.Item>
        <Form.Item label="Email" name="email">
            <input type="Email" required/>
        </Form.Item>
        <Form.Item label="Password" name="password">
            <input type="password" required/>
        </Form.Item>
        <Link to="/login" className="m-2">
            Already user login here
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>

    </Form>


</div>


        </>
    );
};


export default Register;