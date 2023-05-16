import { observer } from 'mobx-react-lite';

import store from './Store';

const CountView = observer(function () {
	return (
		<section>
			<button onClick={() => store.decrement()}>-</button>
			{store.count}
			<button onClick={() => store.increment()}>+</button>
		</section>
	);
});

export default CountView;
