let params = new URLSearchParams(window.location.search);

let name = params.get("name");

alert(`Name: ${name}`);
