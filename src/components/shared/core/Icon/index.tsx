import React from 'react';

import { FaSearch } from 'react-icons/fa';

interface IConsElements {
  [key: string]: React.ReactNode;
}

interface IconProps {
  name: string;
}

const icons: IConsElements = {
  search: <FaSearch />,
};

export function Icon({ name }: IconProps) {
  return <span>{icons[name]}</span>;
}
