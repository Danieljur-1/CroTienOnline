document.addEventListener('DOMContentLoaded', function () {
    var select = document.getElementById('plegable');

    select.addEventListener('change', function () {
        var selectedOption = select.options[select.selectedIndex];
        var url = selectedOption.value;
        window.location.href = url;
    })
});

