import React from 'react'
import { Container, Row, Col, Media } from 'reactstrap'
import { Link } from 'react-router-dom'

const ListSkillBottom = ({skill}) => {
    return(
        <Col md="4">
            <Link to={'/skill/' + skill.item_id} key={skill.item_id} >
                <img src={skill.photos} alt={skill.title} width="100%" height="200"/>
                <p>{skill.title}</p>
            </Link>            
        </Col>
    )
}

export default ListSkillBottom