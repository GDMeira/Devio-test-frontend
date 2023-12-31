import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";
import bgImage from "../../assets/backgroundFastFood.png";
import useProductsContext from "../../hooks/useProductsContext";

export default function ProductCard({ product, bgColor, setSelectedProduct, onOpen, setBgColor }) {
    const {setProductsFilter} = useProductsContext();

    return (
        <ButtonSC 
            w={'15dvw'} h={'35dvh'} 
            minW={'150px'} minH={'200px'}
            bg={'none'} borderRadius={'20px'} 
            bgImage={bgImage} bgColor={bgColor} 
            mb={'7dvh'} mr={'2dvw'}
            onClick={() => {
                setSelectedProduct(product);
                setProductsFilter({category: '', nameOrId: ''});
                setBgColor(bgColor);
                onOpen();
            }}
        >
            <FlexSC
                direction={'column'} h={'30dvh'}
                justifyContent={'space-around'} alignItems={'center'} 
                zIndex={2} >
                <Image src={product.image} alt={product.name} w={'13dvh'} h={'13dvh'} />
                <BoxSC w={'10dvw'} overflow={'hidden'} textOverflow={'ellipsis'}>
                    <Text fontWeight={700} fontSize={24}>
                        {product.name}
                    </Text>
                    <Text fontWeight={400} fontSize={12} color={'#6B6B6B'}>
                        {product.description}
                    </Text>
                </BoxSC>
                <Text fontWeight={700} fontSize={20} >
                    R${((product.price - product.discount) / 100).toFixed(2).replace('.', ',')}
                </Text>
            </FlexSC>
            <Box
                position={'absolute'} bottom={0}
                w={'100%'} h={'60%'}
                bgColor={'#fff'} borderRadius={'20px'}
            ></Box>
        </ButtonSC>
    )
}

const ButtonSC = styled(Button)`
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    background-size: cover !important;
    background-position: center !important;
    margin-right: 2vw;

    &:nth-child(4n) { 
        margin-right: 0;
    }

    @media screen and (max-width: 1080px) {
        margin-right: 1vw !important;
        
    }

    @media (max-width: 700px) {
        margin-right: 1vw; 
        height: 250px !important;
    }
`;

const BoxSC = styled(Box)`
    @media (max-width: 700px) {
        width: 30dvw !important; 
    }
`;

const FlexSC = styled(Flex)`
    @media (max-width: 700px) {
        height: 25dvh !important;
        
        img {
            height: 11dvh !important;
            width: 11dvh !important;
        }
    }
`;