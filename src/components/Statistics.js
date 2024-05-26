// src/components/Statistics.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Statistics = ({ students }) => {
  const data = students.reduce((acc, student) => {
    const existing = acc.find(item => item.year === student.year);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ year: student.year, count: 1 });
    }
    return acc;
  }, []);

  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
};

export default Statistics;
