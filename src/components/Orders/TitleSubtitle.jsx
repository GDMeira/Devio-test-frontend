import { Text } from "@chakra-ui/react";
import styled from "styled-components";

export default function TitleSubtitle({ title, subtitle }) {
    return (
        <>
            <TitleSC fontWeight={700} fontSize={24} mt={'7dvh'} mb={3}>
                {title}
            </TitleSC>
            <TextSC fontWeight={400} fontSize={18} mb={5} color={'#6B6B6B'} textAlign={'left'}>
                {subtitle}
            </TextSC>
        </>
    )
}

const TitleSC = styled(Text)`
    @media (max-width: 700px) {
        font-size: 18px !important;
    }
`

const TextSC = styled(Text)`
    @media (max-width: 700px) {
        font-size: 14px !important;
    }
`