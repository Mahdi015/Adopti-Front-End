import { Button } from "bootstrap";
import React,{useState} from "react";

import { Form,FloatingLabel,Col,Row,Card,CardFooter  } from "react-bootstrap";
import { createPet } from "../../functions/pet";

const Form4 = props => {
const [qst,setqst]=useState()
  if (props.currentStep !== 4) {
    return null;
  }

  return (
    <>
<Row className="g-2">
        <h4>Help Us Support Other Pets In Need</h4>
                        <p>To post your pet on Rehome, you must read and agree to the following: </p>
                        <br></br>              
                        <ol className='pl-4'>
                            <li>The adoption fee is set by Adopti. I agree not to charge any additional fees.</li>
                            <li>The adoption fee will be paid by the adopter on the Rehome website only. I agree not to collect the fee.</li>
                        </ol>
                        (All fees are donated by Rehome to support animal shelters and rescues.)
                    
                    <Form.Check onChange={props.handleChange} 
                        inline
                        label="Yes, I agree not to collect any fees."
                        value='Yes'
                        name="button"
                        type='radio'
                        id={`inline-1`}
                    />                      
 </Row>

 

    </>
  );
};

export default Form4;
