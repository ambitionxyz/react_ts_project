import React from 'react';
import { useOutlet } from 'react-router-dom';

import { PublicLayoutStyle } from './PublicLayout.style';

const PublicLayout: React.FC = () => {
  const outlet = useOutlet();

  return <PublicLayoutStyle>{outlet}</PublicLayoutStyle>;
};

export default PublicLayout;
