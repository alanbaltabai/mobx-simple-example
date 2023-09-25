import { observer } from 'mobx-react-lite';

interface CountViewProps {
	store: {
		count: number | undefined;
		increment: () => void;
		decrement: () => void;
	};
}

const CountView = observer(function ({ store }: CountViewProps) {
	return (
		<section>
			<button onClick={() => store.decrement()}>-</button>
			{store.count}
			<button onClick={() => store.increment()}>+</button>
		</section>
	);
});

export default CountView;
