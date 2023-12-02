import { Text } from "@chakra-ui/react";

export default function TitleSubtitle({ title, subtitle }) {
    return (
        <>
            <Text fontWeight={700} fontSize={24} mt={'7dvh'} mb={3}>
                {title}
            </Text>
            <Text fontWeight={400} fontSize={18} mb={5}>
                {subtitle}
            </Text>
        </>
    )
}