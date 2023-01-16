
$(function(){
  $('#strtDate').datepicker({
    dateFormat: "yy-mm-dd", // 날짜의 형식
    // minDate: 0,
    nextText: ">",
    prevText: "<",
    onSelect: function (date) {
      var endDate = $('#endDate');
      var startDate = $(this).datepicker('getDate');
      var minDate = $(this).datepicker('getDate');
      endDate.datepicker('setDate', minDate);
      startDate.setDate(startDate.getDate() + 30);
      endDate.datepicker('option', 'maxDate', startDate);
      endDate.datepicker('option', 'minDate', minDate);
    }
    ,showMonthAfterYear: true //년도 먼저 나오고, 뒤에 월 표시
    ,buttonText: "선택" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트
    ,yearSuffix: "년" //달력의 년도 부분 뒤에 붙는 텍스트
    ,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
    ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
    ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
    ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
  });
  
  $('#endDate').datepicker({
    dateFormat: 'yy-mm-dd',
    nextText: ">",
    prevText: "<",
    // maxDate: '0',
    showMonthAfterYear: true, //년도 먼저 나오고, 뒤에 월 표시
    buttonText: "선택", //버튼에 마우스 갖다 댔을 때 표시되는 텍스트
    yearSuffix: "년", //달력의 년도 부분 뒤에 붙는 텍스트
    monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'], //달력의 월 부분 텍스트
    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'], //달력의 월 부분 Tooltip 텍스트
    dayNamesMin: ['일','월','화','수','목','금','토'], //달력의 요일 부분 텍스트
    dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
  });
  $('.datepicker').datepicker('setDate', 'today');
  dateFormatter = function(newDay, today) {
    let year = newDay.getFullYear();
    let month = newDay.getMonth() + 1;
    let date = newDay.getDate();

    if (today) {
      let todayDate = today.getDate()

      if(date != todayDate) {
        if (month == 0) year-=1
        month = (month + 11) % 12
        date = new Date(year, month, 0).getDate()
      }
    }

    month = ("0" + month).slice(-2)
    date = ("0" + date).slice(-2)

    return year + "-" + month + "-" + date
  }

  document.getElementsByName('filterDate').forEach(e => {
    e.addEventListener('click', function(){
      let endDate = new Date($('#endDate').val())
      let newDate = new Date($('#endDate').val())

      switch(this.value) {
        case '1' : 
          newDate.setMonth(newDate.getMonth() - 1)
          newDate = dateFormatter(newDate, endDate)
          console.log('1개월')
          break;
        case '2' :
          newDate.setMonth(newDate.getMonth() - 6)
          newDate = dateFormatter(newDate, endDate)
          console.log('1개월')
          break;
        case '3' : 
          newDate.setFullYear(newDate.getFullYear() - 1)
          newDate = dateFormatter(newDate, endDate)
          console.log('1년');
          break;
      }

      $('#strtDate').val(newDate)
    })
  })

});