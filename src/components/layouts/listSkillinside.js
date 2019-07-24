import React from 'react'
import { Media } from 'reactstrap'
import { Link } from 'react-router-dom'
import {  Col, Card } from 'reactstrap';

const ListSkill = ({skill}) => {
    return(
        <Col md="3" >
          

        <Card className="mb-4">
            <Media left to={'/skill/' + skill.item_id} key={skill.item_id}>
                <Media object src={skill.photos} alt={skill.title} width="100%" className="card-img-top" />
            </Media>

            <Media className="card-body">
                <Link to={'/skill/' + skill.item_id} key={skill.item_id} >
                    <Media heading className="h4">
                        {skill.title} 
                    </Media>
                    <p><small> by </small><br/></p>
                    {skill.desc} 
                </Link>
                
            </Media>
        </Card>
        </Col>
    )
}

export default ListSkill

