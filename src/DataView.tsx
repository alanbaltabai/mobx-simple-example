import { observer } from 'mobx-react-lite';

import store from './store';

const DataView = observer(function () {
	return (
		<section>
			<button onClick={() => store.getData()}>Get data!</button>

			{store.data ? (
				store.data.map((item: any) => (
					<div key={crypto.randomUUID()}>
						<h1>Price: {item.price}</h1>
						<p>Description: {item.description}</p>
						<img src={item.image} />
					</div>
				))
			) : (
				<h1>Loading</h1>
			)}
		</section>
	);
});

export default DataView;
