import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState()

  //Delete task  

  const deleteTask =(id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder task

  const toggleReminder = (id) => {
    console.log(id)
  }


  return (
    <div className="container">
     <Header/>
     {tasks.length >0 ? (<Tasks  onDelete={deleteTask} onToggle={toggleReminder}/>) : ( 'No Task To Show' ) }

     
    </div>
  );
}

export default App;
