import React from 'react'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const ListSkillBottom = ({skill}) => {
    return(
        
        <Col md="3" >
            <div className="thumb-post">
            <Link to={'/skill/' + skill.item_id} key={skill.item_id} >
                <img  src={skill.photos} alt={skill.title} />
                <p>{skill.title}</p>
            </Link>    
            </div>       
        </Col>
     
    )
}

export default ListSkillBottom