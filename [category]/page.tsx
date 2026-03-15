import FoodCard from '@/components/FoodCard';
import { Recipe } from '@/types';

export default async function Category({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;

  const response = await fetch(`http://localhost:3001/recipes?category=${category}`);

  const recipes: Recipe[] = await response.json();

  return (
    <div className="flex flex-col flex-1 gap-3 p-5">
      <h3>Category</h3>
      <div className="flex flex-wrap gap-3">
        {recipes.map((recipe) => {
          return <FoodCard key={recipe.id} recipe={recipe as Recipe} />;
        })}
      </div>
    </div>
  );
}
