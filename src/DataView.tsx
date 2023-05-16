import { observer } from 'mobx-react-lite';

import store from './Store';

const DataView = observer(function () {
	return (
		<section>
			<button onClick={() => store.getData()}>Get data!</button>

			{store.data.data ? (
				store.data.data.map((item: any) => (
					<div key={crypto.randomUUID()}>
						<h1>Price: {item.price}</h1>
						<p>Description: {item.description}</p>
						<img src={item.image} />
					</div>
				))
			) : (
				<h1></h1>
			)}
		</section>
	);
});

export default DataView;
