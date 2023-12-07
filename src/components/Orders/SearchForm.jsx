import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import useProductsContext from "../../hooks/useProductsContext";
import styled from "styled-components";

export default function SearchForm() {
    const { productsFilter, setProductsFilter } = useProductsContext()

    return (<>
        <InputGroupSC boxShadow={'0px 24px 48px 0px #314F7C14'} w={'30dvw'}>
            <Input
                bgColor={'#EDEDEF'}
                w={'30dvw'} h={'5dvh'} minW={'200px'}
                borderRadius={'5px'}
                type="text"
                placeholder="O que você procura?"
                onChange={e => setProductsFilter({ ...productsFilter, nameOrId: e.target.value })}
                value={productsFilter.nameOrId}
            />
            <InputRightElement>
                <Button  
                    onClick={() => setProductsFilter({ ...productsFilter, nameOrId: '' })}
                    bg={'none'}
                >
                    X
                </Button>
            </InputRightElement>
        </InputGroupSC>
    </>)
}

const InputGroupSC = styled(InputGroup)`
    @media(max-width: 750px) {
        width: 60dvw !important;

        input {
            width: 60dvw !important;
        }
    }
`