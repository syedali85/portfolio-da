import React from 'react';
import { Github, Mail, MapPin, Award, BookOpen, Calendar, Building } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Mohammed Ali Syed</h1>
          <h2 className="text-2xl mb-6">Data Solution Architect</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Nottingham</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:alisyed0105@gmail.com" className="hover:underline">alisyed0105@gmail.com</a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Profile Summary */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Profile</h3>
          <p className="text-gray-700 leading-relaxed">
            Accomplished Data Solution Architect and Strategic Technical Lead with a proven track record in designing enterprise-wide data strategies, implementing governance frameworks, and leading complex digital transformation initiatives. Expert in cloud computing, specifically AWS, and adept at leading teams through complex migrations.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SkillCard title="Cloud Platforms" skills={["AWS (EMR, S3, Glue, Lambda, Batch)"]} />
            <SkillCard title="Big Data" skills={["Spark", "Hadoop", "Cloudera"]} />
            <SkillCard title="Programming" skills={["Python", "Scala", "Spark"]} />
            <SkillCard title="DevOps" skills={["Jenkins", "Git", "Terraform", "CI/CD pipelines"]} />
            <SkillCard title="Data Engineering" skills={["ETL/ELT design", "Parquet", "Hudi data lake"]} />
            <SkillCard title="Data Modeling" skills={["Dimensional modeling", "Star schema design"]} />
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Professional Experience</h3>
          <div className="space-y-8">
            <ExperienceCard 
              title="Data Solution Architect/Technical Lead"
              company="Experian"
              period="2018 - Present"
              location="Nottingham"
              achievements={[
                "Architected and led migration of core business applications to AWS, scaling processing capacity from 1 million to 170 million records monthly",
                "Achieved 60% reduction in data processing time through optimized ETL processes with AWS Glue",
                "Led cloud strategy evaluation and selection process through comprehensive POCs",
                "Enforced security best practices, reducing potential vulnerabilities by 50%"
              ]}
            />
            <ExperienceCard 
              title="Lead Developer"
              company="NTT DATA Services"
              period="2010 - 2018"
              location="Nottingham"
              achievements={[
                "Implemented web service solutions on mainframe, eliminating middleware",
                "Led a team of software engineers to deliver client projects",
                "Automated manual test data generation processes, saving 250 man-days annually"
              ]}
            />
          </div>
        </section>

        {/* Certifications & Awards */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Certifications & Awards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <BookOpen size={20} className="text-blue-600" />
                Certifications
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Hadoop Big Data developer certification</li>
                <li>Scrum Master certification</li>
                <li>AWS Solutions Architect Training Certification</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Award size={20} className="text-blue-600" />
                Awards
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Experian Credit Excellence award - Performance Tuning</li>
                <li>Experian Credit Excellence award - Test Automation</li>
                <li>Dell Silver award - Zero Defect Delivery</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Mohammed Ali Syed. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const SkillCard = ({ title, skills }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <h4 className="font-bold mb-3">{title}</h4>
    <ul className="space-y-2 text-gray-700">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

const ExperienceCard = ({ title, company, period, location, achievements }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <h4 className="font-bold text-xl mb-2">{title}</h4>
    <div className="flex items-center gap-4 text-gray-600 mb-4">
      <div className="flex items-center gap-2">
        <Building size={16} />
        <span>{company}</span>
      </div>
      <div className="flex items-center gap-2">
        <Calendar size={16} />
        <span>{period}</span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin size={16} />
        <span>{location}</span>
      </div>
    </div>
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      {achievements.map((achievement, index) => (
        <li key={index}>{achievement}</li>
      ))}
    </ul>
  </div>
);

export default Portfolio;