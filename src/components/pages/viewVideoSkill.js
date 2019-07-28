import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import firebase from '../../config/firebase'
import { firebaseConnect } from 'react-redux-firebase'
import { Container,Row } from 'reactstrap'
import ListSkillView from '../layouts/listSkillView'
import Bannerinsidepage from '../layouts/bannerinsidepage'

class ViewVideo extends Component{
    constructor(props){
        super(props);
        this.state = {
          items:[],
          teacher: '',
          page_id: '',
          pagedesc:'',
          linkvideo:'',
          titlevideo:'',
          duration:''
        }   
     }
    componentDidMount(){
      const { id, vid } = this.props;
      const itemsRef = firebase.database().ref('bookshelf/data/'+ id + '/page/'+ vid)
      //console.log(id);
      //console.log(vid);
      
      itemsRef.on('value',(snapshot) => {
        let items = snapshot.val();
        //console.log(items);
        
        this.setState({
          page_id:items,
          pagedesc:items.pagedesc,
          linkvideo:"https://www.youtube.com/embed/" + items.linkvideo + "?rel=0",
          titlevideo:items.titlevideo,
          teacher: items.teacher,
          duration:items.duration
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
                <h2>{this.state.titlevideo}<br/></h2>
                <p>by: {this.state.teacher}</p>
                <div className="embed-responsive embed-responsive-16by9 mt-5 mb-5">
                  <iframe className="embed-responsive-item" src={this.state.linkvideo} allowfullscreen></iframe>
                </div>
                <div>
                  <h4>Deacription Skill:</h4>
                  <p>Duration: {this.state.duration}</p>
                  <div className="pb-4 text-break">
                    {this.state.pagedesc}
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
    const vid = ownProps.match.params.vid
    const mainItems = state.firebase.data.bookshelf
    const skill = mainItems ? mainItems.data[id] : null
    //console.log(state);
  
   return{
     skill: skill,
     id: id,
     vid: vid
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
    
  )(ViewVideo)