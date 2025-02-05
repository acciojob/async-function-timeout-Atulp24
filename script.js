//your JS code here. If required.
function delay(time) {
	return new Promise(resolve => setTimeout(resolve, time));
}
async function delayedFunction() {
	let dl = Number(document.getElementById("delay").value);
	let tx = document.getElementById("text").value;
	await delay(dl);
	document.getElementById("output").innerHTML = tx;
}
document.getElementById("btn").addEventListener("click", delayedFunction);