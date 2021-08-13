import styles from '../styles/Product.module.css'
import {PRODUCTS} from '../data'
import Vendors from '../components/Vendors'

const Section_A = () => {
  return(
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {
            PRODUCTS.products.map((item) => {
              return <div className={styles.card} key={item.id}>
                <img src={item.img} alt="products" />
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

const Products = () => {
  return (
    <>
      <Section_A />
      <Vendors />
    </>
  )
}

export default Products
