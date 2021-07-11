import { ContactsTable } from 'components/contextual/ContactsTable';
import { Icon } from 'components/shared/core/Icon';
import { Input } from 'components/shared/core/Input';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { useEffect } from 'react';
import { fetchContacts } from 'store/contactSlice';

import * as S from './Home.styles';

export function Home() {
  const { contacts, loading } = useAppSelector((state) => state.contact);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <S.Container>
      <S.Main>
        <Input placeholder="Digite um nome ou telefone">
          <Icon name="search" />
        </Input>
        {loading && <span>Loading...</span>}
        <ContactsTable contacts={contacts} />
      </S.Main>
    </S.Container>
  );
}
