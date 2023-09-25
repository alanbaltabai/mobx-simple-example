import CountView from './CountView';
import DataView from './DataView';
import store from './store';

export default function App() {
	return (
		<>
			<CountView store={store} />
			<DataView />
		</>
	);
}
