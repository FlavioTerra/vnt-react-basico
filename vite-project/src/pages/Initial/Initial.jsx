import style from './Initial.module.css';
import { FormCreateTask, TaskList } from '../../components';

const Initial = () => {
  return (
    <div className={ style.Initial }>
      <FormCreateTask />
      <TaskList />
    </div>
  )
}

export { Initial };