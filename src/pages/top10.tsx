import { GetStaticProps } from "next";
import { Title } from "../styles/pages/Home";

interface IProduct {
  id: string;
  title: string;
}

interface Top10Props {
  products: IProduct[];
}

export default function Top10({ products }: Top10Props) {
  async function Sum() {
    const math = await import("../libs/math");

    alert(math.default.sum(3, 3));
  }

  return (
    <div>
      <Title>Top 10</Title>

      <ul>
        {products.map((recommendedProduct) => {
          return (
            <li key={recommendedProduct.id}>{recommendedProduct.title}</li>
          );
        })}
      </ul>

      <button onClick={Sum}>Soma</button>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Top10Props> = async (context) => {
  const response = await fetch("http://localhost:3333/products");

  const products = await response.json();

  return {
    props: {
      products,
    },
    revalidate: 5,
  };
};
