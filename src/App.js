import React,{useState} from 'react';

import './App.css';

function App() {

const [toDos,setToDos]= useState([])
const [toDo , setToDo]=useState('')

const current = new Date();
 const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
 let dt=current.toDateString();
 let tm=current.getHours()+'hrs'+ current.getMinutes()+'min'+ current.getSeconds()+'sec';

  return (
    <div className="app">
      <div className="mainHeading">
        <h3 style={{textAlign:'center',color:'whitesmoke'}}>React App</h3>
        <h1>Gokuls ToDo List App 🌝</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2> DATE : {dt} </h2>
        <h2>TIME : {tm}</h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo( e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{id:Date.now(),text:toDo, status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">

        {
          toDos.map( (obj)=>{
       return(<div className="todo">
          <div className="left">
            <input onChange={(e)=>{ 
              console.log(e.target.checked);
              console.log(obj);
              setToDos(toDos.filter(obj2=>{
                if(obj2.id===obj.id)
                {
                  obj.status=e.target.checked;
                }
                return obj2;

              }))

            }} value={obj.status}  type="checkbox" name="" id="" />
            <p>{obj.text}</p>
            
          </div>
          <div className="right">
          <i onClick={(e)=>{
                setToDos(toDos.filter(obj2 => {
                  let temp;
                  if (obj2.id != obj.id){
                    temp = obj2
                  }
                  return temp;
                }));
              }} className="fas fa-times"></i>
          </div>
        </div>)
    }) }
<br/>
<br/>
{/*<table className='table'>
  <thead>  {
      toDos.map((obj)=>{
        if(obj.status)
        return (
         
           <tr>
               <td>{obj.text}</td> 
           </tr>
          
          );
      })
    } </thead>
  </table> */}



      </div>
    </div> 
  );

}

export default App;