import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import firebase from '../../config/firebase'
import { firebaseConnect } from 'react-redux-firebase'
import { Container,Row } from 'reactstrap'
import ListSkillView from '../layouts/listSkillView'
import Bannerinsidepage from '../layouts/bannerinsidepage'

class SkillDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
         items:[],
         page_id: '',
         pagedesc:'',
         photo:'',
         linkvideo:'',
         titlevideo:''
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
                 photo:items[item].photo,
                 linkvideo:items[item].linkvideo,
                 titlevideo:items[item].titlevideo
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
            <div>
              <Bannerinsidepage />
              <div className="text-white bg-blk block pt-5">
              <Container>
                <h2>{skill.title}<br/></h2><p>Date: {skill.createedAt}</p>
                  <Row>
                  { this.state.items.map((item) => {
                    return(
                      <ListSkillView skill={item} key={item.page_id} />
                    )
                  })}
                  </Row>               
               <div>
               
                    <h4>Deacription Skill:</h4>
                    <div className="pb-4">
                    {skill.desc}
                    </div>
                    <div className="pb-4">
                    <h5>Resources</h5>
                    Presentation Slides (PDF)
                   
                </div>
                </div>
                </Container>
            </div>
            </div>
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