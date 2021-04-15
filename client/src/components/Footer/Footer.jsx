import './Footer.css';

export default function Footer(props) {
  
  const { changeMode } = props;
  return (
    <div className='footer'>
      <button className='mode-switcher' onClick={changeMode}>Change Mode</button>
    </div>
  )
}
