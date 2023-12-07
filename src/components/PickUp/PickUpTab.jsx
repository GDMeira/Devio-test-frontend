import { Flex, Spacer, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function PickUpTab({ orders }) {
    const [oldReadyOrders, setOldReadyOrders] = useState([]);

    useEffect(() => {
        const audio = new Audio("/audio.wav");

        let hasNewOrders = false;

        if (orders?.ready?.length > 0) {
            hasNewOrders = orders.ready.some(order => {
                return !(oldReadyOrders.some(oldOrder => oldOrder.id === order.id))
            })
        }

        if (hasNewOrders) {
            audio.play();
            setOldReadyOrders(orders.ready);
        }
    }, [orders]);

    return (
        <Flex w={'100%'} mb={'30px'}>
            <Flex
                w={'50%'} direction="column"
                gap={'20px'} textAlign={'left'}
                borderRight={'5px solid #000'}
            >
                <Text fontWeight={700} fontSize={70} mb={'20px'}>
                    Preparando
                </Text>

                {orders?.processing?.length > 0 && orders.processing.map(order => (
                    <Text key={order.id} fontWeight={700} fontSize={100} mb={'20px'} color={'#9F9F9F'}>
                        {order.id} {order.clientName.length > 0 && `- ${order.clientName}`}
                    </Text>
                ))}
            </Flex>

            <Spacer />

            <Flex
                w={'40%'} direction="column"
                gap={'20px'} textAlign={'left'}

            >
                <Text fontWeight={700} fontSize={70} mb={'20px'}>
                    Pronto
                </Text>

                {orders?.ready?.length > 0 && orders.ready.map(order => (
                    <Text key={order.id} fontWeight={700} fontSize={100} mb={'20px'} color={'#125C13'}>
                        {order.id} {order.clientName.length > 0 && `- ${order.clientName}`}
                    </Text>
                ))}
            </Flex>
        </Flex>
    )
}