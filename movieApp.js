$("#movie-form").on("submit", function (evt) {
  evt.preventDefault();

  let movieInfo = $("#title").val() + " " + $("#rating").val();

  const movieDiv = $("<div>").appendTo($("#rating-list")).append(movieInfo);

  const deleteBtn = $("<button>Delete Rating?</button>").appendTo(movieDiv);

  deleteBtn.on("click", function () {
    movieDiv.remove();
  });
});
