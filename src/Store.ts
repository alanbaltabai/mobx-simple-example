import { makeAutoObservable, runInAction } from 'mobx';

class Store {
	data: any = [];
	count: number | undefined = 0;

	constructor() {
		makeAutoObservable(this);
	}

	increment() {
		if (typeof this.count === 'number') this.count += 1;
	}

	decrement() {
		if (typeof this.count === 'number') this.count -= 1;
	}

	async getData() {
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/posts'
			);
			const json = await response.json();

			runInAction(() => {
				this.data = json;
			});
		} catch (error) {
			runInAction(() => {
				if (error instanceof Error) this.data = error.message;
			});
		}
	}
}

const store = new Store();

export default store;
