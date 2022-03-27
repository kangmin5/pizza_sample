import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

export default function PizzaList() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>서울에서 두번째로 맛있는 피자</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto est, optio recusandae aut, voluptatem, ipsam fuga mollitia accusantium quae aliquid nesciunt sunt natus corrupti cumque! Quo minima ut inventore aliquid.
        Repellat accusamus eos ducimus veritatis molestiae ea, ipsa beatae optio illo ipsam at sapiente magnam incidunt cumque dicta. Cumque quisquam sint, exercitationem nam harum ullam? Aut sunt ea beatae molestias.
        Temporibus provident  Fugit maiores iusto eius a nulla delectus laboriosam tempore ut quam voluptates debitis, architecto dolore animi doloribus magnam, harum error optio expedita beatae sed enim similique earum, eligendi accusantium? Soluta!</p>
        <div className={styles.wrapper}>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        </div>
    </div>
  )
}
