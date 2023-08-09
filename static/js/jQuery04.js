function myFunc() {
    // $('div').remove();
    // $('div').empty();
    let li = $('<li></li>').text('인천');
    // 원하는 위치에 붙이기
    // 1. append(): 맨 마지막 자식으로 붙이기
    // $('ul').append(li);

    // 2. prepend(): 맨 처음 자식으로 붙이기
    // $('ul').prepend(li);

    // 3. after(): 뒤쪽 형제로 붙이기
    // $('li:eq(1)').after(li);

    // 4. before(): 앞쪽 형제로 붙이기
    // $('ul > li:last-child').before(li);
}