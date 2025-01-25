import { createContext, useEffect, useState } from 'react';
import { api } from '../services';

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const { children } = props;

  const [ creator, setCreator ] = useState('Flavio');

  const [ tasks, setTasks ] = useState([]);

  const [loadingLoad, setLoadingLoad] = useState(false);
  const [loadingCreate, setLoadingCreate] = useState(false);
  const [loadingRemove, setLoadingRemove] = useState(null);
  const [loadingUpdate, setLoadingUpdate] = useState(null);

  const loadTasks = async () => {
    setLoadingLoad(true);

    const { data = [] } = await api.get('/tasks');

    setTasks([
      ...data
    ])

    setLoadingLoad(false);
  }

  const addTask = async (taskName) => {
    setLoadingCreate(true);

    const { data: task } = await api.post('/tasks', {
      name: taskName
    });

    setTasks(currentState => {
      return [
        ...currentState,
        task
      ]
    })

    setLoadingCreate(false);
  }

  const removeTask = async (idTask) => {
    setLoadingRemove(idTask);

    await api.delete(`/tasks/${idTask}`);

    setTasks(currentState => {
      const updatedTasks = currentState.filter(task => task.id != idTask)

      return [
        ...updatedTasks
      ]
    })

    setLoadingRemove(null);
  }

  const updateTask = async (idTask, taskName) => {
    setLoadingUpdate(idTask);

    const { data: updatedTask } = await api.put(`/tasks/${idTask}`, {
      name: taskName
    });

    setTasks(currentState => {
      const updatedTasks = currentState.map(
        task => task.id != idTask ? task : {...task, name: updatedTask.name}
      )
  
      return [
        ...updatedTasks
      ]
    })

    setLoadingUpdate(null);
  }

  useEffect(() => {
    loadTasks();
  }, [])

  return (
    <AppContext.Provider value={{
      creator,
      tasks,
      addTask,
      removeTask,
      updateTask,
      loadingLoad,
      loadingCreate,
      loadingRemove,
      loadingUpdate
    }}>
      {children}
    </AppContext.Provider>
  )
};