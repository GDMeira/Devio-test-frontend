import { Box, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { TextSC } from "./Payment";

export default function NameInput({ name, setName }) {
    return (
        <Box w={'70%'}>
            <TextSC fontWeight={700} mt={3}>
                Nome do cliente
            </TextSC>
            <InputGroup boxShadow={'0px 24px 48px 0px #314F7C14'}>
                <Input
                    bgColor={'#EDEDEF'}
                    borderRadius={'5px'}
                    type="text"
                    placeholder="Primeiro nome"
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
                <InputRightElement>
                    <Button
                        onClick={() => setName('')}
                        bg={'none'}
                    >
                        X
                    </Button>
                </InputRightElement>
            </InputGroup>
        </Box>
    )
}