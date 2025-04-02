import './Footer.css'

export default function Footer() {
  return(
    <>
<footer className='footer'>
      <div className='container'>
          <div className='lists' >
      <ul className='lis1'>
        <li> <a>Ссылка</a> </li>
        <li> <a>Ссылка</a> </li>
        <li> <a>Ссылка</a> </li>
      </ul>
      <ul className='lis2'>
        <li> <a>Ссылка</a> </li>
        <li> <a>Ссылка</a> </li>
        <li> <a>Ссылка</a> </li>
      </ul>
      <ul className='lis3'>
        <li> <a>Ссылка</a> </li>
        <li> <a>Ссылка</a> </li>
        <li> <a>Ссылка</a> </li>
      </ul>
    </div>
      <div className='links'>
        <a  href="/profile" className="icon-link"> <img src='/public/img/instagram-svgrepo-com.svg'/></a>
        <a href="/profile" className="icon-link"> <img src='/public/img/telegram-svgrepo-com.svg'/></a>
        <a href="/profile" className="icon-link"> <img src='/public/img/twitter-svgrepo-com.svg'/></a>

      </div>
      </div>
    </footer>
    </>
  )
}