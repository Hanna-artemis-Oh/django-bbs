// ready 이벤트: 브라우저가 HTML을 다 읽고 실행할 준비가 되었을 때를 지칭
// $(document).ready(function() {
//    $('[type=button]').on('click', function() {
//       console.log('버튼이 클릭되었습니다.');
//    });
// });

$(function() {
   $('[type=button]').on('click', function() {
      console.log('버튼이 클릭되었습니다.');
   });
});