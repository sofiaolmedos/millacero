import { Button, NumberInput, TextInput, Select, Title, Text, Stack, Paper } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function CommunityForm() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '+569',
      address: '',
      number: 0,
      apartments: 0,
      service: '',
      role: '',
      comments: '',
    },

    validate: {
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido'),
    },
  });

  return (
    <Paper bg="white" radius="lg" c="#1A2A4B" p="xl" shadow="md" mb="md">
      <Stack align="center" mb="xl">
        <Title size="xl" fw={700} ta="center">
          Cuéntanos sobre tu comunidad 🏡
        </Title>
        <Text size="xl" ta="center">
          Exploremos tus opciones
        </Text>
      </Stack>
      <form onSubmit={form.onSubmit((values: any) => console.log(values))}>
        <TextInput
          placeholder="Nombre y apellido"
          {...form.getInputProps('name')}
          radius="md"
          size="md"
          mb="md"
          variant="filled"
          c="#1A2A4B"
        />
        <TextInput
          placeholder="Email"
          type="email"
          {...form.getInputProps('email')}
          radius="md"
          size="md"
          mb="md"
          variant="filled"
          c="#1A2A4B"
        />
        <TextInput
          placeholder="+569"
          {...form.getInputProps('phone')}
          radius="md"
          size="md"
          mb="md"
          variant="filled"
          c="#1A2A4B"
        />
        <TextInput
          description="Dirección de comunidad"
          placeholder="Nombre de calle, 123, Comuna"
          {...form.getInputProps('address')}
          radius="md"
          size="md"
          mb="md"
          variant="filled"
          c="#1A2A4B"
        />
        <NumberInput
          placeholder="0"
          min={0}
          {...form.getInputProps('number')}
          radius="md"
          size="md"
          mb="md"
          variant="filled"
          c="#1A2A4B"
        />
        <Select
          placeholder="- Servicio a cotizar -"
          data={[
              'RemoLite - Conserjería remota parcial', 
              'RemoFull - Conserjería remota completa',
              'Access - App y casilleros inteligentes'
          ]}
          {...form.getInputProps('service')}
          radius="md"
          size="md"
          mb="md"
          c="#1A2A4B"
          variant="filled"
        />
        <Select
          placeholder="- Escribo como -"
          data={[
              'Residente',
              'Comité',
              'Administrador',
              'Inmobiliaria',
              'Otro'
          ]}
          {...form.getInputProps('role')}
          radius="md"
          size="md"
          mb="md"
          variant="filled"
          c="#1A2A4B"
        />
        <TextInput
          placeholder="Comentarios (opcional)"
          {...form.getInputProps('comments')}
          radius="md"
          size="md"
          mb="md"
          variant="filled"
          c="#1A2A4B"
        />
        <Button type="submit" fullWidth size="lg" radius="md" mt="xl"
          mb="md" bg="#1A2A4B" c="white" fw={600}>
          Enviar información
        </Button>
        <Button type="button"  fullWidth size="lg" radius="md" mt="xl"
          mb="md" bg="#1A2A4B" c="white" fw={600}>
          Cargar información
        </Button>
      </form>
    </Paper>
  );
}
