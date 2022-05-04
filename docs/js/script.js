const bet = document.getElementById("bet").value;
const percent = document.getElementById("percent").value;

function profit()
{
	let total;
	total = bet * percent;
	console.log(total);
}

window.addEventListener("click", function(){
  profit();
});