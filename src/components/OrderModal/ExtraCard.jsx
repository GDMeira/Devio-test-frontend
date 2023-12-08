import { Box, Flex, Image, Radio, Spacer, Text } from "@chakra-ui/react";
import { centsToReal } from "../../utils/constants";
import CustomRadio from "../CustomRadio";
import styled from "styled-components";

export default function ExtraCard({ extra, selectedExtras, setSelectedExtras }) {
    

    return (
        <Flex mt={'30px'} alignItems={'center'}>

            <ImageSC
                src={extra.image} alt={extra.name}
                w={'10dvh'} h={'10dvh'}
                borderRadius={'10px'}
                boxShadow={'0 10px 30px rgba(0, 0, 0, 0.2)'}
                mr={10}
            />

            <Box minH={'6.5dvh'} maxH={'10dvh'} w={'40dvw'} overflow={'hidden'}>
                <TitleSC fontWeight={700} fontSize={24}>
                    {extra.name}
                </TitleSC>
                <TextSC fontWeight={400} fontSize={16} color={'#6B6B6B'}>
                    {extra.description}
                </TextSC>
            </Box>

            <Spacer />

            <TextSC fontWeight={700} fontSize={20} color={'#9F9F9F'}>
                R${centsToReal(extra.price - extra.discount)}
            </TextSC>

            <Spacer />

            
            <CustomRadio 
                selected={selectedExtras[extra.id]}
                onClick={() => setSelectedExtras({ ...selectedExtras, [extra.id]: !selectedExtras[extra.id] })}
            />

        </Flex>
    )
}

const TitleSC = styled(Text)`
    @media (max-width: 700px) {
        font-size: 16px !important;
    }
`

const TextSC = styled(Text)`
    @media (max-width: 700px) {
        font-size: 14px !important;
    }
`

const ImageSC = styled(Image)`
    @media (max-width: 700px) {
       margin-right: 10px !important;
    }
`