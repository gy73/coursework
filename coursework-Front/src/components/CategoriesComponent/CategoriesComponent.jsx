import './CategoriesComponent.css'
import { manCategory, womenCategory,otherCategory } from './Categories'

const CategoriesComponent = () => {
    return (
        <>
        <div >
            <h1 className='zagolovokCategories'>
                Категории
            </h1>
            <div className='categories'>
            
                <ul className="man-category">
                    <h3>Мужское</h3>
                    { manCategory.map ( (t,p) => (
                        <li>()</li>
                    ))}
                </ul>
                <ul className="women-category">
                <h3>Женское</h3>
                    <li className="category">Верх</li>
                    <li className="category">Низ</li>
                    <li className="category">Обувь</li>
                    <li className="category">Головные уборы</li>
                </ul>
                <ul className="other-category">
                <h3>Другое</h3>
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