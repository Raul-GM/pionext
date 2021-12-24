import Layout from './../components/layout/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Layout>
        <h1 className={styles.header}>Hello World</h1>
      </Layout>
    </div>
  )
}
