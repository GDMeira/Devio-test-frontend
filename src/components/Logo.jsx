import { Button, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { LiaHamburgerSolid } from "react-icons/lia";

export default function Logo({setTabIndex}) {
    return (
        <ButtonSC
            onClick={() => setTabIndex(0)}
        >
            <Flex
                bgColor={'#fff'} borderRadius={'50%'}
                w={'25px'} h={'25px'}
                justifyContent={'center'} alignItems={'center'}
                mr={1}
            >
                <LiaHamburgerSolid color="#000" size={23} />
            </Flex>
            fastfood
        </ButtonSC>
    )
}

const ButtonSC = styled(Button)`
    color: #fff !important;
    font-size: 20px !important;
    height: 7dvh !important;
    background: none !important;
    text-align: center !important;
`;

