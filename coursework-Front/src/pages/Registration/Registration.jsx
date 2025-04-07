import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Registration.css'

function Registration() {
    return (
        <>
            <Header />
            <div className='container'>
                <div className="registration-form">
                    <form className='registration-forms' action="">
                        <h2>Зарегистрироваться</h2>
                        <div className='input-fields'>
                            <div>
                                <p>Логин</p>
                                <input type="text" />
                            </div>
                            <div>
                                <p>Почта</p>
                                <input type="text" />
                            </div>
                            <div>
                                <p>Пароль</p>
                                <input type="text" />
                            </div>
                            <div>
                                <p>Имя</p>
                                <input type="text" />
                            </div>
                            <div>
                                <p>Фамилия</p>
                                <input type="text" />
                            </div>
                        </div>
                        <button className='registration-button'>Войти</button>
                        <div className='links'>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Registration