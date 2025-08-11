"use client";
import { Stack, Text, Group, Flex, Button, ActionIcon } from "@mantine/core";
import { IconArrowRight } from '@tabler/icons-react';
import AdvantageCard from "./AdvantageCard";
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

export default function Advantages() {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleClick = () => {
    router.push('/hello');
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 260 + 16;
      container.scrollBy({ left: cardWidth * 3, behavior: 'smooth' });
      setCurrentIndex(prev => Math.min(prev + 1, Math.ceil(advantages.length / 3) - 1));
    }
  };

  const handleIndicatorClick = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 260 + 16; 
      container.scrollTo({ left: cardWidth * 3 * index, behavior: 'smooth' });
      setCurrentIndex(index);
    }
  };

  const advantages = [
    {
      icon: "💰",
      title: "Ahorras hasta 40% en gastos comunes",
    },
    {
      icon: "🔒",
      title: "Más monitoreo, registro y seguridad",
    },
    {
      icon: "📦",
      title: "Encomiendas más seguras y ordenadas",
    },
    {
      icon: "📃",
      title: "Reduce problemas con el personal de tu comunidad",
    },
    {
      icon: "⚡",
      title: "Más independecia y autogestión",
    }
  ]

  return (
    <Stack gap="xl" p="xl">
      <Flex p="xl" justify="space-between" align="flex-start" wrap="nowrap" gap="md">
        <Text 
          size="2rem" 
          display={{ base: 'none', md: 'block' }} 
          ta="left"
          style={{ 
            flex: 1,
            minWidth: 0,
            wordWrap: 'break-word',
            lineHeight: 1.2
          }}
        >
        ¿Por qué transformar tu comunidad con <strong>Millacero</strong>?
        </Text>

        <Text size="2rem" fw={700} display={{ base: 'block', md: 'none' }} ta="center">
        ¿Por qué transformar tu comunidad?
        </Text>

        <Button size="lg" radius="md" bg="#1A2A4B" c="white" fw={600}
          display={{ base: 'none', md: 'block' }}
          onClick={handleClick}
          style={{ flexShrink: 0 }}
        >
          ¿Por qué Millacero?
        </Button>
      </Flex>
      
      <Flex visibleFrom="base" hiddenFrom="md" direction="column" gap="xl" justify="center" align="center">
        {advantages.map((advantage) => (
          <AdvantageCard key={advantage.title} {...advantage} />
        ))}
      </Flex>

      <div style={{ width: '100%', overflow: 'hidden' }}>
        <Flex visibleFrom="md" direction="row" gap="md" justify="flex-start" 
          align="center" wrap="nowrap"
          ref={scrollContainerRef}
          style={{ 
            overflowX: 'auto', 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::WebkitScrollbar': { display: 'none' },
            paddingLeft: 0,
            paddingRight: 0
          }}
        >
          {advantages.map((advantage) => (
            <div key={advantage.title} style={{ flexShrink: 0 }}>
              <AdvantageCard {...advantage} />
            </div>
          ))}
        </Flex>
      </div>

      <Flex visibleFrom="md" justify="flex-start" align="center" gap="xs" m="xl" >
        {Array.from({ length: Math.ceil(advantages.length / 3) }).map((_, index) => (
          <div
            key={index}
            onClick={() => handleIndicatorClick(index)}
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: currentIndex === index ? '#1A2A4B' : '#F1F4FB',
              border: '0px solid #1A2A4B',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
          />
        ))}
        
        <ActionIcon
          size="lg"
          radius="xl"
          variant="filled"
          color="#1A2A4B"
          onClick={handleNext}
          disabled={currentIndex >= Math.ceil(advantages.length / 3) - 1}
          style={{ 
            backgroundColor: '#1A2A4B',
            color: 'white',
            marginLeft: '1rem'
          }}
        >
          <IconArrowRight size={20} />
        </ActionIcon>
      </Flex>     

      <Button size="lg" radius="md" mt="xl" mb="md" bg="#1A2A4B" c="white" fw={600}
        display={{ base: 'block', md: 'none' }}
        onClick={handleClick}
      >
        ¿Por qué Millacero?
      </Button> 
  
    </Stack>
  )
}