function searchBtn() {
    // jQuery를 사용하여 ajax 호출
    // 영화진흥위원회 일별박스오피스 순위 Open API
    // 서버쪽 프로그램을 호출하기 위한 정보 담아 보내기
    // javascript 객체로 만들어 ajax 함수에 전달
    // javascript 형태는 JSON 형태
    let today = new Date();
    let today_str = "" + today.getFullYear() + ("00"+(today.getMonth()+1).toString()).slice(-2) + ("00"+(today.getDate()).toString()).slice(-2);
    let input_date = $('[type=date]').val().replace(/-/g, "");
    if (input_date >= today_str) {
        alert('오늘보다 이전 날짜를 선택해 주세요!')
    }
    else {
        $('tbody > tr').remove();

        $.ajax({
            url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
            type: 'GET',
            // 클라이언트가 서버에 전달할 데이터
            data: {
                key: 'e3e455e9c79620de387336bb59ee38a9',
                targetDt: input_date,
            },
            dataType: 'JSON',
            success: function (item) {
                // 서버가 보내준 JSON 데이터를 자바스크립트 객체화 하여 함수에 전달
                let item_list = item.boxOfficeResult.dailyBoxOfficeList;

                $(item_list).each(function (idx, movie) {
                    let rank = $('<td></td>').text(movie.rank);
                    let poster = $('<td></td>');
                    let title = $('<td></td>').text(movie.movieNm);
                    let audiAcc = $('<td></td>').text(movie.audiAcc);
                    let openDt = $('<td></td>').text(movie.openDt);
                    let del_td = $('<td></td>');
                    let tr = $('<tr></tr>');
                    let del_btn = $('<input />').attr('type', 'button').attr('value', '삭제');


                    $.ajax({
                        url: 'https://dapi.kakao.com/v2/search/image',
                        headers: {'Authorization': 'KakaoAK b8569de05963fb0f3535641764584f6d'},
                        type: 'GET',
                        data: {query: title.text() + ' 포스터'},
                        dataType: 'JSON',
                        success: function (image) {
                            let image_url = image.documents[0].thumbnail_url;
                            // console.log(image_url);
                            let img = $('<img />').attr('src', image_url);
                            poster.append(img);
                        },
                        error: function () {
                            console.log('포스터 못가져왔어 미아내 ㅠㅠ');
                        }
                    });

                    del_btn.on('click', function () {
                        $(this).parent().parent().remove();
                    });

                    $('tbody').append(tr);
                    tr.append(rank);
                    tr.append(poster);
                    tr.append(title);
                    tr.append(audiAcc);
                    tr.append(openDt);
                    tr.append(del_td);
                    del_td.append(del_btn);
                });

            },
            error: function () {
                alert('영화 정보 못 가져왔어 미아내 ㅜㅜ');
            }
        });

    }
}