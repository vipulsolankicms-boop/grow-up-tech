export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  duration: string;
  category: 'Basic' | 'Professional' | 'Technical' | 'Diploma';
  syllabus?: string[];
  features?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  features?: string[];
  category: 'Repair' | 'Installation' | 'Support';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  type: 'Student' | 'Client';
}
