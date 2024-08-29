 
import { LanguageSelector } from './components/language-selector/LanguageSelector';

const App: React.FC = () => {
 
  return (
    <div style={{margin:'20px'}}>
      <h1>Custom Checkbox Example</h1>
      <LanguageSelector showCountryIcons={true}  multiselect={true} hasSearch={true} />
    </div>
  );
};

export default App;
