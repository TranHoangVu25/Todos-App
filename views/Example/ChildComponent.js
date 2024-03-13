import React from 'react';
import './Demo.scss';

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnclcikDelete=(job)=>{
       console.log('<<<<handleOnclickDelete:',job)
       this.props.deleteAJob(job)
    }
    render() {

       
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let a=''
let check = showJobs === true ?'showJobs = true':'showJobs = false';
console.log('>>check conditional: ',check)
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button className='btn-show'
                        onClick={() => this.handleShowHide()}>Show</button>
                        </div>

:                 <>   <div className="job-list">
                        {
                            a = arrJobs.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {item.title}-{item.salary}
                                        <> </><span onClick={()=>this.handleOnclcikDelete(item)}>X</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div><button onClick={() => this.handleShowHide()}>Hide</button></div>

                </>}

            </>
        )



    }


}


// function component

// const ChildComponent =(props)=>{
//     let {arrJobs}=props;

// let a='';
// return(
//     <>
//     <div className="job-list">
//         {
//       a=  arrJobs.map((item,index) =>{
//         if(item.salary>=500){
//             return(
//                 <div key={item.id}>
//                     {item.title}-{item.salary}$
//                 </div>
//             )
//         }
//         })
//     }
//     </div>
//     </>)
//     }

export default ChildComponent;