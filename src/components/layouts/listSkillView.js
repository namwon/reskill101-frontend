import React from 'react'
import { Media } from 'reactstrap'

const ListSkillView = ({skill}) => {
    return(
        <Media style={{marginBottom:20}}>
            <Media left href="#">
                <Media object src={skill.photo} alt={skill.pagedesc} width="300"/>
            </Media>
            <Media body>
                {skill.pagedesc} 
            </Media>
        </Media>
    )
}

export default ListSkillView