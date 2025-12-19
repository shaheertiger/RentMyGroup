import React from 'react';

export type Role = 'admin' | 'advertiser';

export interface ModalState {
  isOpen: boolean;
  role: Role;
}

export interface ValuePropProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}