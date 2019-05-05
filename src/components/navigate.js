const navigate = function(name) {
	document.querySelector(name).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export { navigate }
