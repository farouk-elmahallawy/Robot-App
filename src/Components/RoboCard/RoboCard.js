import React  from 'react'
import {connect} from 'react-redux'
import { requestRoboInfo } from '../actions'
import './RoboCard.css'

class RoboCard extends React.Component{
    componentDidMount(){
        this.props.requestRoboInfo()
    }
    render(){
    const robots = this.props.roboInfo
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.props.search.toLowerCase())
    })
    return (
        filteredRobots.map(robot => {
            return(
                <div className="card" key={robot.id}>
                    <img src={this.props.img+robot.id} alt='robotImage'/>
                    <h4> {robot.name}</h4>
                    <p> {robot.email}</p>
                </div>
                   )
                             })
        
            )
            }
}
 const mapStateToProps = (state) => {
     return{
         roboInfo:state.reducer.roboInfo,
         img:state.reducer.img,
         search:state.searchChange.search
         }
}
 const mapDispatchToProps = (dispatch) => {
     return{
     requestRoboInfo: () => dispatch(requestRoboInfo())
     }
}

export default connect(mapStateToProps,mapDispatchToProps)(RoboCard)
