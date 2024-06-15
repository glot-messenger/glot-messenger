import { ColumnDataProvider } from './column-data-provider';

function factoryColumnDataProvider(): ColumnDataProvider {
   return new ColumnDataProvider();
};

export { factoryColumnDataProvider };
