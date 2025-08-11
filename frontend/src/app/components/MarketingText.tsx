import {Stack, Text, Avatar, Group} from '@mantine/core';

export default function MarketingText() {
    return (
        <Stack gap="xl" p="xl">
            <Text size="3rem" fw={700} lh={1.2} c="#1A2A4B">
                Bajamos hasta un 40% tus gastos comunes
            </Text>
            <Text size="2rem" lh={1.6} c="#1A2A4B"> 
                "Cada proyecto cuenta con requerimientos y condiciones específicas de desarrollo, y es por lo mismo, 
                que nuestras soluciones tienen que adecuarse a ese entorno."
            </Text>
            <Group gap="md" mt="xl">
                <Avatar size="lg" alt="Santiago Labbé" />
                <Stack gap={4}>
                    <Text size="md" fw={600} c="#1A2A4B">Santiago Labbé</Text>
                    <Text size="sm" c="#1A2A4B">Equipo comercial</Text>
                </Stack>
            </Group>
        </Stack>
    )
}