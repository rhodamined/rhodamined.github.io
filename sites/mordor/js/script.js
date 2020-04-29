// grab dimensions of window
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const screenRatio = screenWidth/screenHeight;
const f = 1;

console.log("Screen Width: " + screenWidth);
console.log("Screen Height: " + screenHeight);
console.log("Screen ratio: " + screenRatio);

// find dimensions and set size of eye based on screen size
let eyeWidth = 0;
let eyeHeight = 0; // initialize with a value

if (screenRatio >= 1) { // if image is wider than tall
  eyeWidth = screenWidth/2;
  eyeHeight = screenWidth/2; // make it a square!
}
else {
  eyeWidth = screenHeight/2; // make it a square!
  eyeHeight = screenHeight/2;
}

$('.eye').css('width', eyeWidth);
$('.eye').css('height', eyeHeight);

// iteratively set positions of eye images within container '.eye'
for (let i=0; i<=10; i++) {
  const thisImg = document.querySelector('#eye-'+i);

  // size up!
  $('#eye-' + i).css('width', thisImg.width*f);

  // find centers
  let centerWidth = (eyeWidth - thisImg.width)/2; //don't need horiz center
  let centerHeight = (eyeHeight - thisImg.height)/2;

  // assign centers and z-index
  $('#eye-' + i).css('position', 'absolute');
  $('#eye-' + i).css('left', centerWidth); //don't need horiz center
  $('#eye-' + i).css('top', centerHeight);
  $('#eye-' + i).css('z-index', -i);
}


// size and center the Gate
const gateImg = document.querySelector('.gate');
let gateWidth = gateImg.width*f;
$('.gate').css('width', gateWidth); // factor gate size
$('.gate').css('left', (screenWidth - gateWidth)/2);

// position and dimension the wall
let wallHeight = Math.ceil(11/16*gateImg.height);
$('.wall').css('width', screenWidth);
$('.wall').css('height', wallHeight);
$('.wall').css('top', eyeHeight - wallHeight);

// set size and position of ground
let groundHeight = screenHeight - eyeHeight;
$('.ground').css('width', screenWidth);
$('.ground').css('height', groundHeight);

// set size and position for a trapezoid for the path
let pathWidth = (132/146)*gateWidth;
let pathPers = gateImg.width * 50/132;
$('.path').css('width', pathWidth);
$('.path').css('border-bottom', groundHeight + 'px solid #7f7f7f');
$('.path').css('border-left', pathPers + 'px solid transparent');
$('.path').css('border-right', pathPers + 'px solid transparent');

// resize columns
const colImg = document.querySelector('.columns');
let colWidth = colImg.width*f;
$('.columns').css('width', colWidth);

// position columns left
$('.col-l').css('left', (screenWidth/2) - gateWidth - colWidth);

// position columns right
$('.col-r').css('left', (screenWidth/2) + gateWidth - (colWidth/6));






















// clone columns
