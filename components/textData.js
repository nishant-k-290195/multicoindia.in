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