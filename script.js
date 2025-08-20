// প্রথমে আমরা HTML থেকে বাটনটাকে খুঁজে বের করব।
const myButton = document.querySelector('button');

// এরপর আমরা বাটনটাতে একটা "ক্লিক" ইভেন্ট যুক্ত করব।
myButton.addEventListener('click', function() {
  // বাটনে ক্লিক করলে এই কোডটা চলবে
  alert("তুমি আমাকে ক্লিক করেছো! বাহ!");
});