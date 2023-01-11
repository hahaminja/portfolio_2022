console.clear();
// 만약 페이지를 다시 활성화했을 때 애니메이션이 다시 재생되길 원할 경우 true로 변경
let chart1AllowRerender = true;

// 건들지 마세요
let chart1Rendered = false;

$("#fullpage").fullpage({
  menu: ".top-bar .menu-box",
  // 스킬_써클그래프
    afterLoad: function(ignored, destination){
      // 애니메이션이 재생되길 원하는 data anchor의 위치 입력
      if ( destination.anchor == 'section-2' ) {
        if ( chart1AllowRerender ) {
          // circle 차트 클래스명 확인 및 변경을 원하는 수치 입력
          $(".skill-1").circleProgress({value: 1.0}),
          $(".skill-2").circleProgress({value: 0.9}),
          $(".skill-3").circleProgress({value: 0.9}),
          $(".skill-4").circleProgress({value: 0.9}),
          $(".skill-5").circleProgress({value: 0.7}),
          $(".skill-6").circleProgress({value: 0.8});
        }
        else {
          if ( chart1Rendered == false ) {
            // circle 차트 클래스명 확인 및 변경을 원하는 수치 입력
          $(".skill-1").circleProgress({value: 1.0}),
          $(".skill-2").circleProgress({value: 0.9}),
          $(".skill-3").circleProgress({value: 0.9}),
          $(".skill-4").circleProgress({value: 0.9}),
          $(".skill-5").circleProgress({value: 0.7}),
          $(".skill-6").circleProgress({value: 0.8});
            chart1Rendered = true;
          }
        }
      }
      else {
        if ( chart1AllowRerender ) {
          // circle 차트 클래스명 확인
          $(".skill-1").circleProgress({value: 0}),
          $(".skill-2").circleProgress({value: 0}),
          $(".skill-3").circleProgress({value: 0}),
          $(".skill-4").circleProgress({value: 0}),
          $(".skill-5").circleProgress({value: 0}),
          $(".skill-6").circleProgress({value: 0});
        }
      }
    },

});

// const $current = $(".section.fp-section.active");
//   $current.removeClass("active");
//   setTimeout(function () {
//     $current.addClass("active");
//   });
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
  .type("Art works", { delay: 500 })
  .go();
// 웹사이트 타이핑 끝


// 스킬1_그래프 시작
$(".skill-1").circleProgress({
  // 그래프 시작 위치
  // Math.PI = 3.14
  startAngle: -Math.PI / 2,
  // 방향 반전 여부
  reverse: true,
  // 그래프 수치
  value: 0,
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
  value: 0,
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
  value: 0,
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
  value: 0,
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
  value: 0,
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
  value: 0,
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

//섹션 3 슬릭
  $('.slide_wrap').slick({
    slidesToShow: 6,
    arrows : true,
    nextArrow:$('.right_arrow'),
    prevArrow:$('.left_arrow'),
  });

// 섹션 4 슬라이드
$(function () {
  const work_slide = $(".work_slide");
  const work_btn_list = $(".work_btn_list");
  const on_slide = $(".work_box > li.On");

  first();

  function first() {
    work_slide.eq(0).addClass("On");
    work_btn_list.eq(0).addClass("Act");
  }

  work_btn_list.click(function () {
    const idx = $(this).index();

    $(this).addClass("Act");
    $(this).siblings().removeClass("Act");
    work_slide.removeClass("On");
    work_slide.eq(idx).addClass("On");
  });
});

