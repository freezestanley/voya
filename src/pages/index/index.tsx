import './index.less';

export default function HomePage() {
  return (
    <div className="page page-index">
      {/* <header>
        <img src={require('./images/logo.png')} alt="Voya Logo" className="logo" />
        <a href="/docs.html" className="ml-auto">
          Docs
        </a>
        <img src={require('./images/x.png')} className="icon-x" />
        <img src={require('./images/fly.png')} className="icon-fly" />
        <img src={require('./images/btn-launch.png')} className="btn btn-launch" />
      </header> */}
      <img src={require('./images/bg_01.jpg')} className="bg" />
      <img src={require('./images/bg_02.jpg')} className="bg" />
      <img src={require('./images/bg_03.jpg')} className="bg" />
      <img src={require('./images/bg_04.jpg')} className="bg" />
      <img src={require('./images/bg_05.jpg')} className="bg" />
      <img src={require('./images/bg_06.jpg')} className="bg" />
      <img src={require('./images/bg_07.jpg')} className="bg" />
      <div className="contact-us">
        <input placeholder="Enter your email" />
        {/* <div className="btn">Lancun App</div> */}
        <img src={require('./images//btn-submit.png')} className="btn" />
      </div>
    </div>
  );
}
