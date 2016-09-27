/**
 * Created by ben on 27/09/2016.
 */

console.log("JS working");
var dismissButton = document.getElementById('alert-dismiss');
dismissButton.addEventListener('click', dismissAlert);

function dismissAlert() {
    dismissButton.parentNode.style.display = 'none';
}