import React, {Component} from 'react'
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import firebase from '../../config/firebase'
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import ListSkillinside from '../layouts/listSkillinside'
import Bannerinsidepage from '../layouts/bannerinsidepage'
import { Link } from 'react-router-dom'



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
         per_page: 8,
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
/**
 * <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
 */
   createNavi(){
      let navi = []
      let buttons = []
      let count = this.state.counterRow
      let perPage = this.state.per_page
      
      for (let i=1; i <= Math.ceil(count/perPage); i++) {
         buttons.push(
            <li clasclassNames="page-item">
               <Link className="page-link" to={"/skills/"+i} onClick={() => this.handleChangePage(i)}>{i}</Link>
            </li>
         )
      }
      navi.push(<ul className="pagination">{buttons}</ul>)
      return navi
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
                     <nav>
                        {this.createNavi()}
                     </nav>
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