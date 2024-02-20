import { Modal, Select } from 'antd';
import { useState } from 'react';

import './index.less';

interface IProps {
  visible: boolean;
  onClose: () => void;
}

export default function Deposit({ visible, onClose }: IProps) {
  return (
    <Modal open={visible} title="USDB deposits" transitionName="" width={400} onCancel={onClose} wrapClassName="popup-main account-popup-deposit" footer={null} maskClosable={false}>
      <div className="box">
        <div className="tc">
          <img src={require('@/assets/images/usdt.png')} className="icon-coin" /> USDB
        </div>
        <div className="t1 mt20 tc">$1,544</div>
        <div className="flex justify-between mt15">
          <label className="flex-1 color1">
            Winning chance <img src={require('@/assets/images/q.png')} className="icon-question" />
          </label>
          <span>None</span>
        </div>
        <div className="flex justify-between mt15">
          <label className="flex-1 color1">Daily Prizes</label>
          <span>0</span>
        </div>
        <div className="flex justify-between mt15">
          <label className="flex-1 color1">TVL</label>
          <span>
            <img src={require('@/assets/images/usdt.png')} className="icon-coin" /> 415,527.872
          </span>
        </div>
      </div>
      <div className="flex mt20">
        <button className="btn button-main w-100">
          <img src={require('../../images/arrow-down.png')} className="icon-arrow" />
          Deposit
        </button>
        <button className="btn button-main w-100" style={{ marginLeft: 16 }}>
          <img src={require('../../images/arrow-up.png')} className="icon-arrow" />
          Withdraw
        </button>
      </div>
    </Modal>
  );
}
