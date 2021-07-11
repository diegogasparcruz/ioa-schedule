import { Icon } from 'components/shared/core/Icon';
import * as S from './ContactsTable.styles';

interface ContactProps {
  id?: number;
  name: string;
  email: string;
  phone: string;
}

interface ContactsTableProps {
  contacts: ContactProps[];
}

export function ContactsTable({ contacts }: ContactsTableProps) {
  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td className="table__actions">
                <button className="table__actions--edit" type="button">
                  <Icon name="edit" />
                </button>
                <button className="table__actions--delete" type="button">
                  <Icon name="delete" />
                </button>
              </td>
            </tr>
          ))}
          {contacts.length === 0 && (
            <tr>
              <td colSpan={4} style={{ textAlign: 'center' }}>
                Nenhum contato encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </S.Container>
  );
}
