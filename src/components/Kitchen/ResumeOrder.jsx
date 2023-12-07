import { Box, Divider, Flex, Spacer, Text } from "@chakra-ui/react";
import { calculateOrderPrice } from "../../utils/constants";

export default function ResumeOrder({ itens }) {

        return (
            <Flex
                w={'100%'}
                direction={'column'} mt={'50px'}
                p={'30px 40px 20px'} border={'#C7C7C7 1px solid'}
                borderRadius={'5px'}
            >
                {itens.map((item, i) => (
                    <Box key={i}>
                        <Flex m={'20px'}>
                            <Text fontWeight={700} fontSize={32} >
                                {item.quantity}x {item.product.name}
                            </Text>
                        </Flex>

                        {item.extras.length > 0 && item.extras.map(extra => (
                            <Flex key={extra.id}>
                                <Text fontWeight={400} fontSize={24} ml={'50px'}>
                                    {item.quantity}x {extra.name}
                                </Text>
                            </Flex>
                        ))}

                        {item.note && (
                            <Text fontWeight={400} fontSize={24} ml={'50px'} mt={2}>
                                <b>Observação</b>: {item.note}
                            </Text>
                        )}
                    </Box>
                ))}

            </Flex>
        )
}