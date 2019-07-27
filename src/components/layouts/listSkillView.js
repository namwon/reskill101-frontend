import React from 'react'
//import { Link } from 'react-router-dom'
import { Card, CardTitle, CardText } from 'reactstrap'

const ListSkillView = ({skill}) => {
    const MAX_LENGTH = 150;
    return(
        <Card sm="3">
            <CardBody>
                <CardTitle>{skill.titlevideo}</CardTitle>
            </CardBody>
            <img width="100%" src={skill.photo} alt={skill.titlevideo} />
            <CardBody>
                <CardText>
                {skill.pagedesc.length > MAX_LENGTH ?
                    (
                        <div>
                        {`${skill.pagedesc.substring(0, MAX_LENGTH)}...`}
                        </div>
                    ) :
                    <p>{skill.pagedesc}</p>
                }
                </CardText>
            </CardBody>
        </Card>
    )
}

export default ListSkillView
/*
<Media style={{marginBottom:20}}>
            <Media left >                
                <Media object src={skill.photo} alt={skill.titlevideo} className="img-thumbnail-rs " />
            </Media>
            <Media body>
                {skill.pagedesc} 
            </Media>
        </Media>


*/