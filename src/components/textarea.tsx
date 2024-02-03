'use client';

import { Textarea } from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
  defaultValue: string;
}

export function TextArea({ defaultValue }: Props) {
  const router = useRouter();
  const [value, setValue] = useDebouncedState(defaultValue, 500);

  React.useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (value !== '') {
      searchParams.set('text', value);
    } else {
      searchParams.delete('text');
    }
    router.replace(`${window.location.pathname}?${searchParams.toString()}`);
  }, [value]);

  return (
    <Textarea placeholder='Start typing...' defaultValue={value} fz={48} w={'100%'} rows={10} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)} />
  );
}