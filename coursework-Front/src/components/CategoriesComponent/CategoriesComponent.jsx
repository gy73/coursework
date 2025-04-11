import './CategoriesComponent.css'

const CategoriesComponent = () => {
    return (
        <>
        <div >
            <h1 className='zagolovokCategories'>
                Категории
            </h1>
            <div className='categories'>
            
                <ul className="man-category">
                    <li className="category">Верх</li>
                    <li className="category">Низ</li>
                    <li className="category">Обувь</li>
                    <li className="category">Головные уборы</li>
                </ul>
                <ul className="women-category">
                    <li className="category">Верх</li>
                    <li className="category">Низ</li>
                    <li className="category">Обувь</li>
                    <li className="category">Головные уборы</li>
                </ul>
                <ul className="other-category">
                    <li className="category">Сумки</li>
                    <li className="category">Часы</li>
                    <li className="category">Шарфы</li>
                    <li className="category">Кошельки</li>
                </ul>
        </div>
    </div>
        </>
    )
}

export default CategoriesComponent