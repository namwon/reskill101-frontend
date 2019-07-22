import React, {Component} from 'react'
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import firebase from '../../config/firebase'
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import ListSkill from '../layouts/listSkill'

class Skills extends Component{
    constructor(props){
        super(props);
        this.state = {
           items:[],
           item_id:'',
           title:'',
           desc:'',
           photos:null,
           createedAt:''
        }
     }
      componentDidMount(){
        const itemsRef = firebase.database().ref('bookshelf/data').orderByChild('createedAt');
        
        itemsRef.on('value',(snapshot) => {
           let items = snapshot.val();
           let newState = [];
           for(let item in items){
              newState.push({
                 item_id:item,
                 title:items[item].title,
                 desc:items[item].desc,
                 photos:items[item].photos,
                 createedAt: items[item].createedAt
              })
           }
           this.setState({
              items:newState
           })
    
        })
    
      }
    render(){
        return(
        <Container>
            <Row>
                <Col md="12">
                    <Container>
                    <h4 className="popSkills">SKILLS to Learn..</h4>
                    { this.state.items.map((item) => {
                        return(
                        <ListSkill skill={item} key={item.item_id} />
                        )
                    })}
                    </Container>
                </Col>
            </Row>
        </Container>
        )
    }
}
//export default Skills

const mapStateToProps = (state) => {
    //console.log(state)
    return{
    //skills: state.skill.skills
    // .project in rootRuducer .projects in projectRuducer
    //skills: state.firebase.data.bookshelf
    
    }
  }
  //export default connect(mapStateToProps)(MainContent)
  
  export default compose(
    connect(mapStateToProps),
    firebaseConnect((props)=>{
      return[
        'bookshelf'
      ]
    })
  )(Skills)