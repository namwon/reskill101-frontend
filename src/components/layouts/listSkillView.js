import React from 'react'
import { Media } from 'reactstrap'

const ListSkillView = ({skill}) => {
    return(
        <Media style={{marginBottom:20}}>
            <Media left href="#">                
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={skill.photo} allowfullscreen></iframe>
                </div>
            </Media>
            <Media body>
                {skill.pagedesc} 
            </Media>
        </Media>
    )
}

export default ListSkillView