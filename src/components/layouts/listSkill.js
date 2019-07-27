import React from 'react'
import { Media } from 'reactstrap'
import { Link } from 'react-router-dom'


const ListSkill = ({skill}) => {
    return(
     
          <div>

<div className="d-flex" style={{marginBottom:20}}>
            <Media  left to={'/skill/' + skill.item_id} key={skill.item_id}>
                <Media object src={skill.photos} alt={skill.title} className="img-thumbnail-rs " />
            </Media>
            <Media body>
                <Link to={'/skill/' + skill.item_id} key={skill.item_id} >
                    <Media heading className="h5">
                        {skill.title} 
                    </Media>
                    <p>{skill.desc}</p>
                </Link>
                
            </Media>
        </div>
            </div>
    )
}

export default ListSkill

