'use client';

import { Recipe } from '@/types';
import { useState, SubmitEvent } from 'react';
import Swal from 'sweetalert2';

export default function Form({ mode, initialData }: { mode: string; initialData?: Recipe }) {
  const [name, setName] = useState(initialData ? initialData.name : '');
  const [description, setDescription] = useState(initialData ? initialData.description : '');
  const [image, setImage] = useState(initialData ? initialData.image : '');
  const [category, setCategory] = useState(initialData ? initialData.category : '');
  const [origin, setOrigin] = useState(initialData ? initialData.origin : '');

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !description || !image || !category || !origin) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill all the fields',
        icon: 'error',
      });
      return;
    }

    const body: Recipe = {
      name,
      description,
      image,
      category,
      origin,
    };

    if (mode === 'create') {
      const lastdata = await fetch('http://localhost:3001/recipes');
      const data = await lastdata.json();

      const maxId = Math.max(...data.map((item: { id: number }) => item.id));

      const newId = String(maxId + 1);

      body.id = newId;

      const response = await fetch('http://localhost:3001/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Failed to create recipe');
      }
    }

    if (mode === 'edit' && initialData) {
      body.id = initialData.id;

      const response = await fetch(`http://localhost:3001/recipes/${initialData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Failed to update recipe');
      }
    }

    setName('');
    setDescription('');
    setImage('');
    setCategory('');
    setOrigin('');

    window.location.href = '/';
  };

  return (
    <div className="flex flex-col gap-5 p-5">
      <div>
        <h3>{mode === 'create' ? 'Create Recipe' : 'Update Recipe'}</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Name</legend>
          <input
            type="text"
            className="input"
            placeholder="Type here"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <legend className="fieldset-legend">Origin</legend>
          <input
            type="text"
            className="input"
            placeholder="Type here"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />

          <legend className="fieldset-legend">Description</legend>
          <textarea
            className="textarea"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <legend className="fieldset-legend">Image (url)</legend>
          <input
            type="text"
            className="input"
            placeholder="Type here"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <legend className="fieldset-legend">Category</legend>
          <select value={category} className="select" onChange={(e) => setCategory(e.target.value)}>
            <option value="">Category</option>
            <option value="utama">Utama</option>
            <option value="jajanan">Jajanan</option>
            <option value="minuman">Minuman</option>
            <option value="sambal">Sambal</option>
            <option value="kue">Kue</option>
          </select>
        </fieldset>

        <button className="btn btn-success mt-3">{mode === 'create' ? 'Create' : 'Update'}</button>
      </form>
    </div>
  );
}
