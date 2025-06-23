interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  img: string;
}

interface ProductListProps {
  products: Product[] | null;
}

const ProductList = ({ products }: ProductListProps) => {
  return products ? (
    <div className="product-list-container">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={product.img} alt={product.title}/>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <p>Loading products...</p>
  );
};

export default ProductList;
