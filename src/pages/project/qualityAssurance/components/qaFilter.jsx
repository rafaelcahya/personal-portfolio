import { useEffect } from "react";

export default function QAFilters() {
	useEffect(() => {
		const buttons = document.querySelectorAll('[data-filter-button]');
		const cards = document.querySelectorAll('[data-article-card]');
		const allData = Array.from(cards);

		buttons.forEach((btn) => {
			btn.addEventListener("click", () => {
				const filter = btn.getAttribute("data-filter") || "";

				// update button style
				buttons.forEach(b => b.classList.remove("bg-orange-500", "text-white", "border-orange-500"));
				btn.classList.add("bg-orange-500", "text-white", "border-orange-500");

				// filter cards
				allData.forEach(card => {
					const type = card.getAttribute("data-type") || "";
					if (filter === "all" || type.toLowerCase().includes(filter.toLowerCase())) {
						card.classList.remove("hidden");
					} else {
						card.classList.add("hidden");
					}
				});
			});
		});
	}, []);

	return null;
}
