import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Text, Textarea } from "@chakra-ui/react"
import ResumeOrder from "./ResumeOrder";
import usePatchOrder from "../../hooks/api/usePatchOrder";
import useGetOrders from "../../hooks/api/useGetOrders";
import { enumOrderStatus } from "../../utils/constants";
import styled from "styled-components";

export default function ProcessingOrderModal({ isOpen, onClose, order, setOrders }) {
    const { patchOrder } = usePatchOrder();
    const { getOrders } = useGetOrders();

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
        <Modal
            onClose={onClose}
            isOpen={isOpen}
            scrollBehavior={'outside'}
            size={'6xl'}
        >
            <ModalOverlay />
            <ModalContent padding={'40px 5% 0'}>
                <ModalHeader fontSize={36}>
                    {order.id} {order.clientName.length > 0 && `- ${order.clientName}`}
                </ModalHeader>
                <ModalCloseButton fontSize={'20px'} color={'#9F9F9F'} />
                <ModalBody>
                    <ResumeOrder itens={order.itens} />
                </ModalBody>
                <ModalFooter>
                    <ButtonSC
                        onClick={(e) => {
                            handleCanceledClick(e);
                            onClose();
                        }}
                        color={'#125C13'}
                        border={'#125C13 1px solid'}
                        borderRadius={'15px'} bgColor={'#fff'}
                        minW={'17dvw'} h={'5dvh'}
                    >Cancelar pedido</ButtonSC>
                    <ButtonSC
                        onClick={(e) => {
                            handleReadyClick(e)
                            onClose();
                        }}
                        color={'#fff'}
                        borderRadius={'15px'} bgColor={'#125C13'}
                        ml={'10dvw'} minW={'15dvw'} h={'5dvh'}
                    >Pedido pronto!</ButtonSC>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

const ButtonSC = styled(Button)`
    @media (max-width: 700px) {
        font-size: 14px !important;
    }
`