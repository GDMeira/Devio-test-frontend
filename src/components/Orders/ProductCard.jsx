import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";
import bgImage from "../../assets/backgroundFastFood.png";

export default function ProductCard({ product, bgColor }) {
    return (
        <ButtonSC 
            w={'15dvw'} h={'35dvh'} 
            minW={'200px'} minH={'250px'}
            bg={'none'} borderRadius={'20px'} 
            bgImage={bgImage} bgColor={bgColor} 
            mb={'7dvh'} mr={'2dvw'}
        >
            <Flex 
                direction={'column'} h={'30dvh'}
                justifyContent={'space-around'} alignItems={'center'} 
                zIndex={2} >
                <Image src={product.image} alt={product.name} w={'12dvh'} h={'12dvh'} />
                <Box w={'10dvw'} overflow={'hidden'} textOverflow={'ellipsis'}>
                    <Text fontWeight={700} fontSize={24}>
                        {product.name}
                    </Text>
                    <Text fontWeight={400} fontSize={12} >
                        {product.description}
                    </Text>
                </Box>
                <Text fontWeight={700} fontSize={20} >
                    R${(product.price / 100).toString().replace('.', ',')}
                </Text>
            </Flex>
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

    @media screen and (max-width: 700px) {
        margin-right: 1vw; 
    }
`;