import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";

const seedProducts = initialData.products;

interface Props {
  params: Promise<{
    id: Category;
  }>
}


export default async function CategoryPage({ params }: Props) {

  const { id } = await params
  const products = seedProducts.filter(product => product.gender === id)

  const labels: Record<Category, string> = {
    'men': 'Hombres',
    'women': 'Mujeres',
    'kid': 'Niños',
    'unisex': 'todos'
  }

  return (
    <>
      <Title
        title={`Articulos de ${labels[id]}`}
        subtitle="Todos los productos"
        className="mb-2" />

      <ProductGrid products={products} />
    </>
  );
}
