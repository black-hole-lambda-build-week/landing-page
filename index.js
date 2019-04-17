//javascript will go here

class TabLink {
    constructor(element) {

      this.element = element;
      this.data = this.element.dataset.tab;
      this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
      this.tabItem = new TabItem(this.itemElement);
      this.element.addEventListener('click', () => this.select());
    };
  
    select() {
      const links = document.querySelectorAll('.tabs-link');
      Array.from(links).forEach((currentLink) => {
        currentLink.classList.remove('tabs-link-selected');
      });
      this.element.classList.add('tabs-link-selected') ;
      this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      const items = document.querySelectorAll('.tabs-item');
  
      Array.from(items).forEach((element) => {
        element.classList.remove('tabs-item-selected');
      });
      
      this.element.classList.add('tabs-item-selected');
    }
  }
  
  let links = document.querySelectorAll('.tabs-link');
  
  links.forEach((currentLink) => {
    return new TabLink(currentLink)
  });

  //animation 

  const animationBtn = document.querySelector('.sign-up-btn');

  const heading = document.querySelector('h1');
  const secondHeading = document.querySelector('h2');

  animationBtn.addEventListener('click', (event) => { 
    console.log ('Hey Lambda Staff!');
    heading.classList.add('blackholeAnimation');
    
    // secondHeading.classList.remove('pulsing');
    // secondHeading.classList.add('blackholeAnimation');
    setTimeout(function(){ heading.classList.remove('blackholeAnimation') }, 2000)
    // setTimeout(function(){ secondHeading.classList.remove('blackholeAnimation') }, 2500)
  });

