import { InputNumber, Modal, Select } from 'antd';
import { useState } from 'react';
import Indicator from '../Indicator';

import './index.less';

interface IProps {
  visible: boolean;
  onClose: () => void;
}

export default function BuyTicket({ visible, onClose }: IProps) {
  const [amout, setAmount] = useState<number | null>(0);
  const [current, setCurrent] = useState(0);

  return (
    <Modal open={visible} title="Buy tickets of the Lucky Pool" transitionName="" width={400} onCancel={onClose} wrapClassName="popup-main popup-buy-ticket" footer={null} maskClosable={false}>
      <div className="color1 tip">Tickets are only valid for current daily prize and current grand prize.</div>
      <div className="box1 tc fz16 c-fff">
        Current Price of one Ticket
        <img src={require('@/assets/images/q.png')} alt="" />
        <img src={require('@/assets/images/share.png')} alt="" />
      </div>
      <div className="box2 tc mt20">
        <span className="t1">2.34</span>
        <span className="color1 fz18">USDB</span>
      </div>
      <div className="color1 tc">($2.34)</div>
      <div className="box3 flex justify-between align-center fz16">
        <label className="color1">Ticket amount</label>
        <InputNumber className="input" size="large" min={0} value={amout} onChange={setAmount} />
      </div>
      <div className="box3 flex justify-between align-center fz16" style={{ marginTop: 15 }}>
        <label className="color1">Total price</label>
        <span>4.68 USDB($4.68)</span>
      </div>
      {current === 0 ? (
        <>
          <div style={{ marginTop: 20 }} className="tc">
            The probability of a ticket to win prize is equal to depositing $1,000 for one day.
          </div>
          <div className="box4 box4-1">
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
        </>
      ) : (
        <div className="box4 box4-2">
          <div className="value-label tc">Your Prize Breakdown</div>
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
      <Indicator value={current} count={2} onChange={setCurrent} />
      <button className="btn button-main w-100">Connect Wallet to Buy</button>
    </Modal>
  );
}
