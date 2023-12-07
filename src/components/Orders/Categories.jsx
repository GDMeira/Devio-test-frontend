import { Flex } from "@chakra-ui/react";
import useProductsContext from "../../hooks/useProductsContext";
import CategoryCard from "./CategoryCard";
import styled from "styled-components";

export default function Categories() {
    const { productsData } = useProductsContext();

    return (
        <FlexSC justifyContent={"space-between"} alignItems={'center'} w={'100%'}>
            {Object.keys(productsData).map(category => <CategoryCard 
                                                            key={category}
                                                            categoryName={category}
                                                            imageUrl={productsData[category][0].image}
                                                        />)}
        </FlexSC>
    )
}

const FlexSC = styled(Flex)`
    min-height: 160px;
    max-width: 100dvw !important;
    
    @media (max-width: 700px) {
        overflow-x: auto ;
    }
`