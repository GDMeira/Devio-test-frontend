import { Button, Flex, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";
import { productCategories } from "../../utils/constants";
import useProductsContext from "../../hooks/useProductsContext";

export default function CategoryCard({categoryName, imageUrl}) {
    const {setProductsFilter} = useProductsContext();
    const category = productCategories[categoryName];

    return (
        <ButtonSC 
            w={'17dvw'} h={'20dvh'} 
            minW={'150px'} mr={'10px'}
            bg={'none'} borderRadius={'10px'} 
            onClick={() => setProductsFilter(e => ({...e, category: categoryName}))}
        >
            <Flex direction={'column'} justifyContent={'center'} alignItems={'center'}>
                <Image src={imageUrl} alt={categoryName} w={'12dvh'} h={'12dvh'}/>
                <TextSC fontWeight={700} fontSize={24} mt={'1dvh'}>
                {category[0].toUpperCase() + category.slice(-category.length + 1)}
            </TextSC>
            </Flex>
        </ButtonSC>
    )
}

const ButtonSC = styled(Button)`
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    @media(max-width: 700px){
        width: 22dvw !important;
    }
`;

const TextSC = styled(Text)`
    @media(max-width: 1500px){
        font-size: 18px !important;
    }
    @media(max-width: 1110px){
        font-size: 12px !important;
    }
`