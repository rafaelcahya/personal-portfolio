function trackClick(category, label) {
	if (typeof window !== "undefined" && typeof gtag === "function") {
		gtag("event", "click", {
			event_category: category,
			event_label: label,
		});
	} else {
		console.warn("gtag not available");
	}
}

// Expose globally
window.trackClick = trackClick;
