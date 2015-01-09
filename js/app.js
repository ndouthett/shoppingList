function addListItem() {
  var text = $(".textInput").val();
  $(".list").append('<li><input type="checkbox" class= "done"/>'+ text +'<button class= "delete">Delete</button></li>');
  $(".textInput").val('');
}

function deleteItem() {
	$(this).parent().remove();
}

function finishItem() {
	if ( $(this).parent().css('textDecoration') == 'line-through') {
		$(this).parent().css('textDecoration', 'none');
	} else {
		$(this).parent().css('textDecoration', 'line-through');
	}
}

$(function() {
  $(".submit").on('click', addListItem);
    $(".delete").on('click', deleteItem);
    $(".done").on('click', finishItem);

    $(document).on('click', '.done', finishItem)
    $(document).on('click', '.delete', deleteItem)
})