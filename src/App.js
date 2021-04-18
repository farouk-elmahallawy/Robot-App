import React  from 'react'
import RoboCard from './Components/RoboCard/RoboCard'
import {connect} from 'react-redux'
import {HandelChange} from './Components/actions'
import './App.css'

  
function App(props) {
  return (
    <div className="App">
          <h1> HELLO FRIENDS</h1>
          <input type="search" placeholder="Search For Robots By Name ..." onChange={(e) => props.HandelChange(e)}/>  
          <div className='cardList' >
            <RoboCard />
          </div>
    </div>
  );
}
const mapStateToProps =(state) =>{
  return{
    search:state.searchChange.search
  }
}
const  mapDispatchToProps = (dispatch) =>{
    return{
      HandelChange: (e)=> dispatch(HandelChange(e)) 
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(App);
