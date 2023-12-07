import { Box, Button, Flex, IconButton, Image, Spacer, Text } from "@chakra-ui/react";
import { IoMdCheckmark } from "react-icons/io";

export default function ProcessingOrderCard({ order }) {
    return (
        <Flex
            w={'80%'} h={'10dvh'}
            boxShadow={'0 10px 30px rgba(0, 0, 0, 0.2)'}
            alignItems={'center'} gap={5}
            p={'0 20px'} borderRadius={'10px'}
        >

            <Flex
                direction={'column'}
                justifyContent={'center'} alignItems={'center'}
                boxShadow={'0 10px 30px rgba(0, 0, 0, 0.2)'}
            >
                <Image
                    src={order.itens[0].product.image} alt={order.itens[0].product.name}
                    w={'8dvh'} h={'8dvh'}
                    borderRadius={'5px'}
                />
            </Flex>


            <Flex
                w={'10dvw'} h={'10dvh'}
                direction={'column'} justifyContent={'center'} textAlign={'left'}
            >
                <Box w={'10dvw'} >
                    <Text fontWeight={700} fontSize={18}>
                        {order.id} {order.clientName.length > 0 && `- ${order.clientName}`}
                    </Text>
                    <Text fontWeight={400} fontSize={14} color={'#6B6B6B'}>
                        {order.itens[0].quantity}x {order.itens[0].product.name}
                    </Text>
                </Box>

            </Flex>

            <Spacer />

            <Flex gap={3}>
                <Button bgColor={'#FAE5E5'} color={'#CF0404'} borderRadius={'15px'}>
                    X
                </Button>

                <IconButton
                    aria-label='Order is ready' icon={<IoMdCheckmark />}
                    bgColor={'#E5F5E6'} color={'#43B948'} borderRadius={'15px'}
                />
            </Flex>
        </Flex>
    )
}