// Daily Challenge
// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.
// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    } 
    watch() {
        return `${this.uploader} watched all ${this.time} seconds of ${this.title}!`
    }
}
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
const atla = new Video("ATLA", "Shir", 84180);
console.log(atla.watch());
// Instantiate a second Video instance with different values.
const video2 = new Video("Earth Doc", "Sally", 120);
console.log(video2.watch());

