'use client';

import Form from '@/components/Form';

export default function CreateRecipe() {
  return (
    <div className="flex flex-col gap-5 p-5">
      <div>
        <h3>Create New Recipe</h3>
      </div>
      <div>
        <Form mode="create" />
      </div>
    </div>
  );
}
