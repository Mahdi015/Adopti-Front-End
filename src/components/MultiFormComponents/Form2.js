import React from "react";
import { Form,FloatingLabel,Col,Row , InputGroup } from "react-bootstrap";

const Form2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <>
<Row className="g-2">
         <Col md>
  
         <label>Phone Number</label>
                  <InputGroup.Text>+
           
            <Form.Control onChange={props.handleChange} value={props.phonenumber} name='phonenumber' type="text" placeholder="+216 69 696 696" />
           
            </InputGroup.Text>
      
            
         </Col>       
 </Row>

 <Row className="g-2">
         <Col md>
            <FloatingLabel
                controlId="floatingInput"
                label="Zip Code"
                className="mb-3"
            >
                <Form.Control onChange={props.handleChange} value={props.zipcode} name='zipcode' type="text" placeholder="3021" />
            </FloatingLabel>
         </Col>       
 </Row>
 <Row className="g-2">
         <Col md>
            <FloatingLabel
                controlId="floatingInput"
                label="City"
                className="mb-3"
            >
                <Form.Control onChange={props.handleChange} value={props.city} name='city' type="text" placeholder="3021" />
            </FloatingLabel>
         </Col>       
 </Row>
 <Row className="g-2">
         <Col md>
            <FloatingLabel
                controlId="floatingInput"
                label="State"
                className="mb-3"
            >
                <Form.Control onChange={props.handleChange} value={props.state} name='state' type="text" placeholder="Sfax" />
            </FloatingLabel>
         </Col>       
 </Row>
    </>
  );
};

export default Form2;
