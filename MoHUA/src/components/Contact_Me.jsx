import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function ConnectToCollaborate() {
  // Example data for dropdowns
  const countries = ['India'];
  const states = ['Maharashtra', 'Goa', 'Karnataka'];
  const cities = ['Mumbai', 'Panaji', 'Bangalore'];
  const categories = ['GOVERNMENT', 'START-UP', 'UNIVERSITY', 'INDUSTRY', 'CITIZEN'];

  // State variables to handle form inputs
  const [name, setName] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [role, setRole] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [areasOfCollaboration, setAreasOfCollaboration] = useState('');
  const [areasOfExpertise, setAreasOfExpertise] = useState('');
  const [sectorFocus, setSectorFocus] = useState('');

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-red-600 mb-8 text-center">
        CONNECT TO COLLABORATE
      </h1>
      <form className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-8 rounded-lg">
        <input 
          placeholder="NAME" 
          className="bg-gray-100 border border-gray-300 rounded-md p-3" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          placeholder="ORGANIZATION NAME" 
          className="bg-gray-100 border border-gray-300 rounded-md p-3" 
          value={organizationName} 
          onChange={(e) => setOrganizationName(e.target.value)} 
        />
        <input 
          placeholder="ROLE" 
          className="bg-gray-100 border border-gray-300 rounded-md p-3" 
          value={role} 
          onChange={(e) => setRole(e.target.value)} 
        />

        <select 
          className="bg-gray-100 border border-gray-300 rounded-md p-3" 
          value={country} 
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">SELECT COUNTRY</option>
          {countries.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select 
          className="bg-gray-100 border border-gray-300 rounded-md p-3" 
          value={state} 
          onChange={(e) => setState(e.target.value)}
        >
          <option value="">SELECT STATE</option>
          {states.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select 
          className="bg-gray-100 border border-gray-300 rounded-md p-3" 
          value={city} 
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="">SELECT CITY</option>
          {cities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <input 
          placeholder="EMAIL ID" 
          className="bg-gray-100 border border-gray-300 rounded-md p-3 md:col-span-2" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          placeholder="CONTACT NO." 
          className="bg-gray-100 border border-gray-300 rounded-md p-3" 
          value={contactNo} 
          onChange={(e) => setContactNo(e.target.value)} 
        />

        <select 
          className="bg-gray-100 border border-gray-300 rounded-md p-3" 
          value={areasOfCollaboration} 
          onChange={(e) => setAreasOfCollaboration(e.target.value)}
        >
          <option value="">AREAS OF COLLABORATION</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <select 
          className="bg-gray-100 border border-gray-300 rounded-md p-3" 
          value={areasOfExpertise} 
          onChange={(e) => setAreasOfExpertise(e.target.value)}
        >
          <option value="">AREAS OF EXPERTISE</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <select 
          className="bg-gray-100 border border-gray-300 rounded-md p-3" 
          value={sectorFocus} 
          onChange={(e) => setSectorFocus(e.target.value)}
        >
          <option value="">SECTOR FOCUS</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <div className="md:col-span-3 flex justify-center mt-6">
          <button 
            type="submit" 
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-md flex items-center"
          >
            SUBMIT <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}
