const hamburger = document.getElementById('hamburger');
const logoMenu = document.getElementById('logo-menu');
const close = document.getElementById('close');
const tab1 = document.getElementById('tab-1');
const tab2 = document.getElementById('tab-2');
const tab3 = document.getElementById('tab-3');
const a1 = document.getElementById('a-1');
const a2 = document.getElementById('a-2');
const a3 = document.getElementById('a-3');
const topNav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  topNav.style.display = "block";
    logoMenu.style.display = "block";
});

close.addEventListener('click', () => {
   topNav.style.display = "none";
    logoMenu.style.display = "none";
 
});
a1.style.borderBottom = "3px solid var(--red)";
a1.addEventListener('click', () => {
  document.querySelector('.pic-tab img').src = "/images/illustration-features-tab-1.svg";
  document.querySelector('.text-tab h3').textContent = "Bookmark in one click";
  document.querySelector('.text-tab p').textContent = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
  document.querySelector('.text-tab button').style.display = "block";
  a1.style.borderBottom = "3px solid var(--red)";
  a2.style.borderBottom = "none";
  a3.style.borderBottom = "none";
});

a2.addEventListener('click', () => {
  document.querySelector('.pic-tab img').src = "/images/illustration-features-tab-2.svg";
  document.querySelector('.text-tab h3').textContent = "Intelligent search";
  document.querySelector('.text-tab p').textContent = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
  document.querySelector('.text-tab button').style.display = "block";
    a2.style.borderBottom = "3px solid var(--red)";
    a1.style.borderBottom = "none";
    a3.style.borderBottom = "none";
});

a3.addEventListener('click', () => {
  document.querySelector('.pic-tab img').src = "/images/illustration-features-tab-3.svg";
  document.querySelector('.text-tab h3').textContent = "Share your bookmarks";
  document.querySelector('.text-tab p').textContent = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
  document.querySelector('.text-tab button').style.display = "block";
    a3.style.borderBottom = "3px solid var(--red)";
    a1.style.borderBottom = "none";
    a2.style.borderBottom = "none";
});

