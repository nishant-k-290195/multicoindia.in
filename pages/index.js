import HomeStyles from '../styles/Home.module.css'

const Section_A = () => {
  return (
    <div className={`${HomeStyles.section} ${HomeStyles.section_A}`}>
      <div className={HomeStyles.container}>
        <h1>
          The leading Adhesive Products & Solvent Cement Supplier.
          We cover both industrial and residential needs.
        </h1>
      </div>
    </div>
  )
}

const Section_B = () => {
  return (
    <div className={`${HomeStyles.section} ${HomeStyles.section_B}`}>
      <div className={HomeStyles.container}>
        <div>
          <h3>Service</h3>
          <p>We provide both B2B and B2C services.</p>
        </div>
        <div>
          <h3>Vision</h3>
          <p>We committed towards creating a wide range of product division under a single platform to all types of constructive products, bathroom-kitchen fittings, construction chemical, electrical, cleaning hygiene base & engineering products.</p>
        </div>
        <div>
          <h3>Quality</h3>
          <p>To sustain and lead in market by Quality first and customer satisfaction moto..</p>
        </div>
      </div>
    </div>
  )
}

const Section_C = () => {
  return (
    <div className={`${HomeStyles.section} ${HomeStyles.section_C}`}>
      <div className={HomeStyles.container}>
        <h2>Services</h2>
      </div>
    </div>
  )
}


const Section_D = () => {
  return (
    <div className={`${HomeStyles.section} ${HomeStyles.section_D}`}>
      <div className={HomeStyles.container}>
        <h2>Call of Action</h2>
        <button>Contact Us</button>
        <button>+91-9709815555</button>
      </div>
    </div>
  )
}

const Section_E = () => {
  return (
    <div className={`${HomeStyles.section} ${HomeStyles.section_E}`}>
      <div className={HomeStyles.container}>
        <h1>
          Service Locations
        </h1>
      </div>
    </div>
  )
}

const Section_F = () => {
  return (
    <div className={`${HomeStyles.section} ${HomeStyles.section_F}`}>
      <div className={HomeStyles.container}>
        <h1>
          Testimonial
        </h1>
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <Section_A />
      <Section_B />
      <Section_C />
      <Section_D />
      <Section_E />
      <Section_F />
    </div>
  )
}

export default Home
