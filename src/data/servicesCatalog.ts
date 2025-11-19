// Centralized services catalog to populate the navigation mega dropdown
// Populated from existing project components (ConsultingServicesGrid, ServicesList)

export type ServicesCategory = {
  title: string;
  items: string[];
};

export const servicesCatalog: ServicesCategory[] = [
  {
    title: 'Engineering Design Services',
    items: [
      'Mechanical Systems (HVAC and Ventilations)',
      'Electrical Systems',
      'Plumbing Systems',
      'Fire safety Systems',
      'Emergency Power',
      'Voice & Data Systems',
      'Security Systems',
      'PEER Review',
      'Solar PV',
    ],
  },
  {
    title: 'Sustainability Services',
    items: [
      'Building Energy Simulation',
      'External & Internal CFD simulation',
      'CFD Modelling',
      'Thermal Comfort Analysis',
      'Daylight Simulations',
      'Artificial lighting simulations',
      'Solar Analysis',
      'Microclimate study',
      'Renewable energy',
      'Energy Audit',
      'Edge Audit & certification',
    ],
  },
  {
    title: 'Strategic & Advisory Services',
    items: [
      'Sustainability Assessment and Benchmarking',
      'Carbon Footprint Analysis and Reduction Strategies',
      'Sustainable Business Strategy Development',
      'Integrated business Strategy',
      'Business growth analysis',
    ],
  },
];

export default servicesCatalog;