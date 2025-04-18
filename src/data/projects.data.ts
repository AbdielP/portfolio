import { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'Key Lookup & QR Labeling Tool',
    description: 'A React-based application to streamline key management with Excel-to-MySQL import and QR code generation.',
    image: 'images/dashboard_llaves.png',
    demo: '',
    code: 'https://github.com/CWB-Datacenter/dashboard-llaves',
    tech: ['React', 'MUI', 'PHP', 'MySQL']
  },
  {
    title: 'QR Codes Application',
    description: 'QR code generator for datacenter access and registration, with Excel data and label generation.',
    image: 'images/dashboard_qraccess.png',
    demo: '',
    code: 'https://github.com/AbdielP/qrcodeproject',
    tech: ['Angular', 'Node.js', 'MySQL']
  },
  {
    title: 'SNMP Manager',
    description: 'A tool to monitor temperature and humidity via SNMP-enabled sensors with a simple web interface.',
    image: 'images/dashboard_snmp.png',
    demo: '',
    code: 'https://github.com/AbdielP/snmp_manager',
    tech: ['JavaScript', 'Node.js']
  },
  {
    title: 'E-Commerce product page',
    description: 'A responsive product page built with Angular featuring image previews, cart functionality, and a clean UI.',
    image: 'images/product_page.png',
    demo: 'https://abdielp.github.io/angular-ecommerce-product-page/',
    code: 'https://github.com/AbdielP/angular-ecommerce-product-page',
    tech: ['Angular', 'Typescript', 'CSS']
  },
  {
    title: 'Room Homepage',
    description: 'A responsive landing page built with Vue.js that replicates the interactive design of Room’s homepage. Includes image slider functionality and modern layout practices.',
    image: 'images/room_page.png',
    demo: 'https://abdielp.github.io/vue-room-homepage/',
    code: 'https://github.com/AbdielP/vue-room-homepage',
    tech: ['Vue.js', 'CSS']
  }
]  
