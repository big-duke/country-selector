import { ReactComponent as RussiaFlag } from '../assets/flags/russia.svg';
import { ReactComponent as EnglandFlag } from '../assets/flags/england.svg';
import { ReactComponent as SpainFlag } from '../assets/flags/spain.svg';
import { ReactComponent as GermanyFlag } from '../assets/flags/germany.svg';
import { ReactComponent as ItalyFlag } from '../assets/flags/italy.svg';
import { ReactComponent as PolandFlag } from '../assets/flags/poland.svg';
import { Language } from '../types/types';

export const languages: Language[] = [
  {
    name: 'Русский',
    flag: RussiaFlag,
  },
  {
    name: 'Английский',
    flag: EnglandFlag,
  },
  {
    name: 'Испанский',
    flag: SpainFlag,
  },
  {
    name: 'Немецкий',
    flag: GermanyFlag,
  },
  {
    name: 'Итальянский',
    flag: ItalyFlag,
  },
  {
    name: 'Польский',
    flag: PolandFlag,
  },
];
