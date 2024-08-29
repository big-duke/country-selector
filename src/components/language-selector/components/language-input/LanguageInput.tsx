import { ReactComponent as DropdownIcon } from '../../../../assets/icons/dropdown.svg';
import styles from './LanguageInput.module.css';
import { useLanguageContext } from '../../LanguageContext';
import { Chip } from '../chip/Chip';

export const LanguageInput: React.FC = () => {
  const {
    isDropdownOpen,
    toggleDropdown,
    selectedLanguages,
    removeLanguage,
    multiselect,
  } = useLanguageContext();
  const placeholder = selectedLanguages.length ? '' : 'Выберите язык';
  const singleLanguage = multiselect ? undefined : selectedLanguages[0]?.name
  return (
    <div className={styles.dropdownInputContainer}>
      {multiselect &&
        selectedLanguages.map((language) => (
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
        value={singleLanguage}
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
