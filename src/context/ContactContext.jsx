import { createContext, useContext, useState } from 'react';

const ContactContext = createContext(null);

export function ContactProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ContactContext.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  return useContext(ContactContext);
}
