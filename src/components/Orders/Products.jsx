import { Flex } from "@chakra-ui/react";
import useProductsContext from "../../hooks/useProductsContext";
import { bgColors, filterProducts } from "../../utils/constants";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

export default function Products() {
    const { productsData, productsFilter, extrasData } = useProductsContext();
    const [productsToRender, setProductsToRender] = useState([]);

    useEffect(() => {
        setProductsToRender(filterProducts(productsData, productsFilter));
        console.log(productsFilter.category, productsFilter.nameOrId)
    },[productsFilter]);


    return (
        <Flex  justifyContent={"space-between"} w={'100%'} wrap={"wrap"}>
            {productsToRender.length > 0 && productsToRender.map((product, i) => <ProductCard 
                                                            key={product.id}
                                                            product={product}
                                                            bgColor={bgColors[Math.floor((i % 12) / 4)]}
                                                        />)}
        </Flex>
    )
}