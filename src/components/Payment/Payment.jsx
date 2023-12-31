import { Box, Button, Flex, Spacer, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

import useItensContext from "../../hooks/useItensContext";
import useGetOrderCode from "../../hooks/api/useGetOrderCode";

import { calculateOrderPrice, enumPaidWith, thermalPrint } from "../../utils/constants";

import Resume from "../Orders/Resume";
import NameInput from "./NameInput";
import Code from "./Code";
import Title from "./Title";
import PaymentMethod from "./PaymentMethod";
import usePostOrder from "../../hooks/api/usePostOrder";

export default function Payment() {
    const { getOrderCode } = useGetOrderCode();
    const { postOrder, postOrderLoading } = usePostOrder();
    const { itens, setItens, setFinishingOrder } = useItensContext();
    const [name, setName] = useState('');
    const [code, setCode] = useState('...');
    const [paymentMethod, setPaymentMethod] = useState({
        debitCard: false,
        creditCard: false,
        cash: true
    });
    const totalPrice = calculateOrderPrice(itens);
    const [cashReceived, setCashReceived] = useState(totalPrice);
    const toast = useToast();

    useEffect(() => {
        async function getCode() {
            const response = await getOrderCode();
            setCode(response.code);
        };

        getCode();
    }, [])

    async function finishOrder() {
        let paidWith = '';

        Object.entries(paymentMethod).forEach(([key, value]) => {
            if (value) {
                paidWith = enumPaidWith[key];
            }
        });

        const order = {
            clientName: name,
            paymentMethod: paidWith,
            itens: itens.map(item => ({
                quantity: item.quantity,
                note: item.obs,
                productId: item.product.id,
                extras: (item.extras.length > 0 ? item.extras.map(extra => extra.id) : [])
            }))
        };

        let response = {};

        try {
            response = await postOrder(order);
            Swal.fire({
                title: 'Sucesso!',
                icon: 'success',
                text: 'Pedido enviado para cozinha.'
            });
        } catch (error) {
            Swal.fire({
                title: 'Falha!',
                icon: 'error',
                text: `Falha ao finalizar pedido.`
            });

            return
        }

        try {
            thermalPrint(order, itens, response.code, totalPrice);
        } catch (error) {
            toast({
                title: 'Erro!',
                description: "Ocorreu uma falha na impressão do recibo.",
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top-right',
              })
        } finally {
            setItens([]);
            setFinishingOrder(false);
        }
        
    }

    return (
        <Box textAlign={'left'}>
            <Title />

            <FlexSC w={'100%'} mt={'40px'}>
                <BoxSC w={'45%'}>
                    <TextSC fontWeight={700} mb={-7}>
                        Resumo da compra
                    </TextSC>
                    <Resume itens={itens} />

                    <Flex mt={5}>
                        <NameInput name={name} setName={setName} />

                        <Spacer />

                        <Code code={code} />
                    </Flex>
                </BoxSC>

                <Spacer />

                <PaymentMethod
                    paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod}
                    cashReceived={cashReceived} setCashReceived={setCashReceived}
                    totalPrice={totalPrice}
                />
            </FlexSC>

            <Flex justifyContent={'flex-end'} w={'100%'} m={'50px 0'}>
                <Button
                    onClick={() => {
                        setFinishingOrder(false);
                    }}
                    color={'#125C13'}
                    border={'#125C13 1px solid'}
                    borderRadius={'15px'} bgColor={'#fff'}
                    minW={'20dvw'} h={'6dvh'}
                    isDisabled={postOrderLoading}
                >Cancelar</Button>
                <Button
                    onClick={() => finishOrder()}
                    color={'#fff'}
                    borderRadius={'15px'} bgColor={'#125C13'}
                    ml={'10dvw'} minW={'20dvw'} h={'6dvh'}
                    isLoading={postOrderLoading}
                >
                    Finalizar pedido
                </Button>
            </Flex>
        </Box>
    )
}

export const TextSC = styled(Text)`
    font-size: 18px;
`

const FlexSC = styled(Flex)`
    @media (max-width: 700px) {
        flex-direction: column !important;
    }
`

const BoxSC = styled(Box)`
    @media (max-width: 700px) {
        width: 100% !important;
    }
`