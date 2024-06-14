import { ColumnDataProvider } from './column-data-provider';

function factoryColumnDataProvider() {
   console.log(ColumnDataProvider, '++++');
   

   const v = new ColumnDataProvider();

   console.log(v, 'factoryColumnDataProvider');
};

export { factoryColumnDataProvider };
