import { Box, Divider, Flex, Spacer, Text } from "@chakra-ui/react";
import { calculateOrderPrice } from "../../utils/constants";

export default function Resume({ itens }) {
    if (itens.length > 0) {
        const totalPrice = calculateOrderPrice(itens);

        return (
            <Flex
                w={'100%'}
                direction={'column'} mt={'50px'}
                p={'30px 40px 20px'} border={'#C7C7C7 1px solid'}
                borderRadius={'5px'}
            >
                {itens.map((item, i) => (
                    <Box key={i}>
                        <Flex>
                            <Text fontWeight={400} fontSize={20} >
                                {item.quantity}x {item.product.name}
                            </Text>
                            <Spacer />
                            <Text fontWeight={400} fontSize={20} >
                                R${(item.quantity * (item.product.price - item.product.discount) / 100).toFixed(2).replace('.', ',')}
                            </Text>
                        </Flex>

                        {item.extras.length > 0 && item.extras.map(extra => (
                            <Flex key={extra.id}>
                                <Text fontWeight={400} fontSize={20} ml={'30px'}>
                                    {item.quantity}x {extra.name}
                                </Text>
                                <Spacer />
                                <Text fontWeight={400} fontSize={20} >
                                    R${(item.quantity * (extra.price - extra.discount) / 100).toFixed(2).replace('.', ',')}
                                </Text>
                            </Flex>
                        ))}

                        {item.obs && (
                            <Text fontWeight={400} fontSize={20} ml={'30px'} mt={2}>
                                OBS: {item.obs}
                            </Text>
                        )}
                    </Box>
                ))}

                <Divider variant={'dashed'} />

                <Text fontWeight={400} fontSize={20} textAlign={'left'}>
                    Total do pedido:
                </Text>
                <Text fontWeight={700} fontSize={36} textAlign={'left'}>
                    R$ {(totalPrice / 100).toFixed(2).replace('.', ',')}
                </Text>

            </Flex>
        )
    }
}