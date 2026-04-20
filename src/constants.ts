import { Course, Service, Testimonial } from './types';

export const COURSES: Course[] = [
  {
    id: 'basic-concept',
    title: 'Basic Concept Of Computer',
    description: 'Perfect for beginners starting their digital journey. Covers typing, paint, and core fundamentals.',
    icon: 'Monitor',
    duration: '2 Months',
    category: 'Basic',
    syllabus: [
      'Typing Tutor (English & Gujarati)',
      'MS - Paint',
      'Computer Fundamentals',
      'Basic Hardware & Software knowledge',
      'Windows Operating System',
      'Instant Artist (Banners, Certificates)',
      'Introduction of Internet',
      'Introduction of Multimedia'
    ],
    features: [
      'Individual attention',
      'Gujarati & English typing',
      'Practical-first approach',
      'Certificate upon completion'
    ]
  },
  {
    id: 'ccc',
    title: 'CCC (Computer Concept)',
    description: 'Government-standard certificate course covering essential office and internet skills.',
    icon: 'FileText',
    duration: '3 Months',
    category: 'Basic',
    syllabus: [
      'Typing Tutor (English & Gujarati)',
      'MS - Paint & Fundamentals',
      'Windows Operating System',
      'MS-Word (Documentation)',
      'MS-Excel (Spreadsheets)',
      'MS-PowerPoint (Presentations)',
      'MS-Outlook (Email Management)',
      'Introduction of Internet & Multimedia'
    ],
    features: [
      'Govt. recognized syllabus',
      'Professional documentation skills',
      'Email etiquette training',
      'Internet security basics'
    ]
  },
  {
    id: 'office-automation',
    title: 'Office Automation',
    description: 'Comprehensive training in the MS Office suite for administrative excellence.',
    icon: 'Briefcase',
    duration: '3 Months',
    category: 'Basic',
    syllabus: [
      'Typing Tutor & MS-Paint',
      'Computer Fundamentals',
      'Windows Operating System',
      'MS-Word (Advanced Formatting)',
      'MS-Excel (Data Analysis)',
      'MS-PowerPoint (Visual Slides)',
      'MS-Access (Database Management)',
      'Internet & Multimedia'
    ],
    features: [
      'Database management basics',
      'Advanced Excel formulas',
      'Professional presentation design',
      'Office workflow optimization'
    ]
  },
  {
    id: 'tally-prime',
    title: 'Tally Prime with GST',
    description: 'Industry-standard accounting software training for job-ready professionals.',
    icon: 'Calculator',
    duration: '2 Months',
    category: 'Professional',
    syllabus: [
      'Basic Concept of Account',
      'Accounting Vouchers & Ledgers',
      'Inventory Management',
      'Taxation (TDS, VAT, Service Tax & GST)',
      'Bill & Passbook Entry',
      'Bank Reconciliation (BRS)',
      'Tally Tips & Tricks',
      'GST Filing & E-invoicing'
    ],
    features: [
      'Job-oriented practical training',
      'Real-world accounting cases',
      'GST portal simulation',
      'Upgrade skills for professionals'
    ]
  },
  {
    id: 'dtp-designing',
    title: 'Adv. Designing (DTP)',
    description: 'Master professional graphic design and desktop publishing tools.',
    icon: 'Palette',
    duration: '5 Months',
    category: 'Professional',
    syllabus: [
      'MS - Paint & Typing Tutor',
      'PageMaker 7.0 (Professional Layouts)',
      'CorelDraw-X7 (Vector Graphics)',
      'Photoshop CS5 (Image Editing)',
      'Color Correction & Retouching',
      'Logo & Brochure Design',
      'Print-ready Document Creation',
      'Digital Art Composition'
    ],
    features: [
      'Creative portfolio development',
      'Latest design techniques',
      'High-quality print production',
      'Industry-standard software'
    ]
  },
  {
    id: 'autocad-eng',
    title: 'AutoCAD (Engineering)',
    description: 'Technical 2D and 3D drafting for architecture and manufacturing.',
    icon: 'Compass',
    duration: '3 Months',
    category: 'Technical',
    syllabus: [
      'Introduction to AutoCAD',
      '2D Command (Schematics, Layouts)',
      '3D Command (Modeling, Primitives)',
      'Elevation (Exterior/Interior Views)',
      'Section (Vertical/Horizontal Cuts)',
      'Plotting (Blueprints, PDF Publishing)',
      'PC3 Configuration Settings',
      'CTB/STB Color Weights'
    ],
    features: [
      'Architecture & Engineering focus',
      'Precise digital technical drawings',
      '3D visualization & analysis',
      'Large-format printing skills'
    ]
  },
  {
    id: 'programming-web',
    title: 'Programming & Web Design',
    description: 'Learn to build websites and master core programming logic.',
    icon: 'Code',
    duration: '6 Months',
    category: 'Technical',
    syllabus: [
      'Computer Fundamentals & MS-DOS',
      '“C” Programming (Logic Building)',
      '“C++” Programming (OOPs)',
      'HTML & CSS (Web Structure)',
      'JavaScript (Interactivity)',
      'Fox Pro (Database)',
      'MS. Publisher & Front Page',
      'Webpage Design & Hosting'
    ],
    features: [
      'Full-stack foundation',
      'Logic & Algorithm development',
      'Responsive web design',
      'Database management'
    ]
  },
  {
    id: 'hardware-networking',
    title: 'Hardware & Networking',
    description: 'Expert training in computer assembly, repair, and network setup.',
    icon: 'Settings',
    duration: '2.5 Months',
    category: 'Technical',
    syllabus: [
      'Micro Processor & Motherboard',
      'Diagnostics Software & Peripherals',
      'OS Installation & Troubleshooting',
      'Digital Electronics & Circuits',
      'SMD Technique & Antivirus',
      'PC Assembly & Disassembly',
      'LAN/MAN/WAN Networking',
      'Protocols & Topologies'
    ],
    features: [
      'Hands-on hardware repair',
      'Network configuration skills',
      'Chip-level diagnostics',
      'Real-world troubleshooting'
    ]
  },
  {
    id: 'cctv-repairing',
    title: 'CCTV Repairing',
    description: 'Specialized course in security camera installation and maintenance.',
    icon: 'Camera',
    duration: '1.5 Months',
    category: 'Technical',
    syllabus: [
      'Learn about CCTV Systems',
      'CCTV System Design',
      'Camera Selection & Installation',
      'DVR Installation & Online Setup',
      'DVR & Camera Troubleshooting',
      'PTZ & Wi-Fi Camera Setup',
      'Cabling & Crimping Techniques'
    ],
    features: [
      'Security industry focus',
      'Remote viewing configuration',
      'Practical field training',
      'Maintenance & AMC skills'
    ]
  },
  {
    id: 'diploma-software',
    title: 'Diploma in Software Automation',
    description: 'Advanced professional diploma covering office, design, and internet.',
    icon: 'GraduationCap',
    duration: '8 Months',
    category: 'Diploma',
    syllabus: [
      'Typing Tutor & Fundamentals',
      'MS Office (Word, Excel, PPT)',
      'PageMaker 7.0 (DTP)',
      'CorelDraw-X7 (Graphics)',
      'Photoshop CS5 (Editing)',
      'Internet & Multimedia',
      'Professional Workflow',
      'Project Documentation'
    ],
    features: [
      'Comprehensive skill set',
      'Long-term career foundation',
      'Multiple software mastery',
      'Diploma certification'
    ]
  },
  {
    id: 'diploma-hardware-printer',
    title: 'Diploma in Hardware & Printer Repairing',
    description: 'Complete mastery of computer hardware, networking, and printer servicing.',
    icon: 'Wrench',
    duration: '9 Months',
    category: 'Diploma',
    syllabus: [
      'Desktop, Laptop & Network Intro',
      'Software Troubleshooting',
      'PC Assembly & Cabling',
      'OS & Device Software Installation',
      'Antivirus & Data Recovery',
      'DHCP, Domain & Firewall Setup',
      'Printer Parts & Diagnostics',
      'Printer Repairing & Servicing'
    ],
    features: [
      'Expert-level repair skills',
      'Printer specialization',
      'Enterprise networking',
      'Full technical support mastery'
    ]
  },
  {
    id: 'adv-diploma-software',
    title: 'Adv. Diploma in Software Automation',
    description: 'Our most comprehensive 15-month program for total IT mastery.',
    icon: 'Award',
    duration: '15 Months',
    category: 'Diploma',
    syllabus: [
      'Typing Tutor & Fundamentals',
      'Full MS Office Suite',
      'Full D.T.P. Package',
      'Accounting (Tally ERP 9)',
      'C & C++ Programming',
      'Web Design (HTML, CSS, JS)',
      'MS. Publisher & Front Page',
      'Fox Pro (Database)'
    ],
    features: [
      'Total IT expert training',
      'Programming & Design skills',
      'Accounting & Automation',
      'Career-defining diploma'
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 'laptop-repair',
    title: 'Laptop & Desktop Repair',
    description: 'Expert hardware and software troubleshooting for all major brands.',
    icon: 'Laptop',
    image: '/webapp-imgs/repair-service.jpg',
    category: 'Repair',
    features: [
      'Motherboard level chip repairing',
      'Screen, Keyboard & Battery replacement',
      'OS Installation & Software troubleshooting',
      'Data recovery from crashed drives',
      'Liquid damage repair specialists'
    ]
  },
  {
    id: 'cctv-install',
    title: 'CCTV Installation',
    description: 'Professional security camera setup for homes, offices, and institutions.',
    icon: 'Camera',
    image: '/webapp-imgs/cctv.jpg',
    category: 'Installation',
    features: [
      'IP & Analog camera setup',
      'Remote mobile viewing configuration',
      'Night vision & Motion detection setup',
      'Annual maintenance & AMC',
      'Biometric & Access control integration'
    ]
  },
  {
    id: 'printer-service',
    title: 'Printer Servicing',
    description: 'Maintenance and repair for inkjet, laser, and multi-function printers.',
    icon: 'Printer',
    image: '/webapp-imgs/printer.jpg',
    category: 'Repair',
    features: [
      'Cartridge refilling & Toner service',
      'Paper jam & Pickup roller repair',
      'Logic board & Power supply service',
      'Network printer configuration',
      'Regular maintenance & Cleaning'
    ]
  },
  {
    id: 'amc-support',
    title: 'AMC Support',
    description: 'Annual Maintenance Contracts for hassle-free IT infrastructure management.',
    icon: 'ShieldCheck',
    image: '/webapp-imgs/amc.jpg',
    category: 'Support',
    features: [
      'Priority on-site support',
      'Regular preventive maintenance',
      'Unlimited remote assistance',
      'Backup & Security management',
      'Cost-effective IT management'
    ]
  },
  {
    id: 'it-support',
    title: 'Business IT Support',
    description: 'Comprehensive technical support for small businesses and schools.',
    icon: 'Headphones',
    image: '/webapp-imgs/bizit.jpg',
    category: 'Support',
    features: [
      'Server & Network administration',
      'Cloud storage & Email setup',
      'Firewall & Antivirus management',
      'IT infrastructure consulting',
      'Employee technical training'
    ]
  },
  {
    id: 'hardware-upgrade',
    title: 'Hardware Upgrades',
    description: 'RAM, SSD, and component upgrades to boost your computer performance.',
    icon: 'Zap',
    image: '/webapp-imgs/hdwr.jpg',
    category: 'Repair',
    features: [
      'SSD installation for 10x speed',
      'RAM expansion for multitasking',
      'Graphics card & PSU upgrades',
      'Processor & Cooling system service',
      'Old PC to High-performance conversion'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Mehta',
    role: 'Student',
    content: 'The Tally course at MicroC@re helped me land a job as an accountant. The practical training is excellent!',
    rating: 5,
    type: 'Student'
  },
  {
    id: '2',
    name: 'Priya Shah',
    role: 'Business Owner',
    content: 'Grow Up Tech installed CCTV at my shop. The service was professional and the support is always just a call away.',
    rating: 5,
    type: 'Client'
  },
  {
    id: '3',
    name: 'Amit Patel',
    role: 'Engineering Student',
    content: 'I learned AutoCAD here. The instructors are very patient and knowledgeable about technical software.',
    rating: 4,
    type: 'Student'
  }
];

export const STATS = [
  { label: 'Students Trained', value: '5000+' },
  { label: 'Services Completed', value: '2500+' },
  { label: 'Years Experience', value: '15+' },
  { label: 'Happy Clients', value: '1200+' }
];
