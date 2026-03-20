import { createContext, useContext, useState } from 'react';

const ContactContext = createContext(null);

export function ContactProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultTab, setDefaultTab] = useState('form');

  const open = (tab = 'form') => {
    setDefaultTab(tab);
    setIsOpen(true);
  };

  return (
    <ContactContext.Provider value={{ isOpen, defaultTab, open, close: () => setIsOpen(false) }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  return useContext(ContactContext);
}
