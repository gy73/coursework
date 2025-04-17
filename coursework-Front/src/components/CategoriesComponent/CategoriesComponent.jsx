import './CategoriesComponent.css'
import { manCategory, womenCategory,otherCategory } from './CategoryLink/Categories'
import CategoryLink from './CategoryLink/CategoryLink'

const CategoriesComponent = () => {
    return (
        <div >
            <h1 className='zagolovokCategories'>
                Категории
            </h1>
            <div className='categories'>
            
                <ul className="man-category">
                    <h3>Мужское</h3>
                    { manCategory.map ( (item, index) => (
                        <CategoryLink 
                        key = {index}
                        path={item.path}
                        category={item.title}/>
                    ))}
                </ul>
                <ul className="women-category">
                <h3>Женское</h3>
                { womenCategory.map ( (item, index) => (
                        <CategoryLink 
                        key = {index}
                        path={item.path}
                        category={item.title}/>
                    ))}
                </ul>
                <ul className="other-category">
                <h3>Другое</h3>
                { otherCategory.map ( (item, index) => (
                        <CategoryLink 
                        key = {index}
                        path={item.path}
                        category={item.title}/>
                    ))}
                </ul>
        </div>
    </div>
    )
}

export default CategoriesComponent