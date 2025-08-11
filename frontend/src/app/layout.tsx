'use client';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');

  return (
    <html lang="es">
      <head>
        <title>Millacero</title>
        <meta name="description" content="Conserjería remota y tecnología" />
      </head>
      <body>
        <MantineProvider 
          defaultColorScheme={colorScheme}
          theme={{ 
            primaryColor: 'blue',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          <Notifications />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
