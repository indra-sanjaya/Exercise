import Delete from '@/components/Delete';
import Image from 'next/image';
import Link from 'next/link';

export default async function Recipe({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const response = await fetch(`http://localhost:3001/recipes/${id}`);

  const recipe = await response.json();

  return (
    <div className="flex flex-col gap-5 p-5 items-center">
      <div>
        <h3 className="text-xl font-semibold">Recipe</h3>
      </div>

      <div className="card bg-base-100 shadow-md w-100 items-center p-5 gap-4">
        <Image src={recipe.image} alt={recipe.name} width={300} height={300} className="rounded-md object-cover" />

        <div className="flex items-center gap-2">
          <h2 className="card-title text-lg">{recipe.name}</h2>
          <span className="badge badge-primary">{recipe.origin}</span>
        </div>

        <p className="text-sm opacity-80">{recipe.description}</p>
        <div className="flex gap-5">
          <div>
            <Link href={`/recipes/${id}/edit`} className="btn btn-primary">
              Edit
            </Link>
          </div>
          <div>
            <Delete id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
