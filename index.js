let billamountEl = document.getElementById("billamount");
let tipamountEl = document.getElementById("tipamount");
let totalamountEl = document.getElementById("totalamount");
let errorEl = document.getElementById("error");

function onCal() {

    if (billamountEl.value === "" || tipamountEl.value === "") {
        errorEl.textContent = "* Please Enter the Valid Input!!!";

    }
    else {

        let bill = parseInt(billamountEl.value);
        let tip = parseInt(tipamountEl.value);

        let total = bill + tip;

        totalamountEl.value = total;

        errorEl.textContent = "";
    }

}