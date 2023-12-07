import { Box, Button, Flex, IconButton, Image, Spacer, Text, useDisclosure } from "@chakra-ui/react";
import { IoMdCheckmark } from "react-icons/io";

import usePatchOrder from "../../hooks/api/usePatchOrder";
import { enumOrderStatus } from "../../utils/constants";
import useGetOrders from "../../hooks/api/useGetOrders";
import ProcessingOrderModal from "./ProcessingOrderModal";
import styled from "styled-components";

export default function ProcessingOrderCard({ order, setOrders }) {
    const { patchOrder } = usePatchOrder();
    const { getOrders } = useGetOrders();
    const { isOpen, onOpen, onClose } = useDisclosure();

    async function handleCanceledClick(e) {
        e.stopPropagation();
        await patchOrder(enumOrderStatus.canceled, order.id);
        const orders = await getOrders();
        setOrders(orders);
    }

    async function handleReadyClick(e) {
        e.stopPropagation();
        await patchOrder(enumOrderStatus.ready, order.id);
        const orders = await getOrders();
        setOrders(orders);
    }

    return (
        <FlexSC
            w={'80%'} minH={'10dvh'}
            boxShadow={'0 10px 30px rgba(0, 0, 0, 0.2)'}
            alignItems={'center'} gap={5}
            p={'0 20px'} borderRadius={'10px'}
            cursor={'pointer'}
            onClick={onOpen}
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
                <BoxSC w={'10dvw'} >
                    <Text fontWeight={700} fontSize={18}>
                        {order.id} {order.clientName.length > 0 && `- ${order.clientName}`}
                    </Text>
                    <Text fontWeight={400} fontSize={14} color={'#6B6B6B'}>
                        {order.itens[0].quantity}x {order.itens[0].product.name}
                    </Text>
                </BoxSC>

            </Flex>

            <Spacer />

            <Flex gap={3}>
                <Button 
                    bgColor={'#FAE5E5'} color={'#CF0404'} 
                    borderRadius={'15px'} onClick={handleCanceledClick}
                >
                    X
                </Button>

                <IconButton
                    aria-label='Order is ready' icon={<IoMdCheckmark />}
                    bgColor={'#E5F5E6'} color={'#43B948'} borderRadius={'15px'}
                    onClick={handleReadyClick}
                />
            </Flex>

            <ProcessingOrderModal isOpen={isOpen} onClose={onClose} order={order} setOrders={setOrders} />
        </FlexSC>
    )
}

const FlexSC = styled(Flex)`
    @media (max-width: 700px) {
        width: 100% !important;
    }
`

const BoxSC = styled(Box)`
    @media (max-width: 700px) {
        width: 25dvw !important;
    }
`