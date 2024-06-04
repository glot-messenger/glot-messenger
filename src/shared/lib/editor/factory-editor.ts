import { Editor } from './editor';

function factoryEditor(): Editor {
	return new Editor();
};

export { factoryEditor };