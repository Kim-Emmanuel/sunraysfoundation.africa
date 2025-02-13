import React from 'react';
import ProgramCard from './ProgramCard';

interface Program {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface ProgramListProps {
  programs: Program[];
}

const ProgramList: React.FC<ProgramListProps> = ({ programs }) => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((program: Program) => (
          <div key={program.id} className="transform transition-transform hover:scale-105">
            <ProgramCard
              title={program.title}
              description={program.description}
              image={program.imageUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramList;