// Display json file data in element
let requestedData = new Request ("./assets/json/data.json")

// initialize variable that will contain json data


// fetch data feed on json file
fetch(requestedData)
  .then(function(response) {
    return response.json();
  })
  .then(data => {
    if (data.length > 0) {

      let tabTitle = "";
      let tabContent = "";

      //loop data objects and access it in html
      data.forEach((popData, index) => {
        if (index === 0) {
          tabTitle += "<li class='active'>";
          tabContent += "<div id='section" + (index+1) + "' class='tab-pane active'>" + popData.content;
        } else {
          tabTitle += "<li>";
          tabContent += "<div id='section" + (index+1) + "' class='tab-pane'>" + popData.content;
        }
        tabTitle += "<a href='#section" + (index+1) + "'>" + popData.title + "</a>";
        tabTitle += "</li>";

        tabContent += "</div>";
      });

      // pass html inside ul and tab-content div
      document.querySelector('#nav-tab').innerHTML = tabTitle;
      document.querySelector('#tab-content').innerHTML = tabContent;
    }

    let dataObj = data;

    //Accordion
    const sections_element = document.querySelector('.sections');

    const hasClass = (element) => {
      return (' ' + element.className + ' ').indexOf(' ' + element.className + ' ') > -1;
    }

    dataObj.map(function(section, i) {

      //create a div with a section class name contain objects on json file
      section_element = document.createElement('div');
      section_element.classList.add('section');

      //add show class to first section element
      if (i === 0) {
        section_element.classList.add('show');
      } else {
        section_element.classList.remove('show');
      }

      //add event listener when a section was clicked
      section_element.addEventListener('click', function(e) {
        this.classList.toggle('show');
      });

      // create h2 element with title class name to contain title
      section_title = document.createElement('h2');
      section_title.classList.add('title');
      section_title.innerText = section.title;

      // create div element with content class name to contain content
      section_content = document.createElement('div');
      section_content.classList.add('content');
      section_content.innerHTML = section.content;

      // append title, contents and section parent divs to sections div element
      section_element.appendChild(section_title);
      section_element.appendChild(section_content);
      sections_element.appendChild(section_element);
    })

  })
  .catch(error => {
    console.log(error);
  });

// Tabs
const onTabClick = (e) => {

  e.preventDefault();

  //get all active tabs
  let activeTabs = document.querySelectorAll('.active');

//deactivate existing tab and panel
  activeTabs.forEach(function(tab) {
    tab.className = tab.className.replace('active', '')
  });

  // activate new tab and panel
  e.target.parentElement.className += 'active';

  document.querySelector('#'+e.target.href.split('#')[1]).className += ' active';
}

const element = document.querySelector('#nav-tab');

element.addEventListener('click', onTabClick, false);