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



const allSideMenu = document.querySelectorAll('#side_nav .ul-section.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});
