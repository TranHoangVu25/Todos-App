import React from "react";
import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";
import logo from '../../assets/images/vu.jpg'
import { connect } from "react-redux";
class Home extends React.Component{



    componentDidMount(){
    // setTimeout(()=>{
    //     this.props.history.push('/todo')
    // },3000)
}
//HOC : higher order components
    render(){
        console.log('<<check properties',this.props)
        return(
            <>
            <div>
                Hello World by Tran Vu!!
            </div>
            <div>
                <img src={logo}/>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        vu: state.users
    }
}
// export default withRouter(Home);
export default connect()(Color(Home));