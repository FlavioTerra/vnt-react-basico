import { Outlet } from 'react-router-dom';
import { Header, Content, Footer } from '../../components';
import { useAppContext } from '../../hooks';

const LayoutDefault = () => {
  const { creator } = useAppContext();
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer creator={creator} />
    </>
  )
}

export { LayoutDefault };