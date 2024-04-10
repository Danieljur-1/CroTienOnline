
document.addEventListener('DOMContentLoaded', function () {
    var select = document.getElementById('plegable');
    var menu = document.getElementById('menu');

    select.addEventListener('change', function () {
        var selectedOption = select.options[select.selectedIndex];
        var url = selectedOption.value;
        if (url) {
        window.location.href = url;
        }
    });

    
    function handleViewportChange() {
        var select = document.getElementById('plegable');
        var menu = document.getElementById('menu');
        
        if (window.innerWidth >= 768) {
            select.style.display = 'none';
            menu.style.display = 'block';
        } else {
            select.style.display = 'block';
            menu.style.display = 'none';
        }
    }

    
    handleViewportChange();

    
    window.addEventListener('resize', handleViewportChange);
});
