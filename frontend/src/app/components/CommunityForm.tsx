import { Button, NumberInput, TextInput, Select, Title, Text, Stack, Paper, LoadingOverlay } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import axios from 'axios';

export default function CommunityForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      user_name: '',
      email: '',
      phone: '+569',
      address: '',
      apartments: 0,
      service: '',
      role: '',
      comments: '',
    },

    validate: {
      user_name: (value: string) => (!value ? 'Nombre es requerido' : null),
      email: (value: string) => (!value ? 'Email es requerido' : null),
      phone: (value: string) => (!value ? 'Teléfono es requerido' : null),
      address: (value: string) => (!value ? 'Dirección es requerida' : null),
      apartments: (value: number) => (!value ? 'Número de apartamentos es requerido' : null),
      service: (value: string) => (!value ? 'Servicio es requerido' : null),
      role: (value: string) => (!value ? 'Rol es requerido' : null),
    },
  });

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      // Parsing automático de valores
      const parsedValues = {
        ...values,
        phone: parseInt(values.phone.replace('+569', '')), // Convertir teléfono a número

      };
      
      const response = await axios.post('http://localhost:3001/community', parsedValues);
      const result = response.data;

      if (result.success) {
        form.setValues(form.getInitialValues());
        alert('¡Información enviada correctamente!');
      } else {
        console.error('Error:', result);
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el formulario.');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadLastRecord = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3001/community/last');
      const result = response.data;

      if (result.success && result.data) {
        form.setValues({
          ...result.data,
          phone: `+569${result.data.phone}`,
          comments: result.data.comments || '',
        });
        alert('Último registro cargado correctamente');
      } else {
        alert('No se encontraron registros previos');
      }
    } catch (error) {
      console.error('Error al cargar último registro:', error);
      alert('Error al cargar el último registro');
    } finally {
      setLoading(false);
    }
  };

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
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          placeholder="Nombre y apellido"
          {...form.getInputProps('user_name')}
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
          {...form.getInputProps('apartments')}
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
          mb="md" bg="#1A2A4B" c="white" fw={600} disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar información'}
        </Button>
        <Button type="button" fullWidth size="lg" radius="md" mt="xl"
          mb="md" bg="#1A2A4B" c="white" fw={600} disabled={loading}
          onClick={handleLoadLastRecord}>
          {loading ? 'Cargando...' : 'Cargar información'}
        </Button>
      </form>
    </Paper>
  );
}
