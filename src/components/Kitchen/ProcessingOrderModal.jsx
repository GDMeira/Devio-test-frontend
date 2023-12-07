import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Text, Textarea } from "@chakra-ui/react"
import ResumeOrder from "./ResumeOrder";
import usePatchOrder from "../../hooks/api/usePatchOrder";
import useGetOrders from "../../hooks/api/useGetOrders";
import { enumOrderStatus } from "../../utils/constants";

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
                    <Button
                        onClick={(e) => {
                            handleCanceledClick(e);
                            onClose();
                        }}
                        color={'#125C13'}
                        border={'#125C13 1px solid'}
                        borderRadius={'15px'} bgColor={'#fff'}
                        w={'17dvw'} h={'5dvh'}
                    >Cancelar pedido</Button>
                    <Button
                        onClick={(e) => {
                            handleReadyClick(e)
                            onClose();
                        }}
                        color={'#fff'}
                        borderRadius={'15px'} bgColor={'#125C13'}
                        ml={'10dvw'} w={'15dvw'} h={'5dvh'}
                    >Pedido pronto!</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
