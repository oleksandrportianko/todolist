import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import ListItems from '../ListItems/ListItems';
import './AddNote.css';

const AddNote = () => {

   const [list, setList] = useState([]);

   const [text, setText] = useState('');

   let onChangeInput = (e) => {
      setText(e.currentTarget.value)
   }

   let addNewToDo = () => {
      if (text) {
         const newItem = {
            id: Math.floor(Math.random() * (100000 - 1)) + 1,
            task: text,
            done: false
         }
         setList(
            [...list, newItem]
         )
      }
      setText('')
   }

   return (
      <div>
         <div className="add-todo-wrapper">
            <input onChange={onChangeInput} value={text} className="add-input" type="text" placeholder="Enter your task 22" />
            <Button onClick={addNewToDo} className="button-add-todo" variant="primary"><FontAwesomeIcon icon={faPlusSquare} /></Button>{' '}
         </div>
         <ListItems list={list} text={text} setList={setList} setText={setText} />
      </div>
   )
}

export default AddNote
