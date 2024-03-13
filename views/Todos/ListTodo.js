import React from 'react';
import './ListTodo.scss'
import AddTodo from './AddTodo';
import {toast } from 'react-toastify';


class ListTodo extends React.Component{

    //state là 1 đối tượng js 
    //listTodos là 1 mảng đối tượng
state = {
    listTodos:[
        {id:'todo1',title:'Doing homework'},
        {id:'todo2',title:'Hit the book'},
        {id:'todo3',title:'Writing new word'},
    ],
    editTodo:{    }
}

addNewTodo=(todo)=>{
    // setState khi đc gọi thì sẽ đè trạng thái hiện tại của thành phần bằng trạng thái mới đc cung cấp
    this.setState({
        //let currentListTodo = this.state.listTodo;
       // currentListTodo.push(todo);
        
        listTodos:[...this.state.listTodos,todo]
        //listTodo:currentListTodo
    })
    toast.success("Wow so esay!")

}

handleDeleteTodo = (todo)=>{
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter(item =>item.id!==todo.id)
this.setState({
    listTodos:currentTodos
})
toast.success("Delete success!")
}
handleEditTodo=(todo)=>{
    let {editTodo,listTodos} = this.state;
    let isEmptyObj = Object.keys(editTodo).length===0;
//save
    if(isEmptyObj ===false && editTodo.id === todo.id){
      
        let ListTodosCopy = [...listTodos];
      
     let    objIndex = ListTodosCopy.findIndex(item => item.id == todo.id);

//Update object's name property.
ListTodosCopy[objIndex].title = editTodo.title;
this.setState({
    listTodos:ListTodosCopy,
    editTodo:{}
})
toast.success('Update todo success!')
return;
}

//edit
this.setState({
    editTodo:todo
})


}
handleOnchangeEditTodo=(event)=>{
    let editTodoCopy ={...this.state.editTodo};
    editTodoCopy.title = event.target.value;
    this.setState({
        editTodo:editTodoCopy
    })

}
    render(){
        // state là 1 trạng thái của react và this.state là để truy cập vào trạng thái đó
        let{listTodos,editTodo}=this.state
        //= let listTodos =this.state.listTodos;
    let isEmptyObj = Object.keys(editTodo).length===0;
    console.log('>>check empty object:',isEmptyObj)
    return(
       <>
        <p>
First Todos Apps with React by Tran Hoang Vu
        </p>
<div className="List-todo-container">

   <AddTodo
   addNewTodo={this.addNewTodo}
   />
    <div className='List-todo-content'>
        {listTodos && listTodos.length > 0 && 
        // vòng lặp map có đối tượng item và chỉ số index
        listTodos.map((item,index)=>{
            return (
                //thuộc tính key dùng để tối ưu hóa hiệu năng 
                <div className='todo-child' key ={item.id}> 
{isEmptyObj === true ?
    <span>{index+1}-{item.title}</span>
    :
    <>
            {editTodo.id === item.id ? 

    <span>
        {index+1}-<input value={editTodo.title}
        onChange={(event)=> this.handleOnchangeEditTodo(event)}
        />
    </span>
    :
    <span>{index+1}-{item.title}</span>
}
    </>
    
        }
    <button className='edit'
    onClick={()=>this.handleEditTodo(item)}>
        {isEmptyObj ===false && editTodo.id === item.id ?
        'Save':'Edit'}
        
        </button>


    <button className='Delete'
    onClick={()=> this.handleDeleteTodo(item)}
    >Delete</button>

    </div>
            )
        })
        }

   
    </div>
</div> 
</>
    )
       
    
}
}

export default ListTodo;