import { Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Text, Textarea } from "@chakra-ui/react"
import ProductInfo from "./ProductInfo";
import { useEffect, useState } from "react";
import TitleSubtitle from "../Orders/TitleSubtitle";
import Extras from "./Extras";
import useProductsContext from "../../hooks/useProductsContext";
import Resume from "../Orders/Resume";
import useItensContext from "../../hooks/useItensContext";
import { productTypeEnumToAtrrs } from "../../utils/constants";
import styled from "styled-components";

export default function OrderModal({ isOpen, onClose, selectedProduct, bgColor }) {
    const { extrasData } = useProductsContext();
    const { setItens, setFinishingOrder } = useItensContext();
    const [productNumber, setProductNumber] = useState(1);
    const [selectedExtras, setSelectedExtras] = useState({});
    const [obs, setObs] = useState('');
    const [item, setItem] = useState({});
    const productType = productTypeEnumToAtrrs[selectedProduct.productType];

    function cleanStates() {
        setProductNumber(1);
        setSelectedExtras({});
        setObs('');
        setItem({});
    }

    useEffect(() => {
        if (selectedProduct.productType) {
            const newItem = {
                quantity: productNumber,
                product: selectedProduct,
                extras: extrasData[productType].filter(extra => selectedExtras[extra.id]),
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
            <ModalContentSC padding={'40px 5% 0'}>
                <ModalHeader fontSize={36}>Revise seu pedido!</ModalHeader>
                <ModalCloseButton fontSize={'20px'} color={'#9F9F9F'} />
                <ModalBody>
                    {item.quantity ? (
                        <>
                            <ProductInfo
                                product={selectedProduct} productNumber={productNumber}
                                setProductNumber={setProductNumber} bgColor={bgColor}
                            />

                            <TitleSubtitle title={'Adicionais'} subtitle={'Selecione os ingrediente que você quer adicionar a mais.'} />
                            <Extras selectedExtras={selectedExtras} setSelectedExtras={setSelectedExtras} productType={productType} />

                            <Text fontWeight={700} fontSize={24} mt={'7dvh'} mb={3}>
                                Observações
                            </Text>

                            <Textarea
                                bgColor={'#F4F4F4'}
                                minH={'15dvh'} placeholder="Adicione uma observação ao pedido"
                                value={obs} onChange={e => setObs(e.target.value)}
                            />

                            <Resume itens={[item]} />
                        </>
                    ) : (
                        <Spinner size={'xl'}/>
                    )}
                </ModalBody>
                <ModalFooter>
                    <ButtonSC
                        onClick={() => {
                            setItens(itens => [...itens, { ...item }]);
                            cleanStates();
                            onClose();
                        }}
                        color={'#125C13'}
                        border={'#125C13 1px solid'}
                        borderRadius={'15px'} bgColor={'#fff'}
                        minW={'17dvw'} h={'5dvh'}
                    >Continuar adicionando</ButtonSC>
                    <ButtonSC
                        onClick={() => {
                            setItens(itens => [...itens, { ...item }]);
                            setFinishingOrder(true);
                            cleanStates();
                            onClose();
                        }}
                        color={'#fff'}
                        borderRadius={'15px'} bgColor={'#125C13'}
                        ml={'10dvw'} minW={'15dvw'} h={'5dvh'}
                    >Finalizar pedido</ButtonSC>
                </ModalFooter>
            </ModalContentSC>
        </Modal>
    )
}

const ModalContentSC = styled(ModalContent)`
    @media (max-width: 700px) {
        padding: 0 !important;
    }
`

const ButtonSC = styled(Button)`
    @media (max-width: 700px) {
        font-size: 14px !important;
    }
`