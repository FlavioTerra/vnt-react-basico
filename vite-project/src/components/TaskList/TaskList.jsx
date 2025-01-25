import style from './TaskList.module.css';
import { TaskListItem } from './TaskListItem';
import { useAppContext } from '../../hooks';
import { Loading } from '../Loading';

const TaskList = () => {
  const { tasks, loadingLoad } = useAppContext();
  return (
    <ul className={ style.TaskList }>
      {loadingLoad && (
        <p>
          Carregando...
          <Loading />
        </p>
      )}

      {!loadingLoad && !tasks.length && (
        <p>Não há tarefas cadastradas...</p>
      )}
      
      {tasks.map(item => <TaskListItem key={item.id} id={item.id} name={item.name} />)}
    </ul>
  )
}

export { TaskList };