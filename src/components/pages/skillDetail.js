import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import firebase from '../../config/firebase'
import { firebaseConnect } from 'react-redux-firebase'
import { Container } from 'reactstrap'
import ListSkillView from '../layouts/listSkillView'

class SkillDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
         items:[],
         page_id: '',
         pagedesc:'',
         photo:'',
        }        
     }
    componentDidMount(){
        const { id } = this.props;
        const itemsRef = firebase.database().ref('bookshelf/data/'+ id + '/page')
        //console.log(itemsRef);
             
        itemsRef.on('value',(snapshot) => {
           let items = snapshot.val();
           let newState = [];
           for(let item in items){
              newState.push({
                 page_id:item,
                 pagedesc:items[item].pagedesc,
                 photo:items[item].photo
              })
           }
           this.setState({
              items:newState
           })
        })
      }
    render(props){
        const { skill } = this.props;
        return(
            <Container>
                <h2>{skill.title}<br/><small>Date: {skill.createedAt}</small></h2>
                <Container>
                  { this.state.items.map((item) => {
                    return(
                      <ListSkillView skill={item} key={item.page_id} />
                    )
                  })}
                </Container>
                <p>
                    <h4>Deacription Skill:</h4>
                    {skill.desc}
                </p>
            </Container>
            
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const mainItems = state.firebase.data.bookshelf
    const skill = mainItems ? mainItems.data[id] : null
    //console.log(state);
  
   return{
     skill: skill,
     id: id
   }
  
    
  
  }
//export default SkillDetail
export default compose(
    connect(mapStateToProps),
    firebaseConnect((props) => {
      return [
        'bookshelf'
      ]
    })
    
  )(SkillDetail)