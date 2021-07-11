import React from 'react';

import { FaSearch, FaEdit, FaTrash } from 'react-icons/fa';

interface IConsElements {
  [key: string]: React.ReactNode;
}

interface IconProps {
  name: string;
}

const icons: IConsElements = {
  search: <FaSearch />,
  edit: <FaEdit />,
  delete: <FaTrash />,
};

export function Icon({ name }: IconProps) {
  return <span>{icons[name]}</span>;
}
