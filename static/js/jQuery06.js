$(function() {
    $('li').on('mouseenter', function() {
        // 마우스 커서가 진입하면 event가 발생한 li를 찾아 css를 적용
        $(this).css('color', 'blue');
    })

    $('li').on('mouseleave', function() {
        // 마우스 커서가 나가면 event가 발생한 li를 찾아 css를 적용
        $(this).css('color', 'black');
    })
});