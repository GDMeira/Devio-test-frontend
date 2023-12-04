import { Box, Button, Flex, Image, Input, InputGroup, InputLeftElement, InputRightElement, Spacer, Text } from "@chakra-ui/react";
import bgImage from "../../assets/backgroundFastFood.png";

export default function ProductInfo({ product, productNumber, setProductNumber, bgColor }) {
    return (
        <Flex w={'100%'} h={'20dvh'}>
            <Box
                w={'20dvh'} h={'20dvh'}

                bg={'none'} borderRadius={'20px'}
                bgImage={bgImage} bgColor={bgColor}
                mb={'7dvh'} mr={'2dvw'}
                position={'relative'} bgSize={'cover'}
                boxShadow={'0 10px 30px rgba(0, 0, 0, 0.2)'}
            >
                <Flex
                    direction={'column'} h={'100%'}
                    justifyContent={'center'} alignItems={'center'}
                    zIndex={2} >
                    <Image src={product.image} alt={product.name} w={'12dvh'} h={'12dvh'} zIndex={2} />
                </Flex>
                <Box
                    position={'absolute'} bottom={0}
                    w={'100%'} h={'50%'}
                    bgColor={'#fff'} borderRadius={'20px'}
                ></Box>
            </Box>

            <Flex w={'20dvw'} h={'20dvh'} direction={'column'} justifyContent={'space-between'}>
                <Box w={'20dvw'} >
                    <Text fontWeight={700} fontSize={24}>
                        {product.name}
                    </Text>
                    <Text fontWeight={400} fontSize={14} >
                        {product.description}
                    </Text>
                </Box>
                <InputGroup w={'120px'}>
                    <InputLeftElement>
                        <Button borderRadius={'50%'} bgColor={'#125C13'} color={'#fff'} fontSize={30}
                            onClick={() => setProductNumber(n => n > 1 ? n - 1 : n)}
                        >-</Button>
                    </InputLeftElement >
                    <Input
                        value={productNumber} borderRadius={'30px'}
                        textAlign={'center'} border={'2px solid #125C13'}
                        type="number"
                        onChange={e => setProductNumber(e.target.value)}
                    />
                    <InputRightElement>
                        <Button borderRadius={'50%'} bgColor={'#125C13'} color={'#fff'} fontSize={30}
                            onClick={() => setProductNumber(n => n + 1)}
                        >+</Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>

            <Spacer/>
    
            <Text fontWeight={700} fontSize={20} >
                R${((product.price - product.discount) / 100).toFixed(2).replace('.', ',')}
            </Text>
        </Flex>
    )
}