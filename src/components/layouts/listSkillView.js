import React from 'react'
import { Media } from 'reactstrap'

const ListSkillView = ({skill}) => {
    return(
        <Media style={{marginBottom:20}}>
            <Media left >                
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={skill.linkvideo} allowfullscreen></iframe>
                </div>
            </Media>
            <Media body>
                {skill.pagedesc} 
            </Media>
        </Media>
    )
}

export default ListSkillView