import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import './CompanySelection.css';

const companies = [
  'TCS',
  'Infosys',
  'Zoho',
  'Wipro',
  'Cognizant',
  'Capgemini',
  'HCL',
  'IBM',
  'Tech Mahindra'
];

function CompanySelection() {
  const [selected, setSelected] = useState('TCS');
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  const handleSave = async () => {
    setSaving(true);

    try {
      await api.post('/company/select-company', {
        company: selected
      });

      localStorage.setItem('selectedCompany', selected);

      navigate('/process');

    } catch (error) {
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="company-container">

      <div className="company-card">

        <h1>Select Your Dream Company</h1>

        <p>
          Choose the company for your interview preparation.
        </p>

        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {companies.map((company) => (
            <option
              key={company}
              value={company}
            >
              {company}
            </option>
          ))}
        </select>

        <button
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? 'Saving...' : 'Save & Continue'}
        </button>

      </div>

    </div>
  );
}

export default CompanySelection;