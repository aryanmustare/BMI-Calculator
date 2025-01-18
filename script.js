var weight, height, age, gender;
var BMI, range;
var page = 1;
weight = 50;
age = 25;

$(".weightMinus").click(function() {
    weight--;
    $(".weightNum").text(weight);
})

$(".weightPlus").click(function() {
    weight++;
    $(".weightNum").text(weight);
})

$(".ageMinus").click(function() {
    age--;
    $(".ageNum").text(age);
})

$(".agePlus").click(function() {
    age++;
    $(".ageNum").text(age);
})

$(".male").click(function() {
    gender = 'male';
    $(".male").addClass("genderClicked");
    $(".female").removeClass("genderClicked");
})

$(".female").click(function() {
    gender = 'female';
    $(".female").addClass("genderClicked");
    $(".male").removeClass("genderClicked");
})


$(".heightRange").on("input", function() {
    height = $(this).val();
    $(".heightValue").text(height + " cm");
});
$(".calculateBtn").click(function() {
    if (page == 1) {
        
        height = $(".heightRange").val();

        
        BMI = weight / ((height / 100) * (height / 100));
        BMI = Math.round(BMI * 10) / 10;

        $(".screen_2").css("left", "0");
        $(".screen_1").css("transform", "translateX(-100%)");


        $(".resultBMI").text(BMI);
        if (BMI < 18.5) {
            range = 'Underweight';
            $(".resultRange").css("color", "#E5235A");
            $(".suggestion").text("You have an underweight body weight. Be careful！");
        } else if (BMI > 25) {
            range = 'Overweight';
            $(".resultRange").css("color", "#E5235A");
            $(".suggestion").text("You have an overweight body weight. Be careful！");
        } else {
            range = 'Normal';
            $(".resultRange").css("color", "#32DC7C");
            $(".suggestion").text("You have a normal body weight. Good job!");
        }


        $(".resultRange").text(range);
        $(".calculateBtn").text("RE-CALCULATE YOUR BMI");
        page = 2;
    } else {

        $(".screen_2").css("left", "100%");
    $(".screen_1").css("transform", "translateX(0)");

        // $(".calculateBtn").text("CALCULATE YOUR BMI");
        $(".calculateBtn")
        .text("CALCULATE YOUR BMI")
        .css({
            'width': '100%',
            'max-width': '750px',
            'visibility': 'visible'
        });
        $(".heightRange").val(170);
        $(".heightValue").text("170 cm");
        $(".weightNum").text(50);
        $(".ageNum").text(25);
        weight = 50;
        age = 25;
        page = 1;
    }
});
