let price = { 0: 8, 25: 12, 50: 16, 75: 24, 100: 36 };
let price_with_discount = {};

for (let pageviews in price) {
  price_with_discount[pageviews] = price[pageviews] - price[pageviews] * 0.25;
}

$(".card__slider").on({
  input: function () {
    $(this).css(
      "background-image",
      `linear-gradient(90deg, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%)  ${$(
        this
      ).val()}%, hsl(224, 65%, 95%) ${$(this).val()}%, hsl(224, 65%, 95%) 100%)`
    );

    if ($(".plan__check").is(":checked")) {
      $("#cost").text(`$${price_with_discount[$(this).val()]}.00`);
    } else {
      $("#cost").text(`$${price[$(this).val()]}.00`);
    }
  },
});

$(".plan__check").on({
  change: function () {
    if ($(this).is(":checked")) {
      $("#cost").text(`$${price_with_discount[$(".card__slider").val()]}.00`);
    } else {
      $("#cost").text(`$${price[$(".card__slider").val()]}.00`);
    }
  },
});

function updateText() {
  if ($(window).width() <= 550) {
    $(".plan__discount").text("-25%");
  } else {
    $(".plan__discount").text("25% discount");
  }
}

$(window).resize(updateText);
