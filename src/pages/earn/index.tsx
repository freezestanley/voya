import './index.less';

export default function EarnPage() {
  return (
    <div className="page page-earn">
      <div className="t t1 c-main">Earn</div>
      <div className="t t2">Stake ETH or USDB and receive voETH/ voUSD with boosting native yield</div>
      <main className="flex justify-between">
        <div className="box">
          <div className="t">ETH</div>
          <div className="row">
            <label className="underline">Staked amount + </label>
            <span>10 ETH</span>
          </div>
          <div className="row">
            <label>
              Annual percentage rate
              <img className="icon-question" src={require('@/assets/images/q.png')} />
            </label>
            <span>8%</span>
          </div>
          <div className="row row2 align-center">
            <img src={require('@/assets/images/eth.png')} className="icon-eth" />
            <input type="number" className="flex-1" placeholder="ETH amount" />
            <div className="max">Max</div>
          </div>
          <button className="btn button-main w-100">Stake</button>
          <div className="row">
            <label>Total staked with (Voya)</label>
            <span>9,510,057.931 ETH</span>
          </div>
          <div className="row">
            <label>You will receive</label>
            <span>0.0 voETH</span>
          </div>
          <div className="row">
            <label>Exchange rate</label>
            <span>1 ETH = 1 voETH</span>
          </div>
          <div className="row">
            <label>Max transaction cost</label>
            <span>$ 0.2</span>
          </div>
          <div className="row">
            <label>
              Reward fee
              <img className="icon-question" src={require('@/assets/images/q.png')} />
            </label>
            <span>0%</span>
          </div>
        </div>
        <div className="box">
          <div className="t">USDB</div>
          <div className="row">
            <label className="underline">Staked amount + </label>
            <span>10 ETH</span>
          </div>
          <div className="row">
            <label>
              Annual percentage rate
              <img className="icon-question" src={require('@/assets/images/q.png')} />
            </label>
            <span>8%</span>
          </div>
          <div className="row row2 align-center">
            <img src={require('@/assets/images/usdt.png')} className="icon-eth" />
            <input type="number" className="flex-1" placeholder="USDB amount" />
            <div className="max">Max: 23ETH</div>
          </div>
          <button className="btn button-main w-100">Stake</button>
          <div className="row">
            <label>Total staked with (Voya)</label>
            <span>9,510,057.931 ETH</span>
          </div>
          <div className="row">
            <label>You will receive</label>
            <span>0.0 voUSD</span>
          </div>
          <div className="row">
            <label>Exchange rate</label>
            <span>1 ETH = 1 voETH</span>
          </div>
          <div className="row">
            <label>Max transaction cost</label>
            <span>$ 0.2</span>
          </div>
          <div className="row">
            <label>
              Reward fee
              <img className="icon-question" src={require('@/assets/images/q.png')} />
            </label>
            <span>0%</span>
          </div>
        </div>
      </main>
    </div>
  );
}
