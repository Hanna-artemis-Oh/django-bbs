function myFunc() {
    // each: 각 요소에 함수를 호출
    $('[type=checkbox]:checked + span').each(function(idx, item) {
        // idx: index, 0부터 1씩 증가
        // item: 선택된 document object
        console.log($(item).text());
    });
}