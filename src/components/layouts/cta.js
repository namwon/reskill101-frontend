import React, { Component } from 'react';
import {  Row, Col } from 'reactstrap';
import fb from '../../images/icons8-facebook_new.png';
import tw from '../../images/icons8-twitter.png';
import pin from '../../images/icons8-pinterest.png'


class cta extends Component{
    render(){
        return(
            <div>
                
                    <Row >
                       
                           
            
                   
                        <Col md="4" className="p-5 fbg-white">  
                        <div className="h6">Goals are important</div>
for staying motivated. When you’re done you’ll have an industry-acknowledged certificate of completion that you can highlight on your reskill 101 profile.</Col>
                        <Col md="4" className="p-5 fbg-red text-center">   What would you like to learn today? Find .!</Col>
                        <Col md="4" className="p-5 fbg-yellow text-center"> 
                          <img className="p-1" src={fb} alt="facebook"/>  
                          <img className="p-1" src={pin} alt="pinterest"/>  
                          <img className="p-1" src={tw} alt="twitter"/>  
                           </Col>
                    </Row>
                
           </div>
            )
        }
    }
export default cta