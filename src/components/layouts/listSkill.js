import React from 'react'
import { Media } from 'reactstrap'
import { Link } from 'react-router-dom'

const ListSkill = ({skill}) => {
    return(
        <Media style={{marginBottom:20}}>
            <Media left to={'/skill/' + skill.item_id} key={skill.item_id}>
                <Media object src={skill.photos} alt={skill.title} width="150" height="150" />
            </Media>
            <Media body>
                <Link to={'/skill/' + skill.item_id} key={skill.item_id} >
                    <Media heading className="mediaHead">
                        {skill.title} - <small>textttt</small>
                    </Media>
                    {skill.desc} 
                </Link>
                
            </Media>
        </Media>
    )
}

export default ListSkill