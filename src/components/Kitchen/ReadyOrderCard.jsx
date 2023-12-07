import { Box, Button, Flex, IconButton, Image, Spacer, Text } from "@chakra-ui/react";

import { enumOrderStatus } from "../../utils/constants";
import usePatchOrder from "../../hooks/api/usePatchOrder";
import useGetOrders from "../../hooks/api/useGetOrders";

export default function ReadyOrderCard({ order, setOrders }) {
    const { patchOrder } = usePatchOrder();
    const { getOrders } = useGetOrders();

    async function handleDeliveredClick() {
        await patchOrder(enumOrderStatus.delivered, order.id);
        const orders = await getOrders();
        setOrders(orders);
    }

    return (
        <Flex
            w={'80%'} h={'10dvh'}
            boxShadow={'0 10px 30px rgba(67, 185, 72, 0.2)'} border={'1px solid #43B948'}
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

            <Button 
                bgColor={'#FAE5E5'} color={'#CF0404'} 
                borderRadius={'15px'} onClick={handleDeliveredClick}
            >
                X
            </Button>
        </Flex>
    )
}