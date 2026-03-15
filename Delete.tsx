'use client';

import Swal from 'sweetalert2';

export default function Delete({ id }: { id: string }) {
  const handleDelete = async () => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete this recipe',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it',
    });

    if (!result.isConfirmed) return;
    const response = await fetch(`http://localhost:3001/recipes/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete recipe');
    }

    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete this recipe',
      icon: 'warning',
      showCancelButton: true,
    });

    window.location.href = '/';
  };

  return (
    <button onClick={handleDelete} className="btn btn-error">
      Delete
    </button>
  );
}
