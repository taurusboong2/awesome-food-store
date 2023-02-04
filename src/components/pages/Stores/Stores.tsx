import React from 'react';
import styled from 'styled-components';

import { useFetchStores } from '@/hooks/store.hook';
import Section from '@/components/templates/Section';
import { Box, Card } from '@/components/commons';

const Stores = () => {
  const { items: storesList, isLoading, isError } = useFetchStores();

  return (
    <>
      <Section title='스토어 리스트' maxWidth='800px'>
        <Box width='100%' flexWrap='wrap' flexDirection='row'>
          {storesList.map((e) => (
            <Card key={e.id} id={e.id} image={e.image} name={e.name} />
          ))}
        </Box>
      </Section>
    </>
  );
};

export default Stores;
