import styles from '../styles/career.module.css'
import Vendors from '../components/Vendors'

const Section_A = () => {
  return(
    <div className={styles.section}>
      <div className={styles.container}>
        <div>
          <h2>We're currently looking for</h2>
          <ul style={{padding: '2rem'}}>
            <li>Product Manager</li>
            <li>Sales Manager</li>
            <li>Senior Sales Manager</li>
            <li>Field Executive</li>
          </ul>
        </div>
        <div className={styles.wrapper}>
          <input type="text" placeholder='Name'/>
          <input type="email" name="" id="" placeholder='Email'/>
          <input type="text" placeholder='Phone'/>
          <div>
            <label for="">Upload Your Resume</label>
            <input type="file" placeholder='Resume'/>
          </div>
          <textarea name="" id="" cols="30" rows="5" placeholder='Comments'/>
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

const Career = () => {
  return (
    <>
      <Section_A />
      <Vendors />
    </>
  )
}

export default Career
