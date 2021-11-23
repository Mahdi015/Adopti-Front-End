import React from "react";
import { Form,FloatingLabel,Col,Row  } from "react-bootstrap";

const Form1 = props => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <>
<Row className="g-2">
         <Col md>
             <h4>Are you rehoming a dog, cat or other pet?</h4>
         
             <Form.Select onChange={props.handleChange} value={props.qs1} name='qs1' id='qs1' aria-label="Floating label select example">
                 <option>Select One</option>
                 <option value="Cat">Cat</option>
                 <option value="Dog">Dog</option>
                 <option value="Bonded pair">Bonded pair</option>
                 <option value="Other">Other</option>
             </Form.Select>
          


            
   
         </Col>       
 </Row>

    <Row className="g-2 pt-4">
            <Col md>
                <h4>Is your pet spayed or neutered?</h4>
               
                <Form.Select  onChange={props.handleChange} value={props.qs2} name='qs2' id='qs2' aria-label="Floating label select example">
                    <option>Select One</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </Form.Select>
                
            </Col>                
    </Row>
    <Row className="g-2 pt-4">
                        <Col md>
                            <h4>Why do you need to rehome your pet??</h4>
                            {/* <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
                            <Form.Select  onChange={props.handleChange} value={props.qs3} name='qs3' id='qs3' aria-label="Floating label select example">
                                <option>Select Onemenu</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </Form.Select>
                            </FloatingLabel> */}

                    <Form.Select  onChange={props.handleChange} value={props.qs3} name='qs3' id='qs3' aria-label="Floating label select example">
                            <option>Select One</option>
                            <option value="Behavioral Issues">Behavioral Issues</option>
                            <option value="Busy schedule">Busy Schedule</option>
                            <option value="Does not get along with another pet">Does not get along with another pet</option>
                            <option value="human health issues (e,g, allergies,sickness)">human health issues (e,g, allergies,sickness)</option>
                    </Form.Select>
                   
                        </Col>                     
    </Row>
                <Row className="g-2 pt-4">
                        <Col md>
                            <h4>How long are you able to keep your pet while we help you find a suitable new home??</h4>
                          
                            <Form.Select  onChange={props.handleChange} value={props.qs4} name='qs4' id='qs4' aria-label="Floating label select example">
                                <option>Select One</option>
                                <option value="Less Then 1 Week">Less Then 1 Week</option>
                                <option value="1 Week">1 Week</option>
                                <option value="2 Week">2 Week</option>
                                <option value="3 Week">3 Week</option>
                                <option value="1 Month">1 Month</option>
                                <option value="2 Month">2 Month</option>
                                <option value="Other">Other</option>
                            </Form.Select>
                            
                        </Col>
      
                        
                </Row>
    </>
  );
};

export default Form1;
