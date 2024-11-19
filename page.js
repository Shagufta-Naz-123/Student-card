import React from 'react';
import StudentIDCard from './components/StudentIDCard';

export default function Home() {
  return (
    <div className="flex flex-col items-center p-6 space-y-4">
      <StudentIDCard name="Faraz Ahmed" age="22" rollNumber="101" className="12th Grade" />
      <StudentIDCard name="Shagufta" age="20" rollNumber="102" className="10th Grade" />
      <StudentIDCard name="Sani" age="19" rollNumber="103" className="9th Grade" />
    </div>
  );
}
