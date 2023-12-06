import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styled from "styled-components";

import useItensContext from "../../hooks/useItensContext";
import useGetOrderCode from "../../hooks/api/useGetOrderCode";

import { calculateOrderPrice } from "../../utils/constants";

import Resume from "../Orders/Resume";
import NameInput from "./NameInput";
import Code from "./Code";
import Title from "./Title";
import PaymentMethod from "./PaymentMethod";

export default function Payment() {
    const { getOrderCode } = useGetOrderCode();
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

    useEffect(() => {
        async function getCode() {
            const response = await getOrderCode();
            setCode(response.code);
        };

        getCode();
    }, [])

    return (
        <Box textAlign={'left'}>
            <Title />

            <Flex w={'100%'} mt={'40px'}>
                <Box w={'45%'}>
                    <TextSC fontWeight={700} mb={-7}>
                        Resumo da compra
                    </TextSC>
                    <Resume itens={itens} />

                    <Flex mt={5}>
                        <NameInput name={name} setName={setName} />

                        <Spacer />

                        <Code code={code} />
                    </Flex>
                </Box>

                <Spacer />

                <PaymentMethod
                    paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod}
                    cashReceived={cashReceived} setCashReceived={setCashReceived}
                    totalPrice={totalPrice}
                />
            </Flex>

            <Flex justifyContent={'flex-end'} w={'100%'} m={'50px 0'}>
                <Button
                    onClick={() => {
                        setFinishingOrder(false);
                        setItens([])
                    }}
                    color={'#125C13'}
                    border={'#125C13 1px solid'}
                    borderRadius={'15px'} bgColor={'#fff'}
                    w={'20dvw'} h={'6dvh'}
                >Cancelar</Button>
                <Button
                    onClick={() => console.log('finalizando')}
                    color={'#fff'}
                    borderRadius={'15px'} bgColor={'#125C13'}
                    ml={'10dvw'} w={'20dvw'} h={'6dvh'}
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