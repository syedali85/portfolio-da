import React from 'react';
import { Github, Mail, MapPin, Award, BookOpen, Calendar, Building } from 'lucide-react';
import Skills from './components/Skills';
import './App.css';

const Portfolio = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20 text-center w-full">
        <h1 className="text-5xl font-bold mb-4">Mohammed Ali Syed</h1>
        <h2 className="text-3xl mb-6">Data Solution Architect</h2>
        <p className="text-lg mb-4">Empowering organizations through data-driven solutions.</p>
        <div className="flex justify-center gap-4">
          <a href="mailto:alisyed0105@gmail.com" className="text-white underline">Email Me</a>
          <a href="https://github.com/yourusername" className="text-white underline">GitHub</a>
        </div>
      </header>

      {/* Key Highlights Section */}
      <section className="bg-white text-left">
        <h3 className="text-3xl font-bold mb-4">Key Highlights</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Developed and executed comprehensive data strategies, including successful cloud platform selection and implementation of enterprise-wide data lakes.</li>
          <li>Established effective project governance frameworks and operating models, resulting in improved delivery metrics and team performance.</li>
          <li>Led strategic stakeholder engagement, including C-level presentations and proposal development for major initiatives.</li>
          <li>Designed and implemented transformation projects as a Data Solution Architect, balancing technical excellence with business objectives.</li>
          <li>Created and presented RFP responses and technical proposals for enterprise-scale projects.</li>
          <li>Led the migration of legacy mainframe data pipelines to AWS, developing and executing comprehensive migration strategies.</li>
          <li>Proven expertise in delivering modern cloud-based data processing and transformation platforms, specializing in ETL and ELT solutions on AWS.</li>
          <li>Proficient in mentoring and developing team members, fostering their personal and technical growth, and enhancing engineering and agile delivery processes.</li>
          <li>Innovated and empowered data customers to self-serve their data needs, leveraging cloud-based data platforms.</li>
          <li>Strong understanding of software architecture, data engineering, and software development best practices, balancing short-term team needs with long-term business goals.</li>
          <li>Subject matter expert providing strategic guidance on design reviews within Experian UK.</li>
          <li>Extensive experience working with clients, delivering tailored solutions that meet stringent regulatory and compliance requirements.</li>
        </ul>
      </section>

      {/* Journey Section */}
      <section className="bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-4">My Journey</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          I am a Data Solution Architect with extensive experience in designing enterprise-wide data strategies and leading digital transformation initiatives. My journey has been focused on leveraging cloud technologies to drive efficiency and innovation.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-white text-center">
        <h3 className="text-3xl font-bold mb-4">Technical Skills</h3>
        <Skills />
      </section>

      {/* Work History Section */}
      <section className="bg-gray-100 text-left">
        <h3 className="text-3xl font-bold mb-4">Work History</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold">All things "Foundational Tech"</h4>
            <p className="text-gray-600">July 2022 - Present</p>
            <p>
              Given the growing number of existential risks facing Americans and all of humanity, my research has shown me that there may be nothing more important to humanity's long-term flourishing than investing in and building what I call <strong>"foundational technologies"</strong> that enable hyperlocal resilience, self-sustainability, dynamism, and ecological regeneration.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>How do we build villages and cities of the future that are not only extractive, but also leave the natural ecosystems around them better off?</li>
              <li>How do we better identify and fund people and projects that generate and regenerate what matters?</li>
              <li>How can communities prepare for the worst, and simultaneously plant seeds for a new Golden Age for the U.S. (and all of humanity)?</li>
            </ul>
            <p>
              I am dedicating this current chapter of my life to exploring questions like these and contributing to high-impact projects related to these questions, like Flow State, Guild, and Zuzalu.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Data Solution Architect</h4>
            <p className="text-gray-600">Company Name (Year - Present)</p>
            <p>
              Description of your role and responsibilities, highlighting key achievements and contributions.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Senior Data Engineer</h4>
            <p className="text-gray-600">Previous Company Name (Year - Year)</p>
            <p>
              Description of your role and responsibilities, highlighting key achievements and contributions.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Data Analyst</h4>
            <p className="text-gray-600">Another Company Name (Year - Year)</p>
            <p>
              Description of your role and responsibilities, highlighting key achievements and contributions.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications & Awards Section */}
      <section className="bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-4">Certifications & Awards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <BookOpen size={20} className="text-blue-600" />
              Certifications
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Hadoop Big Data Developer Certification</li>
              <li>Scrum Master Certification</li>
              <li>AWS Solutions Architect Training Certification</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <Award size={20} className="text-blue-600" />
              Awards
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Experian Credit Excellence Award - Performance Tuning</li>
              <li>Experian Credit Excellence Award - Test Automation</li>
              <li>Dell Silver Award - Zero Defect Delivery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 w-full">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Mohammed Ali Syed. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;