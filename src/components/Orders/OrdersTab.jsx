import { Flex, Text } from "@chakra-ui/react";
import SearchForm from "./SearchForm";
import SectionHeader from "../SectionHeader";
import Categories from "../Categories";

export default function OrdersTab() {

    return (
        <Flex direction={'column'} align={'flex-start'}>
            <Text fontWeight={700} fontSize={32} mb={3}>
                Seja bem vindo!
            </Text>
            <SearchForm />

            <SectionHeader title={'Categorias'} subtitle={'Navegue por categoria'}/>
            <Categories/>
        </Flex>
    )
}