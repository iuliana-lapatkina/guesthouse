import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Overlay from '../../generic/Overlay';

const Layout = ({ changeBack, backtop }) => {

  return (
    <div className='relative'>
      {backtop && <Overlay />}
      <div className={`w-full bg-white overflow-hidden text-left text-sm text-dimgray-200 font-montserrat`}>
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer changeBack={changeBack} />
      </div>
    </div>
  )
}

export default Layout;