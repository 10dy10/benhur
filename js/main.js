
// header
fetch("/layout/header.html")
.then(response => {return response.text()})
.then(data => {
  document.querySelector("#header").innerHTML = data;
  
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let day = today.getDay();
  let week = new Array('일', '월', '화', '수', '목', '금', '토', '일')

  document.querySelector('.now-year').innerText = year + '년'
  document.querySelector('.now-month').innerText = month + '월'
  document.querySelector('.now-date').innerText = date + '일'
  document.querySelector('.now-day').innerText = '(' + week[day] + ')'

  document.querySelector('.now-year2').innerText = year + '년'
  document.querySelector('.now-month2').innerText = month + '월'
  document.querySelector('.now-date2').innerText = date + '일'
  document.querySelector('.now-day2').innerText = '(' + week[day] + ')'

  // 모바일 네비
  document.querySelector('.ham-btn').addEventListener('click', function(){
    document.querySelector('.ham-btn').classList.toggle('hi')
    document.querySelector('.mo-nav').classList.toggle('hi');
    document.querySelector('body').classList.toggle('open')
  })

})

// footer
fetch("/layout/footer.html")
.then(response => {return response.text()})
.then(data => {
    document.querySelector('#footer').innerHTML = data;
    document.querySelector('.privacy').addEventListener('click', function(){
      document.querySelector('.popup-wrap').style.display = 'block'
    })
  }
);

// popup
fetch("/layout/privacy.html")
.then(response => {return response.text()})
.then(data => {
  document.querySelector('#popupWrap').innerHTML = data;
  
  document.querySelector('.close-btn').addEventListener('click',function(){
    document.querySelector('.popup-wrap').style.display = 'none'
  })
});

function bookmarksite(title, url) {
  // Internet Explorer   
    if(document.all) {
    	window.external.AddFavorite(url, title);
	}   
  	// Google Chrome   
    else if(window.chrome) {      
    	alert("Ctrl+D키를 누르시면 즐겨찾기에 추가하실 수 있습니다.");
    }
  	// Firefox   
  	else if (window.sidebar) {
      alert("Ctrl+D키를 누르시면 즐겨찾기에 추가하실 수 있습니다.")
      // window.sidebar.addPanel(title, url, "");
    }   
  	// Opera   
  	else if(window.opera && window.print) {
    alert("Ctrl+D키를 누르시면 즐겨찾기에 추가하실 수 있습니다.")
		var elem = document.createElement('a');
    elem.setAttribute('href',url);
		elem.setAttribute('title',title);
		elem.setAttribute('rel','sidebar');       
		elem.click();    
	}
}

// pagination
fetch("/layout/pagination.html")
.then(response => {return response.text()})
.then(data => {
  document.querySelector('#pagination').innerHTML = data;
})