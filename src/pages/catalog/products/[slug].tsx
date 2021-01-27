import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import dynamic from "next/dynamic";

const AddToCart = dynamic(() => import("@/components/AddToCartModal"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Product() {
  const router = useRouter();
  const [isAddToCartModalVisible, setIsAddToCartModalVisible] = useState(false);

  const handleAddToCart = useCallback(() => {
    setIsAddToCartModalVisible(true);
  }, [setIsAddToCartModalVisible]);

  return (
    <div>
      <h1>{router.query.slug}</h1>

      <button onClick={handleAddToCart}>Add to cart</button>

      {isAddToCartModalVisible && <AddToCart />}
    </div>
  );
}
