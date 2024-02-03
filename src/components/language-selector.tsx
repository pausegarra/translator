'use client';

import { Languages } from '@/constants';
import { ComboboxItem, Flex, Select } from '@mantine/core';
import { useRouter } from 'next/navigation';

interface Props {
  from: string;
  to: string;
}

const languagesArray = Object.entries(Languages).map(([key, value]) => ({
  label: value,
  value: key,
}));

export function LanguageSelector({ from, to }: Props) {
  const router = useRouter();

  function handleChange(key: string, value: string) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(key, value);
    router.replace(`${window.location.pathname}?${searchParams.toString()}`);
  }

  return (
    <Flex gap={'md'}>
      <Select w={'100%'} label={'From:'} defaultValue={from} data={languagesArray} onChange={(_value, option) => handleChange('from', option.value)} />
      <Select w={'100%'} label={'To:'} defaultValue={to} data={languagesArray} onChange={(_value, option) => handleChange('to', option.value)} />
    </Flex>
  );
}