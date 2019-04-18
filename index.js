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

  const animationBtn = document.querySelector('.blackhole-btn');

  // const heading = document.querySelector('h1');
  // const secondHeading = document.querySelector('h2');

  // animationBtn.addEventListener('click', (event) => { 
  //   console.log ('Hey Lambda Staff!');
  //   heading.classList.add('blackholeAnimation');
  
  //   secondHeading.classList.remove('pulsing');
  //   secondHeading.classList.add('blackholeAnimation');
  //   setTimeout(function(){ heading.classList.remove('blackholeAnimation') }, 5000)
  //   setTimeout(function(){ secondHeading.classList.remove('blackholeAnimation') }, 5000)
  //   setTimeout(function(){ secondHeading.classList.add('pulsing') }, 5000)
  // });

  
  const intro = document.querySelector('.intro');
  const heading = document.querySelector('h1');
  const secondHeading = document.querySelector('h2');
  const button = document.querySelector('.blackhole-btn');

  animationBtn.addEventListener('click', (event) => { 
    console.log ('Hey Lambda Staff!');
    intro.classList.add('blackholeAnimation');
  
    secondHeading.classList.remove('pulsing');
    // secondHeading.classList.add('blackholeAnimation');

    // heading.classList.add('blackholeAnimation');

    // button.classList.add('blackholeAnimation');

    setTimeout(function(){ intro.classList.remove('blackholeAnimation') }, 7000)

    // setTimeout(function(){ secondHeading.classList.remove('blackholeAnimation') }, 7500)
    setTimeout(function(){ secondHeading.classList.add('pulsing') }, 7000)

    // setTimeout(function(){ heading.classList.remove('blackholeAnimation') }, 7500)
    // setTimeout(function(){ button.classList.remove('blackholeAnimation') }, 7500)

    setTimeout(function(){ intro.classList.add('fadeIn') }, 7000)
    setTimeout(function(){ intro.classList.remove('fadeIn') }, 11500)
  });
