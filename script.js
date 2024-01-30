document.addEventListener("DOMContentLoaded", function () {
  let data = [100, 150, 50, 200, 110, 250, 110, 150, 230, 50, 210, 200];

  function generateBarChart(data) {
    let chartContainer = document.getElementById('barsContainer');
    let highestHeight = 0;
    let highestHeightI = 0;
  
    for (let i = 0; i < data.length; i++) {
      let bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.height = data[i] + 'px';
      chartContainer.appendChild(bar);
  
      if (data[i] > highestHeight) {
        highestHeight = data[i];
        highestHeightI = i;
      }
    }
  
    let bars = document.getElementsByClassName('bar');
    bars[highestHeightI].classList.add('gradient');
  }

  generateBarChart(data);

  //the fourth container with many sliders
  let percentValues = [15, 10, 8, 4, 2];

  let rangeInputs = document.querySelectorAll('.platform .range');
  let percentElements = document.querySelectorAll('.platform .percent');
  let fillElements = document.querySelectorAll('.platform .rangeFill');

  for (let i = 0; i < percentElements.length; i++) {
    rangeInputs[i].value = percentValues[i];
    percentElements[i].textContent = '+' + percentValues[i] + '%';

    let fillPercentage = percentValues[i] / 20;
  //   i am supposed to divide by 100, but i doing that makes the width to be very small as against shown in mock up
  
    fillElements[i].style.width = fillPercentage * rangeInputs[i].offsetWidth + 'px';
  
    if (percentValues[i] >= 15) {
      fillElements[i].style.backgroundColor = 'rgb(68, 28, 212)';
    } else if (percentValues[i] >= 10) {
      fillElements[i].style.backgroundColor = 'rgb(7, 216, 188)';
    } else if (percentValues[i] >= 5) {
      fillElements[i].style.backgroundColor = 'orange';
    } else if (percentValues[i] < 5) {
      fillElements[i].style.backgroundColor = 'red';
    }
  }
  

  let sunButtonCont = document.querySelector('#sunButtonCont');
  let moonButtonCont = document.querySelector('#moonButtonCont');
  let sunButton = document.querySelector('#sun');
  let moonButton = document.querySelector('#moon');
  let body = document.querySelector('body');
  let header = document.querySelector('header');
  
  let isSunActive = false;
  let isMoonActive = false;
  
  // TOGGLE THEME
  function toggleTheme() {
    body.classList.toggle("dark-theme");
  
    if (body.classList.contains("dark-theme")) {
      sunButton.src = "./images/gray sun.svg";
      moonButton.src = "./images/white moon.svg";
      // moonButton.className = "moon-toggle-button"
  
      isSunActive = false;
      isMoonActive = true;
      header.classList.remove("dark-theme");
    } else {
      sunButton.src = "./images/white sun.svg";
      // sunButton.className = "sun-toggle-button"
      moonButton.src = "./images/gray moon.svg";
      isSunActive = true;
      isMoonActive = false;
    }
  }
  
  sunButtonCont.addEventListener('click', function () {
    if (!isSunActive) {
      toggleTheme();
    }
  });
  
  moonButtonCont.addEventListener('click', function () {
    if (!isMoonActive) {
      toggleTheme();
    }
  });
    
  //NOW LETS TARGET THE PROFILE COMTAINER
  let profileContainer = document.querySelector('#select')
  let userProfile = document.querySelector('#userProfile')

  userProfile.style.display = 'none'
  userProfile.innerHTML = '<div id="myAccount"><img src="./images/avatars/avatar-jacob-thompson.webp" alt="" class="account-icons" id="avatarIcon"><p class="my-account" id="avatar-account">MY ACCOUNT</p></div><div id="home"><img src="./images/home.svg" alt="" class="account-icons"><p class="home">HOME</p></div><div id="profile"><img src="./images/profile.svg" alt="" class="account-icons"><p class="home">PROFILE</p></div><div id="settings"><img src="./images/blue settings.svg" alt="" class="account-icons"><p class="home">SETTINGS</p></div><div id="signOut"><img src="./images/sign out.svg" alt="" class="account-icons"><p class="home">SIGN OUT</p></div>'

  profileContainer.addEventListener('click', function () {
    userProfile.style.display = (userProfile.style.display === 'none') ? 'flex' : 'none';

  })

  // REMOVE THE CONTAINER WHEN LOST FOCUS

  document.addEventListener('click', function(event) {
    if (!userProfile.contains(event.target) && !profileContainer.contains(event.target)) {
      userProfile.style.display = 'none';
    }
  });


    //NOW LETS TARGET THE BARTIME COMTAINER
    let barTimeSelect = document.querySelector('#barTimeSelect')
    let bartTimeDisplayContainer = document.querySelector('#bartTimeDisplayContainer')
  
    bartTimeDisplayContainer.style.display = 'none'
    bartTimeDisplayContainer.innerHTML = '<p id="daily">Daily</p><p id="weekly">Weekly</p><p id="monthly">Monthly</p>'
  
    barTimeSelect.addEventListener('click', function () {
      bartTimeDisplayContainer.style.display = (bartTimeDisplayContainer.style.display === 'none') ? 'flex' : 'none';
  
    })

    //TARGET EACH OF THE BAR TO CHANGE AT DIFFERENT BAR TIMES
    bartTimeDisplayContainer.addEventListener('click', function (event) {
      if (event.target.id === 'daily') {
        console.log('jdcvgdhyugddd');
        data = [10, 14, 30, 100, 110, 250, 110, 150, 230, 50, 210, 200];
      }
    })

    // REMOVE THE CONTAINER WHEN LOST FOCUS

    document.addEventListener('click', function(event) {
      if (!bartTimeDisplayContainer.contains(event.target) && !barTimeSelect.contains(event.target)) {
        bartTimeDisplayContainer.style.display = 'none';
      }
    });


  //ACTIVATE THE SIDE BAR
  let togglerIcon = document.querySelector('#togglerIcon')
  let sideBar = document.querySelector('#sideBar')
  togglerIcon.addEventListener('click', function () {
    sideBar.style.display = (sideBar.style.display === 'none') ? 'flex' : 'none';
  })

  //STYLE THE STAUS OF PAID TO BE DIFFERENT FROM STATUS OF REFUND
  const tdElements = document.getElementsByTagName('td');

  for (let i = 0; i < tdElements.length; i++) {
    const td = tdElements[i];
    if (td.textContent.trim() === 'Paid') {
      td.style.color = 'rgb(7, 216, 188)'
    } else if (td.textContent.trim() === 'Refund') {
      td.style.color = 'red'
    }
  }

  //TARGET THE BELL ICON
  let subscribed = false
  let bellIcon = document.querySelector('#bell')

  bellIcon.addEventListener('click', function () {
    subscribed = true
    bellIcon.style.backgroundColor = 'rgb(7, 216, 188)'
    bellIcon.style.borderColor = 'rgb(7, 216, 188);'
    let notificationContainer = document.createElement('notificationContainer')
    notificationContainer.className = 'notificationContainer'
    body.appendChild(notificationContainer)
    notificationContainer.innerHTML = 'Subscribed!'
    setInterval(() => {
      notificationContainer.style.display = 'none'
    }, 3000);
  })
});