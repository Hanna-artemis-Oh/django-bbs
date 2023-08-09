function myFunc() {
    // 1. 전체 선택자 => *
    // $('*').css('color', 'red');

    // 2. 태그 선택자 => 태그명 사용
    //text(): 태그의 text를 가져옴
    // console.log($('h1').text());

    // 3. id 선택자 => #
    // id는 unique한 값
    // text(): 인자가 없으면 text 값를 가져옴, 인자가 있으면 text 값 대치
    // $('#daegu').text('Daegu');

    // 4. class 선택자 => .
    // remove(): 삭제
    // $('.mystyle').remove()

    // 5. 자식 선택자와 후손 선택자
    // 자식 선택자 => >(자식)
    // 후손 선택자 => 공백(후손)
    // $('div > h1').css('color', 'blue');
    // $('div li').remove();

    // 6. 동위 선택자 (siblings) => +(바로 뒤 silbling), ~(바로 뒤부터 모든 siblings)
    // alert($('#daegu + li').text());

    // 인천 찾기
    // alert($('#daegu + li + li').text());
    // 부산 이후 li 제거
    // $('#daegu ~ li').remove();

    // 7. 속성 선택자 => [속명명=값]
    $('[type=button]').css('color', 'red');

}