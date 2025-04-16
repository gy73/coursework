import Header from "../../components/Header/Header"
import './PasswordRecovery.css'
import Footer from "../../components/Footer/Footer"

function PasswordRecovery() {
    return (
        <>
        <Header/>
        <div className="container">
            <div className="passwordrecovery-form">
                <form className='registration-forms' action="">
                    <h2>Восстановление пароля</h2>
                      <p className="info">Введите свою почту под которой вы регистрировались на сайте,<br />
                       на него придёт информация о восстановлении пароля</p>
                    <div className='input-fields'>
                        <div>
                            <p>Почта</p>
                            <input type="text" />
                        </div>
                    </div>
                    <button className='registration-button'>Войти</button>
                    <div className='links'>
                    </div>
                </form>
            </div>
        </div>
            <Footer/>
        </>
    )
}

export default PasswordRecovery