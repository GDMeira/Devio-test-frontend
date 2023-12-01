import { Input, InputGroup } from "@chakra-ui/react";
import { useState } from "react";
import Swal from "sweetalert2";

export default function SearchForm() {
    const [product, setProduct] = useState('');
    const [searchProductsResult, setSearchProductsResult] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault();

        //TODO:fazer a busca e abrir janela do produto encontrado
        //se erro
        // Swal.fire({
        //     title: 'Erro',
        //     icon: 'error',
        //     text: 'Cidade não encontrada.'
        // });
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }

    return (<>
        <form
            onKeyDown={e => handleKeyPress(e)}
            onSubmit={e => handleSubmit(e)}
        >
            <InputGroup boxShadow={'0px 24px 48px 0px #314F7C14'}>
                <Input
                    bgColor={'#EDEDEF'}
                    w={'20dvw'} h={'5dvh'} minW={'200px'}
                    borderRadius={'5px'}
                    type="text"
                    placeholder="O que você procura?"
                    onChange={e => setProduct(e.target.value)}
                    value={product}
                    isInvalid={product.length > 0 && searchProductsResult.length === 0}
                />
            </InputGroup>
        </form>

    </>)
}