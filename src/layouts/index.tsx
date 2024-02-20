import { useState } from 'react';
import { Outlet } from 'umi';

import './index.less';

export default function Layout() {
  const patname = window.location.pathname;
  const [connected, setConnected] = useState(false);

  return (
    <>
      <header className="site-header ">
        <img src={require('@/assets/images/logo.png')} alt="Voya Logo" className="logo" />
        <div className="flex-1 menu">
          <a href="/earn" className={patname === '/earn' ? 'active' : ''}>
            Earn
          </a>
          <a href="/win" className={patname === '/win' ? 'active' : ''}>
            Win
          </a>
          <a href="/account" className={patname === '/account' ? 'active' : ''}>
            Account
          </a>
        </div>
        <img src={require('@/assets/images/x.png')} className="icon-x" />
        <img src={require('@/assets/images/fly.png')} className="icon-fly" />
        {connected ? <div className="connected fz18">0x902e...ADad8e</div> : <button className="btn button-main btn-launch">Connect Wallet</button>}
      </header>
      <Outlet />
    </>
  );
}
