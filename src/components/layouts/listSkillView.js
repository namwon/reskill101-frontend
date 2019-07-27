import React from 'react'
import { Link } from 'react-router-dom'
import { CardBody, CardImg, CardText, CardHeader, Col  } from 'reactstrap'

const ListSkillView = ({skill,id}) => {
    const MAX_LENGTH = 100;
    return(
        <Col sm="4">
            <CardBody>
                <CardHeader style={{minHeight: "70px" }}>{skill.titlevideo}</CardHeader>
                <CardImg height="250" width="auto" src={skill.photo} alt={skill.titlevideo}/>
                <CardText style={{minHeight: "100px" }}>
                    {skill.pagedesc.length > MAX_LENGTH ?
                        (
                            <div>
                            {`${skill.pagedesc.substring(0, MAX_LENGTH)}...`}
                            </div>
                        ) :
                        <p>{skill.pagedesc}</p>
                    }
                </CardText>
            <Link to={"/videos/"+ id + "/" + skill.page_id} className="btn btn-primary">Start!</Link>
            </CardBody>
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