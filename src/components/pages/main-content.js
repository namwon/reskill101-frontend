import React, {Component} from 'react'
import { Container, Row, Col, Media } from 'reactstrap'
import banner01 from '../../images/banner01@2x.png'
import banner0 from '../../images/banner@2x.png'
import ListSkill from '../layouts/listSkill'
import { connect } from 'react-redux'
import firebase from '../../config/firebase'
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import ListSkillBottom from '../layouts/listSkillBottom';

class MainContent extends Component {
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
    const itemsRef = firebase.database().ref('bookshelf/data').orderByChild('createedAt').limitToLast(3);
    
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
  render() {
    //const { skills } = this.props;    
    return (
      <Container>
        <Row className="row-full bg-graydark ">
          <Container>
            <Row>
              <Col md="6">
                <div className="mainTopHeader">
                  to learn new skills so that you can do a different job
                </div>
              </Col>
              <Col md="6">
                <img src={banner01} width="100%" />
              </Col>
            </Row>
          </Container>
        </Row>
        <Row>
          <Container>
            <Row>
              <Col md="6">
                <img className="imgIndex01" src={banner0} width="100%" />
              </Col>
              <Col md="6">
                <Container>
                  <h4 className="popSkills">POP SKILLS ..</h4>
                  { this.state.items.map((item) => {
                    return(
                      <ListSkill skill={item} key={item.item_id} />
                    )
                  })}
                </Container>
              </Col>
            </Row>
          </Container>
        </Row>
        <Row style={{backgroundColor:"#e5e5e5", paddingTop:25, paddingBottom:25}}>
        { this.state.items.map((item) => {
          return(
            <ListSkillBottom skill={item} key={item.item_id} />
          )
        })}
        </Row>
      </Container>
    );
  }
}

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
)(MainContent)