import { Route, Routes } from 'react-router-dom';
import { Initial, About, PageNotFound } from './pages';
import { LayoutDefault } from './layouts';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Initial />} />
        <Route path="/sobre-nos" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export { Router };