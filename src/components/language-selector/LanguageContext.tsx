import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../../types/types';
import { languages } from '../../data/countryData';

 
 

 
type LanguageContextType = {
  selectedLanguages: Language[];
  toggleLanguage: (language: Language) => void;
  removeLanguage: (language: Language) => void;
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
};

 
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

 
type LanguageProviderProps = {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [selectedLanguages, setSelectedLanguages] = useState<Language[]>([]);
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const removeLanguage = (language: Language) => setSelectedLanguages( prev => [...prev.filter(el => el.name !== language.name)])
  
  const toggleLanguage = (language: Language) => {
     setSelectedLanguages((prev) =>
       prev.some((el) => el.name === language.name)
         ? prev.filter((el) => el.name !== language.name)
         : [...prev, language]
     );
   };

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  return (
    <LanguageContext.Provider
      value={{
        selectedLanguages,
        toggleLanguage,
        isDropdownOpen,
        toggleDropdown,
        removeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

 
export const useLanguageContext = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error(
      'useLanguageContext must be used within a LanguageProvider'
    );
  }
  return context;
};
