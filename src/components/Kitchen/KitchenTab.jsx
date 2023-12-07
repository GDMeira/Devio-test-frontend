import { Flex, Spacer, Text } from "@chakra-ui/react";
import ProcessingOrderCard from "./ProcessingOrderCard";
import ReadyOrderCard from "./ReadyOrderCard";

export default function KitchenTab({ orders, setOrders }) {
    //TODO: setOrders quando der update em uma order
    console.log(orders)
    return (
        <Flex w={'100%'} mb={'30px'}>
            <Flex 
                w={'50%'} direction="column" 
                gap={'20px'} textAlign={'left'}
                borderRight={'1px solid #000'}
            >
                <Text fontWeight={700} fontSize={32} mb={'20px'}>
                    Preparando
                </Text>

                {orders?.processing?.length > 0 && orders.processing.map(order => (
                    <ProcessingOrderCard key={order.id} order={order} setOrders={setOrders} />
                ))}
            </Flex>

            <Spacer />

            <Flex 
                w={'40%'} direction="column" 
                gap={'20px'} textAlign={'left'}
                
            >
                <Text fontWeight={700} fontSize={32} mb={'20px'}>
                    Pronto
                </Text>

                {orders?.ready?.length > 0 && orders.ready.map(order => (
                    <ReadyOrderCard key={order.id} order={order} setOrders={setOrders} />
                ))}
            </Flex>
        </Flex>
    )
}