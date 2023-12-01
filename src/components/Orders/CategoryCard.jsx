import { Button, Flex, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";

export default function CategoryCard({categoryName, imageUrl}) {
    return (
        <ButtonSC w={'17dvw'} h={'20dvh'} bg={'none'} borderRadius={'10px'} >
            <Flex direction={'column'} justifyContent={'center'} alignItems={'center'}>
                <Image src={imageUrl} alt={categoryName} w={'12dvh'} h={'12dvh'}/>
                <Text fontWeight={700} fontSize={24} mt={'1dvh'}>
                {categoryName[0].toUpperCase() + categoryName.slice(-categoryName.length + 1)}
            </Text>
            </Flex>
        </ButtonSC>
    )
}

const ButtonSC = styled(Button)`
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;