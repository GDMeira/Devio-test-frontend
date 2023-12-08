import { Flex, Spacer, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styled from "styled-components";

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
        <FlexSC w={'100%'} mb={'30px'}>
            <FlexProcessingSC
                w={'50%'} direction="column"
                gap={'20px'} textAlign={'left'}
                borderRight={'5px solid #000'}
            >
                <TitleSC fontWeight={700} fontSize={70} mb={'20px'}>
                    Preparando
                </TitleSC>

                {orders?.processing?.length > 0 && orders.processing.map(order => (
                    <ClientSC key={order.id} fontWeight={700} fontSize={100} mb={'20px'} color={'#9F9F9F'}>
                        {order.id} {order.clientName.length > 0 && `- ${order.clientName}`}
                    </ClientSC>
                ))}
            </FlexProcessingSC>

            <Spacer />

            <FlexReadySC
                w={'40%'} direction="column"
                gap={'20px'} textAlign={'left'}

            >
                <TitleSC fontWeight={700} fontSize={70} mb={'20px'}>
                    Pronto
                </TitleSC>

                {orders?.ready?.length > 0 && orders.ready.map(order => (
                    <ClientSC key={order.id} fontWeight={700} fontSize={100} mb={'20px'} color={'#125C13'}>
                        {order.id} {order.clientName.length > 0 && `- ${order.clientName}`}
                    </ClientSC>
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

const TitleSC = styled(Text)`
    @media (max-width: 700px) {
        font-size: 40px !important;
    }
`

const ClientSC = styled(Text)`
    @media (max-width: 700px) {
        font-size: 50px !important;
    }
`