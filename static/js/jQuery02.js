function myFunc() {
    console.log($('#apple').text());
    console.log($('#apple + li').text());
    console.log($('ul > li.myClass').text());
    console.log($('input[type=text]').val());
    console.log($('ol > li:first').text());
    console.log($('ol > li:eq(1)').text());
    console.log($('ol > li:nth-child(2)').text());
    console.log($('ol > li:last').text());
}