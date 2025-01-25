import style from './PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <div className={ style.PageNotFound }>
      <h1>401</h1>
      <h1>Página não encontrada</h1>
    </div>
  )
}

export { PageNotFound };