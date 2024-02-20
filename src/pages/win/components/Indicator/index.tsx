import './index.less';

interface IProps {
  value: number;
  count: number;
  onChange: (value: number) => void;
}

export default function Indicator({ value, count, onChange }: IProps) {
  const handleSwitch = (e: any) => {
    const keyRaw = e.target.dataset.key;
    if (keyRaw === 'prev') {
      onChange(0);
    } else if (keyRaw === 'next') {
      onChange(1);
    } else if (keyRaw) {
      onChange(+keyRaw);
    }
  };

  return (
    <div className="indicator flex justify-center align-center" onClick={handleSwitch}>
      <img src={require('../../images/arrow-left.png')} data-key="prev" />
      {new Array(count).fill(0).map((_, i) => {
        return <span key={i} className={value === i ? 'active' : ''} data-key={i}></span>;
      })}
      <img src={require('../../images/arrow-right.png')} data-key="next" />
    </div>
  );
}
