import { faCalendarTimes, faClipboardCheck, faEdit, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import './ListItems.css';

const ListItems = (props) => {

   const [editMode, setEditMode] = useState(null);
   const [valueInput, setValueInput] = useState('');

   const activateEditMode = (id, task) => {
      setEditMode(id)
      setValueInput(task)
   }

   const disactivateEditMode = (id) => {
      const newList = props.list.map(list => list.id === id ? { ...list, task: valueInput } : list);
      props.setList(newList)
      setEditMode(null)
      return id
   }

   const changeTextTask = (e) => {
      setValueInput(e.currentTarget.value)
   }

   const toggleDone = (id) => {
      const newList = props.list.map(list => list.id === id ? { ...list, done: !list.done } : list);
      props.setList(newList)
      return id
   }

   const deleteTask = (id) => {
      const newList = props.list.filter(list => id !== list.id);
      props.setList(newList)
      return id
   }

   let newArray = props.list.map((list) => {
      return (
         <div className="todo-item" key={list.id}>
            {editMode !== list.id ?
               <div className="text-wrapper">
                  <span className={list.done ? "text-task-active" : "text-task"}>{list.task}</span>
               </div> :
               <input onChange={changeTextTask} className="edit-input" type="text" value={valueInput} />
            }

            {editMode !== list.id ?
               <div className="button-wrapper">
                  <Button onClick={() => activateEditMode(list.id, list.task)} variant="primary"><FontAwesomeIcon icon={faEdit} /></Button>
                  {list.done
                     ? <Button onClick={() => toggleDone(list.id)} variant="primary"><FontAwesomeIcon icon={faCalendarTimes} /></Button>
                     : <Button onClick={() => toggleDone(list.id)} variant="primary"><FontAwesomeIcon icon={faClipboardCheck} /></Button>
                  }
                  <Button onClick={() => deleteTask(list.id)} variant="primary"><FontAwesomeIcon icon={faTrash} /></Button>
               </div> :
               <div className="button-wrapper">
                  <Button onClick={() => disactivateEditMode(list.id)} variant="primary"><FontAwesomeIcon icon={faSave} /></Button>
               </div>
            }
         </div>
      )
   })

   return (
      <div>
         {newArray}
      </div>
   )
}

export default ListItems
