import { writable } from 'svelte/store';

function selectOption() {
	const { subscribe, set, update } = writable("title");

	return {
		subscribe,
		setTitle: () => set("title"),
		setPortfolio: () => set("portfolio"),
		setSkills: () => set("skills"),
		setTimeline: () => set("timeline"),
		setReferences: () => set("references"),
		reset: () => set("title")
	};
}

export const option = selectOption();