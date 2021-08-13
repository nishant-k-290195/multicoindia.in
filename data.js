import { v4 as uuidv4 } from 'uuid';

export const HOME = {
  Section_C: {
    services: [
      { id:uuidv4() , service: `Solvent Cement` }, 
      { id:uuidv4(), service: `Rubber Lubricant`},
      { id:uuidv4(), service: `Primer`},
      { id:uuidv4(), service: `Epoxy Putty`},
      { id:uuidv4(), service: `Synthetic Rubber Adhesives`},
      { id:uuidv4(), service: `Epoxy Adhesive`},
      { id:uuidv4(), service: `Pipe Thread Sealant`},
      { id:uuidv4(), service: `Tapes (PTFE and Teflon Tapes)`},
      { id:uuidv4(), service: `Gasket Shellac`},
      { id:uuidv4(), service: `Tiles adhesive division`},
      { id:uuidv4(), service: `Water Proofing chemicals`},
    ]
  }
}

export const TESTIMONIAL = [ 
  { id: uuidv4(), name:'Tushar', comment:'These products are really-really awesome. '}, 
  { id: uuidv4(), name:'Priya', comment:'I love these products!' },
  { id: uuidv4(), name:'Aman', comment:'Great quality cement solvents.'},
  { id: uuidv4(), name:'Suraj', comment:'Very reliable and top notch adhesive products.' }
]

export const VENDORS = [ 
  { id: uuidv4(), img: 'vendor_1.png'}, 
  { id: uuidv4(), img: 'vendor_2.png'},
  { id: uuidv4(), img: 'vendor_3.png'},
  { id: uuidv4(), img: 'vendor_2.png'}, 
]

export const ABOUT = {
  aboutUs: {
    id: uuidv4(),
    title: 'We Are No.1 Adhesive Product & Solvent Cement Supplier all across India- MULTICO.',
    p1: 'MULTICO CONSTRUCTIVE PRIVATE LIMITED is a privately owned firm by a group of highly experienced, capable, and enthusiastic personalties. It has been established under the vision of bringing all construction liked products, particularly the adhesive material requirements under one umbrella. Our Adhesive products allows us to provide comprehensive services in adhesive development.',
    p2: 'Our adhesive materials are in three broad categories which includes industrial, construction and consumers .We will soon introduced Tiles Adhesive and Water Proofing Chemicals in our product basket. The vast knowledge and experience of the management and staffs at MULTICO makes us invaluable to our clients',
    img: 'signature.png',
  },

  leadership: [ 
    { id: uuidv4(), name: 'Mr. Mukesh Kumar', designation: 'Chairman', img: 'leader_2.png'}, 
    { id: uuidv4(), name: 'Mr. Pankaj Kumar', designation: 'CEO & Director', img: 'leader_1.png'},
    { id: uuidv4(), name: 'Mr. Sanjeev K Suman', designation: 'Managing Director', img: 'leader_3.png'},
    { id: uuidv4(), name: 'Mr. Chandan Kumar', designation: 'Digital Marketing Manager', img: 'leader_4.png'}, 
  ]
}

export const PRODUCTS = {
  products: [
    {
      id: uuidv4(),
      img: '1.png',
      name: 'Solvent Cement',
      detail: '1. Indoseal 2. Eureka Bond'
    },
    {
      id: uuidv4(), 
      img: '2.png',
      name: 'Primer & Cleaner',
      detail: '1. Indoseal Primer 2. Indoseal Cleaner'
    },
    {
      id: uuidv4(), 
      img: '3.png',
      name: 'Lubricants',
      detail: 'Indoseal Rubber Lubricants. It is used For simple and smooth water tight joint of PVC,Ring-fit, Self-fit, sewer, drain piping'
    },
    {
      id: uuidv4(),
      img: '4.png', 
      name: 'Pipe Thread Sealants',
      detail: 'A pipe thread sealant is a product used to seal the gaps between pipe thread connections (male and female threads.'
    
    },
    {
      id: uuidv4(), 
      img: '5.png',
      name: 'Epoxy Putty',
      detail: '1. Indoseal Primer 2. Indoseal Cleaner'
    },

    {
      id: uuidv4(), 
      img: '6.png',
      name: 'PTFE (Teflon) Tape',
      detail: 'Thread seal Tape is a polytetrafluoroethylene (PTFE) film tape commonly used in plumbing for sealing pipe threads.'
    },
    {
      id: uuidv4(), 
      img: '7.png',
      name: 'PVC Self Adhesive Tape (FR)',
      detail: '1. Indoseal Primer 2. Indoseal Cleaner'
    },
    {
      id: uuidv4(), 
      img: '8.png',
      name: 'Synthetic Rubber Adhesive',
      detail: 'Epoxy putty refers to a group of room-temperature-hardening substances used as space-filling adhesives.'
    },
    {
      id: uuidv4(), 
      img: '9.png',
      name: 'Upcoming Product',
      detail: 'We will soon introduced Tiles Adhesive and Water Proofing Chemicals in our product basket.'
    },
  ]
}