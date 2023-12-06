import { Box, Flex, Image, Radio, Spacer, Text } from "@chakra-ui/react";
import { centsToReal } from "../../utils/constants";
import CustomRadio from "../CustomRadio";

export default function ExtraCard({ extra, selectedExtras, setSelectedExtras }) {
    

    return (
        <Flex mt={'30px'} alignItems={'center'}>

            <Image
                src={extra.image} alt={extra.name}
                w={'10dvh'} h={'10dvh'}
                borderRadius={'10px'}
                boxShadow={'0 10px 30px rgba(0, 0, 0, 0.2)'}
                mr={10}
            />

            <Box minH={'6.5dvh'} w={'40dvw'} >
                <Text fontWeight={700} fontSize={24}>
                    {extra.name}
                </Text>
                <Text fontWeight={400} fontSize={16} color={'#6B6B6B'}>
                    {extra.description}
                </Text>
            </Box>

            <Spacer />

            <Text fontWeight={700} fontSize={20} color={'#9F9F9F'}>
                {centsToReal(extra.price - extra.discount)}
            </Text>

            <Spacer />

            
            <CustomRadio 
                selected={selectedExtras[extra.id]}
                onClick={() => setSelectedExtras({ ...selectedExtras, [extra.id]: !selectedExtras[extra.id] })}
            />

        </Flex>
    )
}