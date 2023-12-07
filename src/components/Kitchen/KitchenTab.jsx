import { Flex, Spacer, Text } from "@chakra-ui/react";
import ProcessingOrderCard from "./ProcessingOrderCard";
import ReadyOrderCard from "./ReadyOrderCard";
import styled from "styled-components";

export default function KitchenTab({ orders, setOrders }) {
    return (
        <FlexSC w={'100%'} mb={'30px'}>
            <FlexProcessingSC 
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
            </FlexProcessingSC>

            <Spacer />

            <FlexReadySC
                w={'40%'} direction="column" 
                gap={'20px'} textAlign={'left'}
                
            >
                <Text fontWeight={700} fontSize={32} mb={'20px'}>
                    Pronto
                </Text>

                {orders?.ready?.length > 0 && orders.ready.map(order => (
                    <ReadyOrderCard key={order.id} order={order} setOrders={setOrders} />
                ))}
            </FlexReadySC>
        </FlexSC>
    )
}

const FlexSC = styled(Flex)`
    @media (max-width: 700px) {
        flex-direction: column !important;
    }
`

const FlexProcessingSC = styled(Flex)`
    @media (max-width: 700px) {
        width: 100% !important;
        border: none !important;
    }
`

const FlexReadySC = styled(Flex)`
    @media (max-width: 700px) {
        width: 100% !important;
        border: none !important;
        margin-top: 20px;
    }
`