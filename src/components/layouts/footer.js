import React, { Component } from 'react';
import Logo from '../../images/reskill_101-sm.png'

class footer extends Component{
    render(){
        return(
            <div className="footerbg d-flex justify-content-center">
              <div className="flex-column ">
                    <div className="text-center">  <img className="footerlogo" src={Logo} width="100%" alt="Reskill101" /></div>
                    <div className="text-center"> Terms of Use    Privacy Policy    Help</div>
                    <div className="text-center">  © Copyright 2019 reskill101  - All rights reserved.</div>
                    
              </div>
          </div>
            )
        }
    }
export default footer