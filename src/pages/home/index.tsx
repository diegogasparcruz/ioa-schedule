import { ContactsTable } from 'components/contextual/ContactsTable';
import { Icon } from 'components/shared/core/Icon';
import { Input } from 'components/shared/core/Input';

import * as S from './Home.styles';

export function Home() {
  return (
    <S.Container>
      <S.Main>
        <Input placeholder="Digite um nome ou telefone">
          <Icon name="search" />
        </Input>
        <ContactsTable />
      </S.Main>
    </S.Container>
  );
}
