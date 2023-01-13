$("document").ready(function () {
  console.log("Let's get ready to party with jQuery!");
});

$("article img").addClass("image-center");

$("p").last().remove();

$("#title").css("font-size", Math.floor(Math.random() * 100));

$("ol").append("<li>Pet the puppy</li>");

$("aside").text(
  "I beckon you with my dearest apologies for the horrific abomination of an error I have committed against thee. Here in this very place used to be an ordered area of information called a list. Not only am I deeply ashamed for my actions and the way in which I've hurt thee but I am also seeing to the executioner that my head be misplaced from the rest of my body upon noon tomorrow. Please try to carry on through life despite my errors. I pray my death will suffice your righteous desire for revenge."
);

$(".form-control").on("keyup blur change", function () {
  let red = $(".form-control").eq(0).val();
  let blue = $(".form-control").eq(1).val();
  let green = $(".form-control").eq(2).val();
  $("body").css(
    "background-color",
    "rgb(" + red + "," + blue + "," + green + ")"
  );
});

$("img").on("click", function (evt) {
  evt.target.remove();
});
