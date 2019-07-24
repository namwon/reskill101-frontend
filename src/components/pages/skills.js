import React, {Component} from 'react'
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import firebase from '../../config/firebase'
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import ListSkillinside from '../layouts/listSkillinside'
import Bannerinsidepage from '../layouts/bannerinsidepage'



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
          <div>
          <Bannerinsidepage />
        <Container>
          
            <Row>
   
               <Col md="12">
            <h4 className="popSkills">SKILLS to Learn..</h4>
            </Col>
               
                    { this.state.items.map((item) => {
                        return(
                        <ListSkillinside skill={item} key={item.item_id} />
                        )
                    })}

                    
             
            </Row>
        </Container>
        </div>
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