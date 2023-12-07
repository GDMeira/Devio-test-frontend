import { Box, Button, Flex, Input, InputGroup, InputRightElement, Spacer, VStack } from "@chakra-ui/react";
import { centsToReal, realToCents } from "../../utils/constants";
import { TextSC } from "./Payment";
import MethodButton from "./MethodButton";
import styled from "styled-components";

export default function PaymentMethod({ 
    paymentMethod,
    setPaymentMethod,
    cashReceived,
    setCashReceived,
    totalPrice
}) {
    function handlePayment(method) {
        const newPayment = {...paymentMethod};

        Object.keys(newPayment).forEach(key => {
            if (key === method) {
                newPayment[key] = true;
            } else {
                newPayment[key] = false;
            }
        })

        setPaymentMethod(newPayment);
        setCashReceived(totalPrice);
    }


    return (
        <BoxSC w={'45%'}>
            <TextSC fontWeight={700}>
                Selecione a forma de pagamento:
            </TextSC>

            <VStack gap={3} mt={4}>
                {Object.entries(paymentMethod).map(([key, value]) => (
                    <MethodButton
                        key={key} 
                        selected={value} method={key}
                        onClick={() => handlePayment(key)}
                    />
                ))}
            </VStack>


            <Flex mt={5}>
                <Box w={'45%'}>
                    <TextSC fontWeight={700} mt={3}>
                        Valor entregue
                    </TextSC>
                    <InputGroup boxShadow={'0px 24px 48px 0px #314F7C14'}>
                        <Input
                            bgColor={'#EDEDEF'}
                            borderRadius={'5px'}
                            type="text"
                            placeholder="Primeiro nome"
                            onChange={e => setCashReceived(realToCents(e.target.value))}
                            value={'R$ ' + centsToReal(cashReceived)}
                            disabled={!paymentMethod.cash}
                        />
                        <InputRightElement >
                            <Button
                                onClick={() => setCashReceived(totalPrice)}
                                bg={'none'}
                                isDisabled={!paymentMethod.cash}
                            >
                                X
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Box>

                <Spacer />

                <Box w={'45%'}>
                    <TextSC fontWeight={700} mt={3}>
                        Troco
                    </TextSC>
                    <Flex fontWeight={500} h={'40px'} bgColor={'#EDEDEF'} justifyContent={'center'} alignItems={'center'}>
                        R$ {centsToReal(cashReceived - totalPrice)}
                    </Flex>
                </Box>
            </Flex>
        </BoxSC>
    )
}

const BoxSC = styled(Box)`
    @media (max-width: 700px) {
        width: 100% !important;
        margin-top: 20px;
    }
`