import styles from '../styles/contact.module.css'

const Contact = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.textarea_wrapper}>
              <label for="">Message</label>
              <textarea name="" id="" cols="30" rows="10" placeholder=''/>
            </div>
          <div className={styles.form_wrapper}>
            <div className={styles.input_wrapper}>
              <label for="">Subject</label>
              <select name="subject" id="">
                <option value="volvo">General Enquiry</option>
                <option value="saab">Product Query</option>
                <option value="saab">Support</option>
                <option value="saab">Other</option>
              </select>
            </div>
            <div className={styles.input_wrapper}>
              <label for="">Name</label>
              <input type="text" placeholder=''/>
            </div>
            <div className={styles.input_wrapper}>
              <label for="">Email</label>
              <input type="email" name="" id="" placeholder=''/>
            </div>
            <div className={styles.input_wrapper}>
              <label for="">Phone</label>
              <input type="text" placeholder=''/>
            </div>
          </div>
          </div>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Contact
