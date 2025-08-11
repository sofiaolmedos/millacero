"use client";

import { Container, Title, Text, Button } from '@mantine/core';
import { useRouter } from 'next/navigation';

export default function HelloPage() {
  const router = useRouter();

  return (
    <Container size="md" py="xl">
      <Title order={1} size="3rem" ta="center" mb="xl">
        Hello World!
      </Title>
      
      <Button 
        size="lg" 
        bg="#1A2A4B"
        onClick={() => router.back()}
        style={{ display: 'block', margin: '0 auto' }}
      >
        Volver atrás
      </Button>
    </Container>
  );
}
