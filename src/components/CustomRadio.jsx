import { Flex } from "@chakra-ui/react";

export default function CustomRadio({ selected, ...props }) {

    return (
        <Flex {...props}
            w={'20px'} h={'20px'}
            justifyContent={'center'} alignItems={'center'}
            border={'1px solid #125C13'} borderRadius={'full'}
        >
            {selected && (
                <Flex
                    w={'18px'} h={'18px'}
                    bgColor={'#125C13'} borderRadius={'full'}
                ></Flex>
            )}
        </Flex>
    )
}