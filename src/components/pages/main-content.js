import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import banner0 from '../../images/banner@2x.png';
import ListSkill from '../layouts/listSkill';
import { connect } from 'react-redux';
import firebase from '../../config/firebase';
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import ListSkillBottom from '../layouts/listSkillBottom';
import CtaAd from '../layouts/ctaAd';

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
      <div>
        <Row className="row-full bg-graydark banner-hero">
          <Container>
            <Row>
              <Col md="8" >
                <div className="mainTopHeader">
                  to learn new skills so that you can do a different job
                </div>
              </Col>
        
            </Row>
          </Container>
        </Row>
        <div className="bggray">
        <Row>
          <Container>
            <Row>
              <Col md="6">
                <img className="imgIndex01" src={banner0} width="100%" alt="Reskill"/>
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
        </div>
        <div>
        <Container>
        <Row className="mt-5">
        
        { this.state.items.map((item) => {
          return(
            <ListSkillBottom skill={item} key={item.item_id} />
          )
        })}
        <Col md="12" className="d-flex justify-content-end">
      SEE ALL COLLECTIONS
      </Col>
        </Row>
        </Container>
        </div>
        <CtaAd />
      </div>
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