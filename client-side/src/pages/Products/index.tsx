import { FC } from "react";

interface ProductsPageProps {}

const ProductsPage: FC<ProductsPageProps> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-2xl">Products</p>
    </div>
  );
};

export default ProductsPage;
