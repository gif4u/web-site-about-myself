import './productList.css'
import Product from '../Product/Product'
import{products} from '../../Data'

export const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className='pl-title'>The most beautiful and dangerous mountains</h1>
        <p className='pl-desc'>
        I love mountains, so I prepared a little quest for you. Here are the most beautiful and dangerous mountains on our planet in my opinion. Try to guess the mountain from the picture, then click on the picture and check yourself.
        </p>
        </div>
        <div className="pl-list">
           {products.map((item)=>(
            <Product key={item.id} img={item.img} link={item.link}/>
            ))}
        </div>
    </div>
  )
}

export default ProductList