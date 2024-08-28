import { ReactComponent as DropdownIcon } from '../../../../assets/icons/dropdown.svg';
import styles from './LanguageInput.module.css';
import { useLanguageContext } from '../../LanguageContext';
import { Chip } from '../chip/Chip';

export const LanguageInput: React.FC = () => {
  const { isDropdownOpen, toggleDropdown, selectedLanguages, removeLanguage } =
    useLanguageContext();
  const placeholder = selectedLanguages.length ? '' : 'Выберите язык';

  return (
    <div className={styles.dropdownInputContainer}>
      {selectedLanguages.map((language) => (
        <Chip
          key={language.name}
          language={language.name}
          onRemove={() => removeLanguage(language)}
        />
      ))}
      <input
        type="text"
        className={styles.dropdownInput}
        placeholder={placeholder}
        readOnly
      />
      <DropdownIcon
        className={`${styles.dropdownIcon} ${
          isDropdownOpen ? styles.open : ''
        }`}
        onClick={toggleDropdown}
      />
    </div>
  );
};

export default LanguageInput;
