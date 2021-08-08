const Section_A = () => {
  return(
    <div>
      <div>
        <div>
          <h3>Latest Job</h3>
          <p>Product Manager</p>
          <p>Sales Manager</p>
          <p>Senior Sales Manager</p>
          <p>Field Executive</p>
        </div>
      </div>
    </div>
  )
}

const Section_B = () => {
  return(
    <div>
      <div>
        <div>
          <input type="text" placeholder='Name'/>
          <input type="email" name="" id="" placeholder='Email'/>
          <input type="text" placeholder='Phone'/>
          <textarea name="" id="" cols="30" rows="10" placeholder='Comments'/>
        </div>
      </div>
    </div>
  )
}
const Section_C = () => {
  return(
    <div>
      <div>
        <div>
          <h3>PVC Self Adhesive Tape (FR)</h3>
          <p>We have two type of Solvent Cement -1. Indoseal 2. Eureka Bond</p>
        </div>
        <div>
          <h3>Synthetic Rubber Adhesive</h3>
          <p>We have two type of Solvent Cement -1. Indoseal 2. Eureka Bond</p>
        </div>
        <div>
          <h3>Upcoming Product</h3>
          <p>We have two type of Solvent Cement -1. Indoseal 2. Eureka Bond</p>
        </div>
      </div>
    </div>
  )
}

const Career = () => {
  return (
    <>
      <Section_A />
      <Section_B />
      <Section_C />
    </>
  )
}

export default Career
