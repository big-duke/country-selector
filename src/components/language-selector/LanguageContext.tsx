import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../../types/types';
import { languages } from '../../data/countryData';

type LanguageContextType = {
  isDropdownOpen: boolean;
  hasSearch: boolean;
  multiselect: boolean;
  removeLanguage: (language: Language) => void;
  selectedLanguages: Language[];
  showCountryIcons: boolean;
  toggleDropdown: () => void;
  toggleLanguage: (language: Language) => void;
  term: string;
  setTerm:(term:string) => void;
  filteredLanguages:Language[];
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

type LanguageProviderProps = {
  children: ReactNode;
  showCountryIcons?: boolean;
  multiselect?: boolean;
  hasSearch?:boolean;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  showCountryIcons = true,
  multiselect = true,
  hasSearch=true,
  children,
}) => {
  const [selectedLanguages, setSelectedLanguages] = useState<Language[]>([]);
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [term, setTerm] = useState('');

  const removeLanguage = (language: Language) =>
    setSelectedLanguages((prev) => [
      ...prev.filter((el) => el.name !== language.name),
    ]);

  const toggleLanguage = (language: Language) => {
    if (multiselect) {
      setSelectedLanguages((prev) =>
        prev.some((el) => el.name === language.name)
          ? prev.filter((el) => el.name !== language.name)
          : [...prev, language]
      );
    }
    else
    {
      setSelectedLanguages([language]);
      setDropdownOpen(false);
      setTerm('');
    }
  };

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const filteredLanguages = term ? languages.filter(language => language.name.toLowerCase().includes(term)) : languages;
  return (
    <LanguageContext.Provider
      value={{
        filteredLanguages,
        isDropdownOpen,
        multiselect,
        removeLanguage,
        selectedLanguages,
        setTerm,
        showCountryIcons,
        term,
        toggleDropdown,
        toggleLanguage,
        hasSearch,
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
