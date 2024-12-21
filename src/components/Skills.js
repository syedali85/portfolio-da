import React from 'react';
import './Skills.css'; // Ensure you have a CSS file for styling

const SkillCard = ({ title, skills }) => (
  <div style={{ backgroundColor: 'white' }} className="p-6 rounded-lg shadow-sm">
    <h4 className="font-bold mb-3">{title}</h4>
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <SkillCard title="Cloud Platforms" skills={["AWS (EMR, S3, Glue, Lambda, Batch)"]} />
      <SkillCard title="Big Data" skills={["Spark", "Hadoop", "Cloudera"]} />
      <SkillCard title="Programming" skills={["Python", "Scala", "Spark"]} />
      <SkillCard title="DevOps" skills={["Jenkins", "Git", "Terraform", "CI/CD pipelines"]} />
      <SkillCard title="Data Engineering" skills={["ETL/ELT design", "Parquet", "Hudi data lake"]} />
      <SkillCard title="Data Modeling" skills={["Dimensional modeling", "Star schema design"]} />
    </div>
  );
};

export default Skills;