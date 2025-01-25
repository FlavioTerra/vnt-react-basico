import style from './TaskListItem.module.css';
import { Button, BUTTON_TYPE, Loading, TextField } from '../../../components';
import { useAppContext } from '../../../hooks';
import { useState } from 'react';

const TaskListItem = (props) => {
  const { id, name } = props
  const { removeTask, updateTask, loadingRemove, loadingUpdate } = useAppContext();
  const [ update, setUpdate] = useState(false)

  const updateItem = () => {
    setUpdate(!update)
  }

  const loadingIsRemoving = id == loadingRemove
  const loadingIsUpdating = id == loadingUpdate

  const submitUpdate = (event) => {
    const taskName = event.currentTarget.value;

    updateTask(id, taskName);

    updateItem();
  }

  return (
    <li className={ style.TaskListItem } onDoubleClick={updateItem}>
      {update || loadingIsUpdating ? 
        <TextField onBlur={submitUpdate} defaultValue={name} autoFocus/>
      : name}

      {loadingIsUpdating && (
        <Loading />
      )}

      <Button text={loadingIsRemoving ? <Loading /> : "-"} type={BUTTON_TYPE.SECONDARY} onClick={() => removeTask(id)}/>
    </li>
  )
}

export { TaskListItem };