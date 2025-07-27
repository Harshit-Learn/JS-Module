// Event , Event Bubbling , Event Delegation

// //1.Event : Event ka matlab hota hai koi bhi action jo user karta hai — jaise click, hover, key press, scroll, etc.
// 2.Event Bubbling : Jab koi event (like click) child element par trigger hota hai, wo event automatically uske parent, grandparent, and so on tak propagate hota hai. Is process ko bubbling kehte hain.

// 3. Event Delegation : Event delegation ek technique hai jisme hum ek parent element par ek hi event listener lagate hain, aur uske andar ke saare child elements ke events ko handle karte hain.

// ******************* 2.Event Bubbling **********************

document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent clicked');
});

document.getElementById('child').addEventListener('click', () => {
  console.log('Button clicked');
});





// ******************** 3.Event Delegation **************************

// document.getElementById('list').addEventListener('click', (e) => {
//   if (e.target.tagName === 'LI') {
//     console.log(e.target.textContent);
//   }
// });
