"use client";

import { Text, ActionIcon, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconArrowUpRight } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

interface AdvantageCardProps {
  icon: string;
  title: string;
}

export default function AdvantageCard({ icon, title }: AdvantageCardProps) {
  const isDesktop = useMediaQuery('(min-width: 992px)');
  const router = useRouter();
  
  const handleClick = () => {
    router.push('/hello');
  };
  
  return (
    <Flex 
      direction={{ base: "row", md: "column" }}
      justify={{base: "space-between", md: "center"}}
      align="center"
      bg="#f5f8fc"
      style={{ borderRadius: '10px' }}
      p="sm"
      gap="sm"
      h={{ base: "100px", md: "300px" }}
      w={{ base: "90%", md: "260px" }}
    >
      <ActionIcon visibleFrom="md" variant="filled"
        color="#1A2A4B"
        size="40px"
        style = {{ justifySelf: 'flex-end', alignSelf: 'flex-end', borderRadius: '50%', height: '40px', width: '40px'}}
        onClick={handleClick}
      >
        <IconArrowUpRight/>
      </ActionIcon>

      <Text style={{ fontSize: isDesktop ? '4rem' : '2rem' }}>
        {icon}
      </Text>

      <Text size="xl" fw={700} mb="md" c="#1A2A4B" lh={1.3} ta={{base: "left", md: "center"}}>
        {title}
      </Text>

      <ActionIcon hiddenFrom="md" variant="filled" color="#1A2A4B" size="40px"
        style = {{ borderRadius: '50%' }} onClick={handleClick}
      >
        <IconArrowUpRight />
      </ActionIcon>

      <Text c="#6c757d" fw={500} style={{ fontSize: '1rem' }}
        display={{ base: 'none', md: 'block' }}
      >
        ¿Cómo lo hacemos?
      </Text>
    </Flex>
  );
}