import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { useFetchStoreDetail, useFetchStores } from '@/hooks/store.hook';
import Section from '@/components/templates/Section';
import { Box, Card, LoadingSpinner, Modal } from '@/components/commons';

const Stores = () => {
  const router = useRouter();
  const id = Number(router.query.id);

  const [showModal, setShowModal] = useState(false);

  const { items: storesList, isLoading } = useFetchStores();

  const { items: storeDetail, isLoading: isDetailLoading } =
    useFetchStoreDetail(id);

  function handleshowModal(value: number) {
    setShowModal(true);
    router.push({
      query: {
        ...router.query,
        id: value,
      },
    });
  }

  function handleCancleModal() {
    setShowModal(false);
    router.push({
      query: {},
    });
  }

  if (isLoading)
    return (
      <>
        <Box center>
          <LoadingSpinner size={100} />
        </Box>
      </>
    );
  return (
    <>
      <Section title='스토어 리스트' maxWidth='800px'>
        <Box width='100%' flexWrap='wrap' flexDirection='row'>
          {storesList.map((e) => (
            <Box key={e.id} width='25%' onClick={() => handleshowModal(e.id)}>
              <Card id={e.id} image={e.image} name={e.name} />
            </Box>
          ))}
        </Box>
        <Modal
          title={storeDetail?.name}
          open={showModal}
          onCancel={handleCancleModal}
          onOk={handleCancleModal}
          contents={storeDetail}
          isLoading={isDetailLoading}
        />
      </Section>
    </>
  );
};

export default Stores;
