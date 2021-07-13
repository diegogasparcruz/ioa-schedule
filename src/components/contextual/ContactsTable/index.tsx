import { Icon } from 'components/shared/core/Icon';
import { useAppDispatch } from 'hooks/store';
import { api } from 'services/api';
import { deleteContact } from 'store/contactSlice';
import * as S from './ContactsTable.styles';

interface ContactProps {
  id?: number;
  name: string;
  email: string;
  phone: string;
}

interface ContactsTableProps {
  contacts: ContactProps[];
  isLoading: boolean;
}

export function ContactsTable({ contacts, isLoading }: ContactsTableProps) {
  const dispatch = useAppDispatch();

  async function handleDelete(id: number): Promise<void> {
    await api.delete(`/contacts/${id}`);

    dispatch(deleteContact(id));
  }

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
                <button
                  onClick={() => handleDelete(contact.id as number)}
                  className="table__actions--delete"
                  type="button"
                >
                  <Icon name="delete" />
                </button>
              </td>
            </tr>
          ))}

          {isLoading ? (
            <tr>
              <td colSpan={4} style={{ textAlign: 'center' }}>
                Carregando...
              </td>
            </tr>
          ) : (
            contacts.length === 0 && (
              <tr>
                <td colSpan={4} style={{ textAlign: 'center' }}>
                  Nenhum contato encontrado.
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </S.Container>
  );
}
