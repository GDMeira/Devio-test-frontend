import { Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea } from "@chakra-ui/react"
import ProductInfo from "./ProductInfo";
import { useEffect, useState } from "react";
import TitleSubtitle from "../Orders/TitleSubtitle";
import Extras from "./Extras";
import useProductsContext from "../../hooks/useProductsContext";
import Resume from "../Orders/Resume";

export default function OrderModal({ isOpen, onClose, selectedProduct, bgColor }) {
    const { extrasData } = useProductsContext();
    const [productNumber, setProductNumber] = useState(1);
    const [selectedExtras, setSelectedExtras] = useState({});
    const [obs, setObs] = useState('');
    const [item, setItem] = useState({});

    useEffect(() => {
        if (selectedProduct.productType) {
            const newItem = {
                quantity: productNumber,
                product: selectedProduct,
                extras: extrasData[selectedProduct.productType.toLowerCase() + 's'].filter(extra => selectedExtras[extra.id]),
                obs: obs
            };
            setItem(newItem);
        }
    }, [obs, selectedProduct, productNumber, selectedExtras]);

    return (
        <Modal
            onClose={onClose}
            isOpen={isOpen}
            scrollBehavior={'outside'}
            size={'6xl'}
        >
            <ModalOverlay />
            <ModalContent padding={'40px 5% 0'}>
                <ModalHeader fontSize={36}>Revise seu pedido!</ModalHeader>
                <ModalCloseButton fontSize={'20px'} color={'#9F9F9F'} />
                <ModalBody>
                    <ProductInfo
                        product={selectedProduct} productNumber={productNumber}
                        setProductNumber={setProductNumber} bgColor={bgColor}
                    />

                    <TitleSubtitle title={'Adicionais'} subtitle={'Selecione os ingrediente que você quer adicionar a mais.'} />
                    <Extras selectedExtras={selectedExtras} setSelectedExtras={setSelectedExtras} productType={selectedProduct.productType} />

                    <Text fontWeight={700} fontSize={24} mt={'7dvh'} mb={3}>
                        Observações
                    </Text>

                    <Textarea
                        bgColor={'#F4F4F4'}
                        minH={'15dvh'} placeholder="Adicione uma observação ao pedido"
                        value={obs} onChange={e => setObs(e.target.value)}
                    />

                    <Resume itens={[item]} />
                </ModalBody>
                <ModalFooter>
                    <Button
                        onClick={onClose} color={'#125C13'}
                        border={'#125C13 1px solid'}
                        borderRadius={'15px'} bgColor={'#fff'}
                        w={'17dvw'} h={'5dvh'}
                    >Continuar adicionando</Button>
                    <Button
                        onClick={onClose} color={'#fff'}
                        borderRadius={'15px'} bgColor={'#125C13'}
                        ml={'10dvw'} w={'15dvw'} h={'5dvh'}
                    >Finalizar pedido</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
