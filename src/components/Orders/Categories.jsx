import { Flex } from "@chakra-ui/react";
import useProductsContext from "../../hooks/useProductsContext";
import { productCategories } from "../../utils/constants";
import CategoryCard from "./CategoryCard";

export default function Categories() {
    const { productsData } = useProductsContext();

    return (
        <Flex justifyContent={"space-between"} w={'100%'}>
            {Object.keys(productsData).map(category => <CategoryCard 
                                                            key={category}
                                                            categoryName={productCategories[category]}
                                                            imageUrl={productsData[category][0].image}
                                                        />)}
        </Flex>
    )
}