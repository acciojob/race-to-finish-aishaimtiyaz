window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
// Function to create a promise that resolves after a random time
function createRandomPromise() {
  const randomTime = Math.floor(Math.random() * 5) + 1; // Random time between 1 and 5 seconds
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Promise resolved after ${randomTime} seconds`);
    }, randomTime * 1000);
  });
}

// Array of five promises
const promises = [
  createRandomPromise(),
  createRandomPromise(),
  createRandomPromise(),
  createRandomPromise(),
  createRandomPromise(),
];

// Use Promise.any to wait for the first promise to resolve
Promise.any(promises)
  .then(result => {
    // Print the result to the output div
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = result;
  })
  .catch(error => {
    console.error("Error:", error);
  });
