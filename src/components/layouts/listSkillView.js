import React from 'react'
//import { Link } from 'react-router-dom'
import { Card, CardImg, CardText, CardTitle, Col, Button  } from 'reactstrap'

const ListSkillView = ({skill}) => {
    const MAX_LENGTH = 50;
    return(
        <Col sm="6">
            <Card body>
                <CardTitle>{skill.titlevideo}</CardTitle>
                <CardImg width="100%" src={skill.photo} alt={skill.titlevideo}/>
                <CardText style={{color: "#000"}}>
                    {skill.pagedesc.length > MAX_LENGTH ?
                        (
                            <div>
                            {`${skill.pagedesc.substring(0, MAX_LENGTH)}...`}
                            </div>
                        ) :
                        <p>{skill.pagedesc}</p>
                    }
                </CardText>
                <Button>Go somewhere</Button>
            </Card>
        </Col>
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