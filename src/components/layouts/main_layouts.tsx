import { Outlet } from "react-router-dom";

function MainLayout() {
  return (<>
  <main className='p-6' style={{flex:'1'}}>
    <Outlet />
  </main>
</>);
}

export default MainLayout;
