import { Flex, Text } from "@chakra-ui/react";
import { IoWallet } from "react-icons/io5";

export default function Title() {
    return (
        <Flex alignItems={'center'}>
            <IoWallet fontSize={32} color="#125C13" />
            <Text fontWeight={700} fontSize={32} mb={3} ml={3}>
                Pagamento
            </Text>
        </Flex>
    )
}