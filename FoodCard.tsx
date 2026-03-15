import { Recipe } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function FoodCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="card card-side bg-base-100 shadow-sm w-110 h-55 hover:shadow-md transition">
      {/* Left image */}
      <figure className="w-full">
        <Image src={recipe.image} alt={recipe.name} width={160} height={160} className="rounded-l-xl object-cover" />
      </figure>

      {/* Right content */}
      <div className="card-body p-4">
        <h2 className="card-title text-lg">{recipe.name}</h2>
        <p className="text-sm opacity-80 line-clamp-3">{recipe.description}</p>
        <div className="flex justify-center items-center">
          <p className="text-xs opacity-60 mt-1">{recipe.origin}</p>

          <div className="card-actions justify-end mt-2">
            <Link href={`/recipes/${recipe.id}`} className="btn btn-primary btn-sm">
              View Recipe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
