const Contact = () => {
  return (
    <div>
      <div>
        <select name="" id="">
          <option value="volvo">General Enquiry</option>
          <option value="saab">Product Query</option>
          <option value="saab">Support</option>
          <option value="saab">Other</option>
        </select>
        <input type="text" placeholder='Name'/>
        <input type="email" name="" id="" placeholder='Email'/>
        <input type="text" placeholder='Phone'/>
        <textarea name="" id="" cols="30" rows="10" placeholder='Message'/>
      </div>
    </div>
  )
}

export default Contact
