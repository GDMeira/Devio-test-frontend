import { Flex } from "@chakra-ui/react";
import useProductsContext from "../../hooks/useProductsContext";
import { foodCategories } from "../../utils/constants";
import CategoryCard from "./CategoryCard";

export default function Categories() {
    const { productsData } = useProductsContext();
    console.log(productsData)

    return (
        <Flex gap={'5dvw'}>
            {Object.keys(productsData).map(category => <CategoryCard 
                                                            key={category}
                                                            categoryName={category}
                                                            imageUrl={productsData[category][0].image}
                                                        />)}
        </Flex>
    )
}