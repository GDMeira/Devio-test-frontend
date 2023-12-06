import { Box, Flex } from "@chakra-ui/react";
import { TextSC } from "./Payment";

export default function Code({ code }) {
    return (
        <Box w={'20%'}>
            <TextSC fontWeight={700} mt={3}>
                Código
            </TextSC>
            <Flex fontWeight={500} h={'40px'} bgColor={'#EDEDEF'} justifyContent={'center'} alignItems={'center'}>
                {code}
            </Flex>
        </Box>
    )
}