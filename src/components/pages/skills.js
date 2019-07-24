import React, {Component} from 'react'
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import firebase from '../../config/firebase'
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import ListSkillinside from '../layouts/listSkillinside'
import Bannerinsidepage from '../layouts/bannerinsidepage'
//import { Link } from 'react-router-dom'



class Skills extends Component{
   constructor(props){
      super(props);
      this.state = {
         items:[],
         item_id:'',
         title:'',
         desc:'',
         photos:null,
         createedAt:'',
         cur_page: 1, 
         per_page: 4,
         counterRow: 0
      }
   }
   handleChangePage(cur_page){
      this.setState({
         cur_page
      })
   }
   componentDidMount(){
      const itemsRef = firebase.database().ref('bookshelf/data').orderByChild('createedAt');
      itemsRef.on('value',(snapshot) => {
         let items = snapshot.val();
         let newState = [];
         let i = 0;
         for(let item in items){
            i++;
            newState.push({
               item_id:item,
               title:items[item].title,
               desc:items[item].desc,
               photos:items[item].photos,
               createedAt: items[item].createedAt
            })
         }
         this.setState({
            items:newState,
            counterRow: i
         })
      })
   }

   createNavi(){
      let buttons = []
      let count = this.state.counterRow
      let perPage = this.state.per_page
      
      for (let i=1; i <= Math.ceil(count/perPage); i++) {
         buttons.push(
            <button onClick={() => this.handleChangePage(i)}>{i}</button>
         )
      }
      return buttons
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
                  { this.state.items.map((item, index) => {
                     if ((index >= ((this.state.cur_page-1)*this.state.per_page) ) && (index < (this.state.cur_page*this.state.per_page))) {
                        return(
                           <ListSkillinside skill={item} key={item.item_id} />
                        )  
                     }
                  })}
                  <Col md="12">
                     {this.createNavi()}
                  </Col>
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