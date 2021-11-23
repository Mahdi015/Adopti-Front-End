import React from "react";
import { Form,FloatingLabel,Col,Row, Spinner,FormText  } from "react-bootstrap";
import {Avatar,Badge} from 'antd'
const Form3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <>
<Row className="g-2">
         <Col md>
            <FloatingLabel
                controlId="floatingInput"
                label="Pet Name"
                className="mb-3"
            >
                <Form.Control onChange={props.handleChange} value={props.petname} name='petname' type="text" placeholder="Souchi" />
            </FloatingLabel>
         </Col>       
 </Row>

 <Row className="g-2">
         <Col md>
            <FloatingLabel
                controlId="floatingInput"
                label="Pet Breed"
                className="mb-3"
            >
                <Form.Control onChange={props.handleChange} value={props.breed} name='breed' type="text" placeholder="breed" />
            </FloatingLabel>
         </Col>       
 </Row>
 <Row className="g-2">
         <Col md>
            <FloatingLabel
                controlId="floatingInput"
                label="Pet Gender"
                className="mb-3"
            >
                <Form.Control onChange={props.handleChange} value={props.petgender} name='petgender' type="text" placeholder="Male" />
            </FloatingLabel>
         </Col>       
 </Row>
 <Row className="g-2">
         <Col md>
            <FloatingLabel
                controlId="floatingInput"
                label="Pet Age"
                className="mb-3"
            >
                <Form.Control onChange={props.handleChange} value={props.petage} name='petage' type="text" placeholder="2 Years" />
            </FloatingLabel>
         </Col>       
 </Row>
 <Row className="g-2">
         <Col md>
            <FloatingLabel
                controlId="floatingInput"
                label="Pet Color"
                className="mb-3"
            >
                <Form.Control onChange={props.handleChange} value={props.petcolor} name='petcolor' type="text" placeholder="Brown" />
            </FloatingLabel>
         </Col>       
 </Row>
 <Row className="g-2">
         <Col md>
            <FloatingLabel
                controlId="floatingInput"
                label="Coat Length"
                className="mb-3"
            >
                <Form.Control onChange={props.handleChange} value={props.coatlength} name='coatlength' type="text" placeholder="..." />
            </FloatingLabel>
         </Col>       
 </Row>
 <Row className="g-2">
         <Col md>
            <Form.Group controlId="formFileMultiple" className="mb-3">
            <FormText><h4>Upload Pet Pictures</h4> <p >(Atleast 2 Pictures)</p></FormText>
            
                <hr/>
            {props.pics.map((image)=>(
            <Badge key={image.public_id} count='X' onClick={()=>props.handleremoveimage(image.public_id)} style={{cursor:'pointer'}}>
            <Avatar  src={image.url} size={100} className='ml-3'/>
            </Badge>
            
        ))}
        
        <hr/>
        {props.loading === "true" ? (<div><h4>Loading ...  {"  "}<Spinner animation="border" variant="primary" /></h4></div>):''}
        <br/>
                {/* <Form.Label>Upload Pet Pics</Form.Label>
                <Form.Control value={props.pic1} type="file" multiple accept='images/*' onChange={props.pic1} block /> */}
                <label className='btn btn-primary btn-raised mt-3'>Add Picture
        <center><input  name='pics' type='file' multiple accept='images/*' onChange={props.handleImagesUpload} hidden block/> </center>
        </label>
            </Form.Group>
         </Col>       
 </Row>
 <Row className="g-2">
         <Col md>
             <FormText><h4>Key Facts</h4></FormText>

            <div key={`inline`} className="mb-3" >
                Shots Up to Date {"  "}?    {"       "}
            <Form.Check onChange={props.handleChange}
                inline
                label="Yes"
                value='Yes'
                name="qs6"
                type='radio'
                id={`inline-1`}
                checked={props.qs6 === 'Yes'}
            />
            <Form.Check  onChange={props.handleChange}
                inline
                label="No"
                value="No"
                name="qs6"
                type='radio'
                id={`inline-2`}
                checked={props.qs6 === 'No'}
            />

            </div>
        
         </Col>       
 </Row>
 <Row>
 <Col md>
            <div key={`inline`} className="mb-3" >
                 Microchipped {"  "}?    {"       "}
            <Form.Check  onChange={props.handleChange}
                inline
                label="Yes"
                value='Yes'
                name="qs7"
                type='radio'
                id={`inline-1`}
                checked={props.qs7 === 'Yes'}
            />
            <Form.Check onChange={props.handleChange}
                inline
                label="No"
                value="No"
                name="qs7"
                type='radio'
                id={`inline-2`}
                checked={props.qs7 === 'No'}
            />

            </div>
        
         </Col>  
 </Row>
 <Row>
 <Col md>
            <div key={`inline`} className="mb-3" >
                House-trained {"  "}?    {"       "}
            <Form.Check  onChange={props.handleChange}
                inline
                label="Yes"
                value='Yes'
                name="qs8"
                type='radio'
                id={`inline-1`}
                checked={props.qs8 === 'Yes'}
                
            />
            <Form.Check onChange={props.handleChange}
                inline
                label="No"
                value="No"
                name="qs8"
                type='radio'
                id={`inline-2`}
                checked={props.qs8 === 'No'}
            />

            </div>
        
         </Col>  
 </Row>

 <Row>
     <Col md>
        <FloatingLabel controlId="floatingTextarea2" label="Pet’s Story">
        <Form.Control
        value={props.petstory}
        onChange={props.handleChange}
        as="textarea"
        placeholder="Pet’s Story"
        style={{ height: '100px' }}
        name='petstory'
        />
    </FloatingLabel>
     
     </Col>
 </Row>
 <Row>
     <Col md>
        <FloatingLabel controlId="floatingTextarea2" label="Pet Diet">
        <Form.Control
        value={props.petdiet}
        onChange={props.handleChange}
        as="textarea"
        placeholder="Pet Diet"
        style={{ height: '100px' }}
        name='petdiet'
        />
    </FloatingLabel>
     
     </Col>
 </Row>
    </>
  );
};

export default Form3;
