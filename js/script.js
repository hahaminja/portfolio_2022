console.clear();
function Fullpage__init(){
new fullpage("#fullpage", {
  menu: ".top-bar .menu-box"
});

// const $current = $(".section.fp-section.active");
//   $current.removeClass("active");
//   setTimeout(function () {
//     $current.addClass("active");
//   });
}
Fullpage__init();
// 네임 타이핑 시작
new TypeIt(".name", {
  speed: 250,
  startDelay: 900,
  loop: true
})
  .pause(500)
  .delete(12)
  .pause(500)
  .type("Web Publisher", { delay: 500 })
  .go();
// 네임 타이핑 끝

// 웹사이트 타이핑 시작
new TypeIt(".copy_site", {
  speed: 250,
  startDelay: 900,
  loop: true
})
  .pause(500)
  .delete(12)
  .pause(500)
  .type("Diptyque&KaKao", { delay: 500 })
  .go();
// 웹사이트 타이핑 끝

// 앱리디자인 타이핑 시작
new TypeIt(".app_redesign", {
  speed: 250,
  startDelay: 900,
  loop: true
})
  .pause(500)
  .delete(12)
  .pause(500)
  .type("Mooda", { delay: 500 })
  .go();
// 앱리디자인 타이핑 끝

// 웹리디자인 타이핑 시작
new TypeIt(".web_redesign", {
  speed: 250,
  startDelay: 900,
  loop: true
})
  .pause(500)
  .delete(12)
  .pause(500)
  .type("Coca-cola", { delay: 500 })
  .go();
// 웹리디자인 타이핑 끝

// 아트웍 타이핑 시작
new TypeIt(".works", {
  speed: 250,
  startDelay: 900,
  loop: true
})
  .pause(500)
  .delete(12)
  .pause(500)
  .type("Poster Design", { delay: 500 })
  .go();
// 아트웍 타이핑 끝

// 스킬1_그래프 시작
$(".skill-1").circleProgress({
  // 그래프 시작 위치
  // Math.PI = 3.14
  startAngle: -Math.PI / 2,
  // 방향 반전 여부
  reverse: true,
  // 그래프 수치
  value: 1.0,
  // 그래프 사이즈
  size: 110,
  // 그래프 모서리, 지울 시 각진 모양
  lineCap: "round",
  // 그래프 두께
  thickness: 20,
  animate: 3000,
  // 그래프 색상
  fill: {
    gradient: ["#7AB8D7", "#F7B7B8"]
  }
});
// 스킬2_그래프 시작
$(".skill-2").circleProgress({
  startAngle: -Math.PI / 2,
  reverse: true,
  value: 0.9,
  size: 110,
  lineCap: "round",
  thickness: 20,
  animate: 3000,
  fill: {
    gradient: ["#7AB8D7", "#F7B7B8"]
  }
});

// 스킬3_그래프 시작
$(".skill-3").circleProgress({
  startAngle: -Math.PI / 2,
  reverse: true,
  value: 0.9,
  size: 110,
  lineCap: "round",
  thickness: 20,
  animate: 3000,
  fill: {
    gradient: ["#7AB8D7", "#F7B7B8"]
  }
});
// 스킬4_그래프 시작
$(".skill-4").circleProgress({
  startAngle: -Math.PI / 2,
  reverse: true,
  value: 0.9,
  size: 110,
  // 그래프 모서리, 지울 시 각진 모양
  lineCap: "round",
  thickness: 20,
  animate: 3000,
  fill: {
    gradient: ["#7AB8D7", "#F7B7B8"]
  }
});
// 스킬5_그래프 시작
$(".skill-5").circleProgress({
  startAngle: -Math.PI / 2,
  reverse: true,
  value: 0.7,
  size: 110,
  lineCap: "round",
  thickness: 20,
  animate: 3000,
  fill: {
    gradient: ["#7AB8D7", "#F7B7B8"]
  }
});
// 스킬6_그래프 시작
$(".skill-6").circleProgress({
  startAngle: -Math.PI / 2,
  reverse: true,
  value: 0.8,
  size: 110,
  lineCap: "round",
  thickness: 20,
  animate: 3000,
  fill: {
    gradient: ["#7AB8D7", "#F7B7B8"]
  }
});
// 그래프 수치 출력
// .on("circle-animation-progress", function (event, progress, stepValue) {
//   $(this)
//     .find(".percent")
//     .text(parseInt(stepValue * 100) + "%");
// });

// 스킬_그래프 끝
