import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class Mycomponent extends React.Component {

    state = {
        arrJobs: [
            { id: "ABC", title: "Dev", salary: '500' },
            { id: "ABC1", title: "Data Management", salary: '5000' },
            { id: "ABC2", title: "Web designer", salary: '300' }
        ]
    }

    addNewJob = (job) => {
        console.log('check job from parent:', job)
        // let currenJobs = this.state.arrJobs;
        // currenJobs.push(job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            //arrJobs: currenJobs    
        })
    }
    deleteAJob = (job) => {
        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currenJobs
        })
    }
    handleSubmit = (event) => {

        //hàm prevent ngăn k cho refresh lại trang
        event.preventDefault()
        console.log('>>> check data input:', this.state)
    }
componentDidUpdate(preVProps,PreVState){
    console.log('run didupdate','pre state',PreVState,'current state:',this.state)
}
    componentDidMount(){
        console.log('call did mount')
    }
    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>

                <AddComponent
                    addNewJob={this.addNewJob}
                />


                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />


            </>



        )
    }


}
export default Mycomponent;