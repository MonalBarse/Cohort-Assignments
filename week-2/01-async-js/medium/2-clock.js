/* 
Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/
/* 
const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    return `${hours}:${minutes}:${seconds} ${ampm}`;
};

let clock = setInterval(() => {
    const currentDate = new Date();
    
    // Format 1: HH:MM:SS
    console.log(formatTime(currentDate));

    // Format 2: HH:MM:SS AM/PM
    // console.log(formatTimeWithAMPM(currentDate));
}, 1000);

// Uncomment the function below if you want to use the second format
// const formatTimeWithAMPM = (date) => {
//     const hours24 = date.getHours();
//     const hours = hours24 % 12 || 12; // Convert to 12-hour format
//     const minutes = String(date.getMinutes()).padStart(2, '0');
//     const seconds = String(date.getSeconds()).padStart(2, '0');
//     const ampm = hours24 >= 12 ? 'PM' : 'AM';

//     return `${hours}:${minutes}:${seconds} ${ampm}`;
// };
 */

const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    return `${hours}:${minutes}:${seconds} ${ampm}`;
};

let x = 10; // Set the duration in seconds
let counter = 0;

const displayTime = () => {
    const currentDate = new Date();

    // Format 1: HH:MM:SS
    console.log(formatTime(currentDate));

    // Format 2: HH:MM:SS AM/PM
    // Uncomment the line below to enable the second format
    // console.log(formatTimeWithAMPM(currentDate));

    counter++;
    if (counter < x) {
        // Call displayTime recursively with a delay of 1000 milliseconds (1 second)
        setTimeout(displayTime, 1000);
    } else {
        console.log('Timer stopped.');
    }
};

// Uncomment the function below if you want to use the second format
// const formatTimeWithAMPM = (date) => {
//     const hours24 = date.getHours();
//     const hours = hours24 % 12 || 12; // Convert to 12-hour format
//     const minutes = String(date.getMinutes()).padStart(2, '0');
//     const seconds = String(date.getSeconds()).padStart(2, '0');
//     const ampm = hours24 >= 12 ? 'PM' : 'AM';

//     return `${hours}:${minutes}:${seconds} ${ampm}`;
// };

// Start the displayTime function
displayTime();
