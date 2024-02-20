import { useState } from 'react';
import Deposit from './components/Deposit';
import BuyTicket from './components/BuyTicket';

import './index.less';

export default function WinPage() {
  const [currentTab, setCurrentTab] = useState('0');
  const [depositVisible, setDepositVisible] = useState(false);
  const [buyVisible, setBuyVisible] = useState(false);

  return (
    <div className="page page-win">
      <div className="t t1">Total Deposits</div>
      <div className="t t2">$3,760,112</div>
      <div className="t t3">
        All deposits into <span className="c-fff">Voya Finance</span> are earning yield for prizes.
      </div>
      <div className="t t4">
        <a>Read more</a>
      </div>
      <div className="t t5">📣 Lottery draw coming soon!!! 📣</div>
      <section className="flex justify-between">
        <div className="lef">
          <div className="t t20">Daily Prize</div>
          <div className="t t21">$1,443</div>
          <div className="t t22">Time left to join draw #838</div>
          <div className="t time">
            <span>15</span>
            <span>:</span>
            <span>37</span>
            <span>:</span>
            <span>41</span>
          </div>
          <div className="t time time2">
            <span>HR</span>
            <span></span>
            <span>MIN</span>
            <span></span>
            <span>SEC</span>
          </div>
        </div>
        <div className="right">
          <div className="t t20">Weekly Grand Prize</div>
          <div className="t t21">$5,000</div>
          <div className="t t22">Time left to join draw #21</div>
          <div className="t time">
            <span>4</span>
            <span>:</span>
            <span>15</span>
            <span>:</span>
            <span>37</span>
            <span>:</span>
            <span>41</span>
          </div>
          <div className="t time time2">
            <span>DAY</span>
            <span></span>
            <span>HR</span>
            <span></span>
            <span>MIN</span>
            <span></span>
            <span>SEC</span>
          </div>
        </div>
      </section>
      <div className="tc" style={{ marginTop: 100 }}>
        <button className="btn button-main" onClick={() => setDepositVisible(true)}>
          Deposit to win
        </button>
        <button className="btn button-main" style={{ marginLeft: 45 }} onClick={() => setBuyVisible(true)}>
          Buy Ticket
        </button>
      </div>
      <div
        className="tabs tc"
        onClick={(e) => {
          setCurrentTab((e.target as HTMLElement).dataset.key || currentTab);
        }}
      >
        <span className={currentTab === '0' ? 'active' : ''} data-key="0">
          Last draw
        </span>
        <span className={currentTab === '1' ? 'active' : ''} data-key="1">
          Draw history
        </span>
      </div>
      {currentTab === '0' && (
        <div className="tab-1">
          <div className="t t5" style={{ marginTop: 0 }}>
            📣 40 users won $5,000 prize !!! 📣
          </div>
          <div className="flex justify-between" style={{ marginTop: 40 }}>
            <div>
              <div className="h">Last Winners</div>
              <div>0x1324....</div>
              <div>0x1324....</div>
              <div>0x1324....</div>
            </div>
            <div>
              <div className="h">Last Winners</div>
              <div>0x1324....</div>
              <div>0x1324....</div>
              <div>0x1324....</div>
            </div>
          </div>
        </div>
      )}
      {currentTab === '1' && (
        <div className="tab-2 c-fff fz18">
          {new Array(3).fill(0).map((_, i) => {
            return (
              <div className="item flex align-center">
                <div>
                  <div style={{ marginBottom: 15 }}>
                    Draw #844 <span style={{ marginLeft: 15 }}>Thursday, Feb 8, 3:00 AM</span>
                  </div>
                  <span className="fz16">Not eligible</span>
                </div>
                <div className="ml-auto fz16">
                  $45 <span>in prizes</span>
                </div>
                <img src={require('@/assets/images/arrow.png')} alt="" />
              </div>
            );
          })}
        </div>
      )}
      <Deposit visible={depositVisible} onClose={() => setDepositVisible(false)} />
      <BuyTicket visible={buyVisible} onClose={() => setBuyVisible(false)} />
    </div>
  );
}
