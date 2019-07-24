import React, { Component } from 'react';
import {  Row, Col } from 'reactstrap';



class ctaAd extends Component{
    render(){
        return(
            <div>
                
                    <Row className="bggray mt-3">
                       
                        
                        <Col md="6" className="enjoy"></Col>   
                         <Col md="6" className="px-2 p-5 text-wrap align-middle">
                       <h1 className="display-3 text-uppercase font-weight-bold text-secondary "> 
                       What would you like to learn today?</h1>
                       </Col>
                   
                     
                    </Row>
                
           </div>
            )
        }
    }
export default ctaAd