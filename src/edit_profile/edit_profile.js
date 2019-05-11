import React from 'react';
import './edit_profile.css';
import {
     Col, Form, 
    FormGroup, Label, Input,
   
  } from 'reactstrap';
const Edit_Profile = props => {
    return (                 
    <React.Fragment>        
        <div className="edit-container">
        <h2 className="center-item"> Edit My Profile</h2>
        <br />
        <Form className="form">
            <FormGroup row>
                <Label for="exampleName" sm={2}>Full&nbsp;Name</Label>
                <Col sm={10}>
                    <Input type="text" name="name" id="exampleEmail" placeholder="Graham Bell" />
                </Col>
            </FormGroup>    
            <FormGroup row>
                <Label for="exampleEmail" sm={2}>Phone</Label>
                <Col sm={10}>
                    <Input type="number" name="number" id="noHp" placeholder="+46 764487890" />
                </Col>
            </FormGroup>      
            <FormGroup row>
                <Label for="exampleEmail" sm={2}>Email</Label>
                <Col sm={10}>
                    <Input type="email" name="email" id="exampleEmail" placeholder="graham@gmail.com" />
                </Col>
            </FormGroup> 
            <FormGroup row>
                <Label for="address" sm={2}>Address</Label>
                <Col sm={10}>
                    <Input type="text" name="address" id="exampleEmail" placeholder="Vartoftagatan Stree 47, Sweden" />
                </Col>
            </FormGroup> 
            <br></br>
            <div className="center-item">
            <button className="btn-style">Update My Profile</button>
            </div>
        </Form>
        </div>  
    </React.Fragment>   
  );
};

export default Edit_Profile;
