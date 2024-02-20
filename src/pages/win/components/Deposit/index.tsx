import { Modal, Select } from 'antd';
import { useState } from 'react';

import './index.less';
import Indicator from '../Indicator';

interface IProps {
  visible: boolean;
  onClose: () => void;
}

const OPTIONS = [
  {
    value: 'ETH',
    label: (
      <>
        <img src={require('@/assets/images/eth.png')} /> ETH
      </>
    ),
  },
  {
    value: 'USDB',
    label: (
      <>
        <img src={require('@/assets/images/usdt.png')} /> USDB
      </>
    ),
  },
];

export default function Deposit({ visible, onClose }: IProps) {
  const [value, setValue] = useState('ETH');
  const [current, setCurrent] = useState(0);

  const label = OPTIONS.find((item) => item.value === value)?.label;

  return (
    <Modal open={visible} title="Deposit into the Lucky Pool" transitionName="" width={400} onCancel={onClose} wrapClassName="popup-main popup-deposit" footer={null} maskClosable={false}>
      <div className="flex justify-between">
        <div className="color1">Deposit with</div>
        <div>Balance: 0.00 Max</div>
      </div>
      <Select className="coins" value={value} onChange={setValue} options={OPTIONS} popupClassName="select-deposit" />
      <div className="t1 tc" style={{ marginTop: 30 }}>
        1,544<span className="color1 fz18"> USDB</span>
      </div>
      {current === 0 ? (
        <div className="box box1">
          <div className="value-label justify-center">{label}</div>
          <div className="item">
            <label>Current deposit balance</label>
            <span>5,231</span>
          </div>
          <div className="item">
            <label>The number of tickets you...</label>
            <span>240</span>
          </div>
          <div className="item">
            <label>Winning chance of current daily prize</label>
            <span>5%</span>
          </div>
          <div className="item">
            <label>Winning chance of current grand prize</label>
            <span>5%</span>
          </div>
          <div className="item">
            <label>
              Average Prize APR
              <img className="icon-question" src={require('@/assets/images/q.png')} />
            </label>
            <span>1.353445%</span>
          </div>
          <div className="item">
            <label>
              Yield source
              <img className="icon-question" src={require('@/assets/images/q.png')} />
            </label>
            <span></span>
          </div>
        </div>
      ) : (
        <div className="box box2">
          <div className="value-label justify-center">Your Prize Breakdown</div>
          <div className="flex justify-between" style={{ marginTop: 15 }}>
            <label className="color1">Prize Value</label>
            <span className="color1">Chance to win</span>
          </div>
          <div className="item">
            <label className="c-main">$5,000</label>
            <span>1 to 29845</span>
          </div>
          <div className="item">
            <label>$50</label>
            <span>1 to 2984</span>
          </div>
          <div className="item">
            <label>$50</label>
            <span>1 to 2984</span>
          </div>
          <div className="item">
            <label>$50</label>
            <span>1 to 2984</span>
          </div>
        </div>
      )}
      <Indicator count={2} value={current} onChange={setCurrent} />
      <button className="btn button-main w-100">Connect Wallet to Deposit</button>
    </Modal>
  );
}
