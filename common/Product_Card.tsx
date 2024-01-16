import { paths } from "@/constants";
import { Card, Img, Section, Text, Span, Anchor, Button, FlexGrid } from "@/elements";
import { Images } from "@/public";
import { appService } from "@/services";
import { AppDispatch, RootState } from "@/store/store";
import { ProductsProps } from "@/types";
import { formatAmount } from "@/utils/helper";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const Products: React.FC<ProductsProps> = ({ displayButton, sliceAmount }) => {
  const isMountedRef = useRef(true);

  // fetching products from the store
  const data = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();
  const [displayedProducts, setDisplayedProducts] = React.useState<number>(sliceAmount);

  useEffect(() => {
    if (isMountedRef.current) {
      dispatch(appService.fetchProducts());
    }
    return () => {
      isMountedRef.current = false;
    };
  }, [dispatch]);

  const allProducts = data?.products?.products || [];

  // a function to handle loading more products
  const handleLoadMore = () => {
    const nextDisplayedProducts = displayedProducts + 5;
    setDisplayedProducts(nextDisplayedProducts);
  };

  const shouldDisplayLoadMoreButton = allProducts.length > displayedProducts;

  return (
    <>
      <FlexGrid isGrid={true} gridType="grid5" isBorder={false}>
        {Array.isArray(allProducts) &&
          allProducts?.slice(0, displayedProducts)?.map((item) => (
            <Card key={item?.id} className="product-card">
              <Img src={item?.thumbnail ?? Images.Product1} alt="" width={100} height={100} />
              <Section className="product-content">
                <Anchor
                  as={`${paths.store}/${item?.category}/${item?.id}/${encodeURIComponent(item?.title)}`}
                >
                  <Text className="title">{item?.title?.slice(0, 15) + "..."}</Text>
                </Anchor>
                <Text className="desc">{item?.description?.slice(0, 18) + "..." }</Text>
                <Text className="price">
                  <Span>{formatAmount(item?.discountPercentage ?? "0.00")}</Span>
                  <Span>{formatAmount(item?.price ?? "0.00")}</Span>
                </Text>
              </Section>
            </Card>
          ))}
      </FlexGrid>

      {/* rendering of the "LOAD MORE PRODUCT" button based on the condition*/}
      {displayButton && shouldDisplayLoadMoreButton && (
        <Section className="flex justify-center items-center mx-auto mt-[50px]">
          <Button
            title="LOAD MORE PRODUCT"
            stylestype="primary"
            size="medium"
            handleClick={handleLoadMore}
          />
        </Section>
      )}
    </>
  );
};

export default Products;
