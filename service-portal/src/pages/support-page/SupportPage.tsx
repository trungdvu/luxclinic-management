import React from 'react';
import { useTitle } from 'hooks';

interface Props {
  title?: string;
}

export const SupportPage = ({ title }: Props) => {
  useTitle(title);

  return <div>This is support page</div>;
};
