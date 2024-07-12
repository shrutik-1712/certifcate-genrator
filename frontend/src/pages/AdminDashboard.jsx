import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [certificates, setCertificates] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    date: '',
    email: '',
  });

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    const response = await axios.get('http://localhost:5000/api/certificates');
    setCertificates(response.data);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/certificates', formData);
    fetchCertificates();
    setFormData({ name: '', course: '', date: '', email: '' });
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleInputChange}
          placeholder="Course"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <button type="submit">Generate Certificate</button>
      </form>
      <h2>Generated Certificates</h2>
      <ul>
        {certificates.map((cert) => (
          <li key={cert._id}>
            {cert.name} - {cert.course} - <a href={cert.pdfLink} target="_blank" rel="noopener noreferrer">View Certificate</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;