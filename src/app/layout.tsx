import '@mantine/core/styles.css';

import { ColorSchemeScript, Container, Divider, Flex, MantineProvider, Text, Title } from '@mantine/core';

export const metadata = {
  title: 'Translator | Made by Pau Segarra',
  description: 'A simple translator app powered by ChatGPT',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme='dark' />
      </head>
      <body>
        <MantineProvider defaultColorScheme='dark'>
          <Title order={1} ta={'center'} mt={'xl'}>Text Translator</Title>
          <Text mb={'xl'} ta={'center'}>A simple text translator powered by ChatGPT</Text>
          {children}
          <Flex justify={'center'} mt={'xl'} align={'center'} py={'xl'} bg={'#3f3f3f'} direction={'column'} gap={'md'}>
            <Text fz={18}>developed by pau<strong>segarra</strong></Text>
            <a href="https://github.com/pausegarra/translator" target="_blank"><img src="/github.svg" alt="" /></a>
          </Flex>
        </MantineProvider>
      </body>
    </html>
  );
}