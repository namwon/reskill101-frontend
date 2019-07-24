import React, { Component } from 'react';
import { Container, Row, Col  } from 'reactstrap';



class bannerinsidepage extends Component{
    render(){
        return(
            <div className="bggray banner-inside">
                <Container>
                    <Row >
           
                        <Col md="6" className="pt-5 text-wrap align-middle">
                       <h1 className="display-4 headline load-hidden "> 
                       What would you like to learn today?</h1>
                       I would like to learn about  Leadership Development Program  focused on Leading Yourself.
                       </Col>
                   
                     
                    </Row>
                    </Container>
           </div>
            )
        }
    }
export default bannerinsidepage