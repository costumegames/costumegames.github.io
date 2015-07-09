function formatState (state) {
    if (!state.id) { 
        return state.text; 
    }
    var $state = $('<span><img src="./images/flags/' + state.element.value.toLowerCase() + '.png" /> ' + state.text + '</span>');
    return $state;
}
 
$("select").select2();
$("#filter").select2({
    templateResult: formatState
});