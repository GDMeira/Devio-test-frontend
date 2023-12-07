import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import SearchForm from "./SearchForm";
import TitleSubtitle from "../Orders/TitleSubtitle";
import Categories from "./Categories";
import Products from "./Products";
import useItensContext from "../../hooks/useItensContext";
import Resume from "./Resume";
import Payment from "../Payment/Payment";

export default function OrdersTab() {
    const { itens, setItens, finishingOrder, setFinishingOrder } = useItensContext();

    if (finishingOrder) {
        return (
            <Payment />
        )
    }

    return (
        <Flex direction={'column'} align={'flex-start'}>
            <Text fontWeight={700} fontSize={32} mb={3}>
                Seja bem vindo!
            </Text>
            <SearchForm />

            <TitleSubtitle title={'Categorias'} subtitle={'Navegue por categoria'} />
            <Categories />

            <TitleSubtitle title={'Produtos'} subtitle={'Selecione um produto para adicionar ao pedido'} />
            <Products />

            {itens.length > 0 && (
                <>
                    <Resume itens={itens} />

                    <Flex justifyContent={'flex-end'} w={'100%'} m={'50px 0'}>
                        <Button
                            onClick={() => setItens([])}
                            color={'#125C13'}
                            border={'#125C13 1px solid'}
                            borderRadius={'15px'} bgColor={'#fff'}
                            minW={'20dvw'} h={'6dvh'}
                        >Cancelar</Button>
                        <Button
                            onClick={() => setFinishingOrder(true)}
                            color={'#fff'}
                            borderRadius={'15px'} bgColor={'#125C13'}
                            ml={'10dvw'} minW={'20dvw'} h={'6dvh'}
                        >
                            Finalizar pedido
                        </Button>
                    </Flex>
                </>
            )}
        </Flex>
    )
}