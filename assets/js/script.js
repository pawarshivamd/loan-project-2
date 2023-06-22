document.addEventListener('DOMContentLoaded', function () {
    var openBtn = document.querySelector('.open-btn');
    var closeBtn = document.querySelector('.close-btn');
    var sidebar = document.querySelector('.sidebar');

    openBtn.addEventListener('click', function () {
        sidebar.classList.add('active');
    });

    closeBtn.addEventListener('click', function () {
        sidebar.classList.remove('active');
    });
});



const allSideMenu = document.querySelectorAll('#side_nav .ul-section.top li .link-box');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});
function myCopyText() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }