import Form from '@/components/Form';
import { Recipe } from '@/types';

export default async function EditRecipe({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const response = await fetch(`http://localhost:3001/recipes/${id}`);

  const recipe: Recipe = await response.json();

  return (
    <div className="flex flex-col gap-5 p-5">
      <div>
        <h3>Create New Recipe</h3>
      </div>
      <div>
        <Form mode="edit" initialData={recipe} />
      </div>
    </div>
  );
}
