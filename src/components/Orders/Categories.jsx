import { Flex } from "@chakra-ui/react";
import useProductsContext from "../../hooks/useProductsContext";
import CategoryCard from "./CategoryCard";

export default function Categories() {
    const { productsData } = useProductsContext();

    return (
        <Flex justifyContent={"space-between"} w={'100%'}>
            {Object.keys(productsData).map(category => <CategoryCard 
                                                            key={category}
                                                            categoryName={category}
                                                            imageUrl={productsData[category][0].image}
                                                        />)}
        </Flex>
    )
}