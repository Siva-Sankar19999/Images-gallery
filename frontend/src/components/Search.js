import React from "react";
import {Component} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap'


class Search extends Component{
    state={val:''}

    onChanging=(e)=>{
        this.setState(({val:e.target.value}));
    }

    onSubmitting=(e)=>{
        e.preventDefault()  
        const {val}=this.state
        console.log(val)
        this.setState({val:''})
    }

    render(){

        const {val}=this.state
           
        return (
            <Container className="mt-5">
              <Row className="justify-content-center">
                <Col xs={12} lg={8}>
                  <Form onSubmit={this.onSubmitting}>
                    <Row>
                      <Col xs={9}>
                        <Form.Control
                         type="text"
                         value={val}
                         onChange={this.onChanging}
                         placeholder="Search for Images eg: Cat" />
                      </Col>
                      <Col>
                        <Button type="submit" variant="outline-primary">Search</Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Container>
          );                
    }
}
export default Search;





