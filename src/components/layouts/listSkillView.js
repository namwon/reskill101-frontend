import React from 'react'
import { Media } from 'reactstrap'

const ListSkillView = ({skill}) => {
    return(
        <Media style={{marginBottom:20}}>
            <Media left >                
                <Media object src={skill.photo} alt={skill.titlevideo} className="img-thumbnail-rs " />
            </Media>
            <Media body>
                {skill.pagedesc} 
            </Media>
        </Media>
    )
}

export default ListSkillView