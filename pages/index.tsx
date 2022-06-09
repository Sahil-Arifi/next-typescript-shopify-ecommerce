import type { InferGetStaticPropsType } from "next";
import getAllproducts from "@framework/product/get-all-products";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
import { Grid, Hero, Marquee } from "@components/ui";

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllproducts(config);
  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline="Cookies, ice cream and muffins"
        description="Jelly dessert caramels chupa chups candy canes. Gummies shortbread chupa chups biscuit caramels. Biscuit apple pie topping lemon drops biscuit bear claw topping gummi bears biscuit. Sugar plum wafer sugar plum macaroon caramels sesame snaps marshmallow. Dragée bonbon gummi bears oat cake cotton candy carrot cake sugar plum. Halvah candy cheesecake cake topping caramels pastry. Donut marshmallow macaroon apple pie gummies. Sweet tootsie roll pudding muffin marzipan. Candy jujubes dragée muffin marshmallow. Marzipan icing sesame snaps pudding chupa chups muffin."
      />

      <Marquee variant="primary">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} variant="slim" product={product} />
        ))}
      </Marquee>

      <Grid layout="B">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>

      <Marquee variant="secondary">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} variant="slim" product={product} />
        ))}
      </Marquee>
    </>
  );
}

Home.Layout = Layout;
