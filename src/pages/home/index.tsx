import { useEffect } from 'react';
import { ContactsTable } from 'components/contextual/ContactsTable';
import { Icon } from 'components/shared/core/Icon';
import { Input } from 'components/shared/core/Input';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { api } from 'services/api';
import { setContacts, setLoading } from 'store/contactSlice';

import * as S from './Home.styles';

export function Home() {
  const dispatch = useAppDispatch();
  const { contacts, loading } = useAppSelector((state) => state.contact);

  useEffect(() => {
    dispatch(setLoading(true));
    api
      .get('/contacts')
      .then((response) => {
        dispatch(setContacts(response.data));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  }, [dispatch]);

  return (
    <S.Container>
      <S.Main>
        <Input placeholder="Digite um nome ou telefone">
          <Icon name="search" />
        </Input>

        <ContactsTable contacts={contacts} isLoading={loading} />
      </S.Main>
    </S.Container>
  );
}
