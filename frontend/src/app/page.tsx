'use client';
import CommunityForm from './components/CommunityForm';
import MarketingText from './components/MarketingText';
import { Grid } from '@mantine/core';

export default function Home() {
  return (
    <Grid gutter="xl" align="center" bg="#f5f8fc" c="#1A2A4B" p="xl" mih="100vh">
        <Grid.Col span={{ base: 12, md: 6 }} p="xl">
          <MarketingText />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }} p="xl">
          <CommunityForm />
        </Grid.Col> 
    </Grid> 
  );
}
