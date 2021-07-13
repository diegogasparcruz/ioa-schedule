import React, { useCallback, useState } from 'react';

import * as S from './Input.styles';

interface InputProps {
  placeholder: string;
  children: React.ReactChild;
}

export function Input({ children, placeholder }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <S.InputWrap isFocused={isFocused}>
      {children}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder={placeholder}
      />
    </S.InputWrap>
  );
}
