import styled from "styled-components";
import { Button, Flex, Spacer, Text } from "@chakra-ui/react";

import { CiCreditCard1 } from "react-icons/ci";
import { RiCashFill } from "react-icons/ri";

import CustomRadio from "../CustomRadio";
import { paymentMethods } from "../../utils/constants";

export default function MethodButton({ selected, method, ...props }) {

    return (
        <ButtonSC
            $selected={selected}
            {...props}
        >
            <Flex w={'90%'} alignItems={'center'}>
                {method === 'cash' ? (
                    <RiCashFill fontSize={32} color="#125C13" />
                ) : (
                    <CiCreditCard1 fontSize={32} color="#125C13" />
                )}

                <Text fontWeight={700} ml={5} fontSize={20}>
                    {paymentMethods[method]}
                </Text>

                <Spacer />

                <CustomRadio selected={selected} />
            </Flex>
        </ButtonSC>
    )
}

const ButtonSC = styled(Button)`
    width: 100%;
    min-height: 50px;
    height: 7dvh !important;
    border: ${props => props.$selected ? '#125C13' : '#C7C7C7'} 1px solid;
    background: none !important;
`