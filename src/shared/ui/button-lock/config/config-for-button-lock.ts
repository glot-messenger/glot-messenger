import type { IConfigForButtonLock } from './interafaces';

const configForButtonLock: IConfigForButtonLock = {
   'lock-block': {
      icon: {
         name: 'lock-block.svg',
         alt: 'Закрытый замочек',
         titleHover: 'Нажмите, чтобы переключить режим на - открытый для изменений'
      }
   },
   'lock-open': {
      icon: {
         name: 'lock-open.svg',
         alt: 'Открытый замочек',
         titleHover: 'Нажмите, чтобы переключить режим на - закрытый для изменений'
      }
   }
};

export { configForButtonLock };
