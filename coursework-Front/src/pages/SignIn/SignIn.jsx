import './SignIn.css'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function SignIn() {
    return (
        <>
            <Header />
            <div className='container'>
                <div className="signin-form">
                    <form className='signin-forms' action="">
                        <h2>Войти в систему</h2>
                        <div className='input-fields'>
                            <div>
                                <p>Логин</p>
                                <input type="text" />
                            </div>
                            <div>
                                <p>Пароль</p>
                                <input type="text" />
                            </div>
                        </div>
                        <button className='signin-button'>Войти</button>
                        <div className='links'>
                            <Link to='/Registration'><p>Зарегистрироваться</p></Link>
                            <Link to='/passwordrecovery'><p>Забыли пароль?</p></Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default SignIn