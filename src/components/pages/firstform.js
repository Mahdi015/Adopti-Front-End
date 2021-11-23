import React from 'react'
import { Form,Button,FloatingLabel,Col,Row } from 'react-bootstrap'
export const Firstform = ({page,setpage}) => {
    function goNextPage (){
        setpage((page)=>page+1)
    }
    return (
        <div className="container p-5">
        <div className="row">
             <div className="col-md-6 offset-md-3">
                 <Form>
                    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                         <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                        <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <Form.Text className="text-muted">
                         We'll never share your email with anyone else.
                         </Form.Text>
                     </Form.Group> */}

                <Row className="g-2">
                        <Col md>
                            <h4>Are you rehoming a dog, cat or other pet?</h4>
                            <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select One</option>
                                <option value="1">Cat</option>
                                <option value="2">Dog</option>
                                <option value="3">Bonded pair</option>
                                <option value="4">Other</option>
                            </Form.Select>
                            </FloatingLabel>
                        </Col>       
                </Row>
                <Row className="g-2 pt-4">
                        <Col md>
                            <h4>Is your pet spayed or neutered?</h4>
                            <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select Onemenu</option>
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                            </Form.Select>
                            </FloatingLabel>
                        </Col>
      
                        
                </Row>
                <Row className="g-2 pt-4">
                        <Col md>
                            <h4>Why do you need to rehome your pet??</h4>
                            <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select Onemenu</option>
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                            </Form.Select>
                            </FloatingLabel>
                        </Col>
      
                        
                </Row>
                <Row className="g-2 pt-4">
                        <Col md>
                            <h4>How long are you able to keep your pet while we help you find a suitable new home??</h4>
                            <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select Onemenu</option>
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                            </Form.Select>
                            </FloatingLabel>
                        </Col>
      
                        
                </Row>
                <Button onClick={goNextPage} variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                        </div>
                        </div>
                        </div>
    )
}

export default Firstform;