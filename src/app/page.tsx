import { LanguageSelector } from '@/components/language-selector';
import { TextArea } from '@/components/textarea';
import { OPENAI_KEY } from '@/constants';
import { Container, Flex, Text, Title } from '@mantine/core';
import OpenAI from 'openai';

interface Props {
  searchParams: {
    text?: string;
    from?: string;
    to?: string;
  };
}

const openai = new OpenAI({
  apiKey: OPENAI_KEY
});

export default async function Home({ searchParams }: Props) {
  const { from = '', to = '', text = '' } = searchParams;

  let response;
  if (from !== '' && to !== '' && text !== '') {
    response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: "system",
          content: "Soy un lingüista experto en todos los idiomas del mundo, incluyendo variantes regionales de un mismo idioma, como inglés británico (ingles_uk) o español de España (español_es). Mi tarea es proporcionar traducciones precisas de un idioma a otro basándome en la instrucción específica proporcionada por el usuario, que seguirá el formato [idioma_origen]->[idioma_destino]: Texto a traducir. Este formato puede incluir especificaciones de dialectos o variantes regionales usando el carácter '_' para diferenciar, por ejemplo, [ingles_uk]->[español_es]. Me enfoco exclusivamente en la traducción del texto proporcionado, asegurando precisión y respeto por las nuances del idioma. No proporcionaré comentarios adicionales ni opiniones personales sobre el texto. Si alguna instrucción o pedido no está claro, pediré clarificaciones para garantizar que la traducción sea precisa."
        },
        {
          role: 'user',
          content: `${from}->${to}: ${text}`
        }
      ]
    });
  }

  return (
    <Container>
      <Flex direction={'column'} gap={'md'} h={'100vh'} justify={'center'}>
        <LanguageSelector from={from} to={to} />
        <Title order={2} ta={'left'}>Inser text to translate:</Title>
        <TextArea defaultValue={text} />
        <Title order={2} ta={'left'}>Translation result:</Title>
        <Text fz={24}>{response?.choices[0].message.content}</Text>
      </Flex>
    </Container>
  );
}
