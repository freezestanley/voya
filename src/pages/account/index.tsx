import { useState } from 'react';
import Deposit from './components/Deposit';

import './index.less';

export default function AccountPage() {
  const [depositVisible, setDepositVisible] = useState(false);

  return (
    <div className="page page-account">
      <main className="flex justify-between">
        <div className="l flex-col">
          <div className="box box1">
            <div className="t1">Total balance</div>
            <div className="t2">$0</div>
          </div>
          <div className="box flex-1">
            <div className="t1">
              Savings <span className="color1 fz16">$0.00</span>
            </div>
            <div className="coin flex align-center">
              <img src={require('@/assets/images/eth.png')} className="icon-coin" /> ETH
              <span className=" ml-auto">0</span>
              <img src={require('@/assets/images/arrow.png')} className="icon-arrow" />
            </div>
            <div className="coin flex align-center">
              <img src={require('@/assets/images/usdt.png')} className="icon-coin" /> USDT
              <span className=" ml-auto">0</span>
              <img src={require('@/assets/images/arrow.png')} className="icon-arrow" />
            </div>
          </div>
        </div>
        <div className="r">
          <div className="box">
            <div className="t1">Prizes Won</div>
            <div className="mt20 fz16" style={{ marginTop: 20 }}>
              $ 2356
            </div>
            <div className="color1 mt10 fz14">+ Blast Points 345667</div>
            <div className="mt20 fz16">Unclaimed Prizes</div>
            <div className="color1 mt10 fz14">$234</div>
            <button className="btn button-main mt15" onClick={() => setDepositVisible(true)}>
              Claimed
            </button>
          </div>
          <div className="box">
            <div className="t1">My Tickets</div>
            <div className="flex justify-between mt20">
              <label className="color1">Daily Prize</label>
              <span>4800</span>
            </div>
            <div className="flex justify-between mt10">
              <label className="color1">Grand Prize</label>
              <span>12000</span>
            </div>
            <div className="t1 mt30">Winning Chance</div>
            <div className="flex justify-between mt20">
              <label className="color1">Daily Prize</label>
              <span>12%</span>
            </div>
            <div className="flex justify-between mt10">
              <label className="color1">Grand Prize</label>
              <span>2%</span>
            </div>
          </div>
        </div>
      </main>
      <Deposit visible={depositVisible} onClose={() => setDepositVisible(false)} />
    </div>
  );
}
