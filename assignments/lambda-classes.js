// // CODE here for your Lambda Classes
// lambda-classes - We need a roster of Lambda School personnel. Build it!
// We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.

// Lambda personnel can be broken down into three different types of people.
// Instructors - extensions of Person
// Students - extensions of Person
// Project Managers - extensions of Instructors

// IMPORTANT - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });

// Person

// First we need a Person class. This will be our base-class
// Person receives name age location all as props
// Person receives speak as a method.
// This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props
class Person {
  constructor(stuff) {
    (this.name = stuff.name),
      (this.age = stuff.age),
      (this.location = stuff.location);
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

// Instructor

// Now that we have a Person as our base class, we'll build our Instructor class.
// Instructor uses the same attributes that have been set up by Person
// Instructor has the following unique props:
// specialty what the Instructor is good at i.e. 'redux'
// favLanguage i.e. 'JavaScript, Python, Elm etc.'
// catchPhrase i.e. Don't forget the homies
// Instructor has the following methods:
// demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
// grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'
class Instructor extends Person {
  constructor(stuff) {
    super(stuff);
    (this.specialty = stuff.specialty),
      (this.favLanguage = stuff.favLanguage),
      (this.catchPhrase = stuff.catchPhrase);
  }
  demo(subj) {
    return `Today we are learning about ${subj}.`;
  }
  grade(stud, subj) {
    return `${stud.name} receives a perfect score on ${subj}.`;
  }
  gradeAssignment(stud) {
    let valassign = Math.random();
    if (valassign > 0.5) {
      let poschange = Math.floor(Math.random() * 10);
      stud.grade += poschange;
      return `${stud.name}'s has gone up by ${poschange} points! It is now ${stud.grade}.`;
    } else {
      let negchange = Math.floor(Math.random() * -10);
      stud.grade += negchange;
      return `${stud.name}'s has gone down by ${negchange} points! It is now ${stud.grade}.`;
    }
  }
}

// Student

// Now we need some students!
// Student uses the same attributes that have been set up by Person
// Student has the following unique props:
// previousBackground i.e. what the Student used to do before Lambda School
// className i.e. CS132
// favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// Student has the following methods:
// listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
// PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
// sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
class Student extends Person {
  constructor(stuff) {
    super(stuff);
    (this.previousBackground = stuff.previousBackground),
      (this.className = stuff.className),
      (this.grade = stuff.grade),
      (this.favSubjects = stuff.favSubjects);
  }
  listsSubjects() {
    return this.favSubjects.forEach(function(item) {
      console.log(item);
    });
  }
  PRAssignment(subj) {
    return `${this.name} has submitted a PR for ${subj}`;
  }
  sprintChallenge(subj) {
    return `${this.name} has begun sprint challenge on ${subj}`;
  }
  canGraduate() {
    if (this.grade > 70) {
      return `${this.name} has graduated from Lambda School! Hurray!`;
    } else {
      return `${
        this.name
      } does not have a high enough grade. Graduation requires at least a 70% grade.`;
    }
  }
}

// Project Manager

// Now that we have instructors and students, we'd be nowhere without our PM's
// ProjectManagers are extensions of Instructors
// ProjectManagers have the following unique props:
// gradClassName: i.e. CS1
// favInstructor: i.e. Sean
// ProjectManagers have the following Methods:
// standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
// debugsCode a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}

class ProjectManager extends Instructor {
  constructor(stuff) {
    super(stuff);
    (this.gradClassName = stuff.gradClassName),
      (this.favInstructor = stuff.favInstructor);
  }
  standUp(chan) {
    return `${this.name} announces to ${chan}, "@channel standy times!"`;
  }
}

// Stretch Problem

// Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
// Add a graduate method to a student.
// This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
// If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.

const johnDoe = new Person({
  name: "John",
  age: 27,
  location: "Tampa"
});
const janeDoe = new Person({
  name: "Jane",
  age: 25,
  location: "Tampa"
});
console.log(johnDoe.speak());
console.log(janeDoe.speak());

const donny = new Student({
  name: "DJ",
  age: "25",
  location: "California",
  previousBackground: "Admin",
  className: "WebPT 7",
  favSubjects: ["JavaScript", "HTML"],
  grade: 67,
});
const shelbs = new Student({
  name: "Shelby",
  age: "25",
  location: "Arizona",
  previousBackground: "Pharmacy",
  className: "Web 21",
  favSubjects: ["CSS", "Javascript"],
  grade: 67,
});
console.log(donny.PRAssignment("HTML"));
shelbs.listsSubjects();
console.log(donny.sprintChallenge("JavaScript"));
console.log(shelbs.canGraduate());

const stanTheMan = new Instructor({
  name: "Stan",
  age: 36,
  location: "Maui",
  specialty: "JavaScript",
  favLanguage: "JavaScript",
  catchPhrase: "Juicy"
});
const randTheMan = new Instructor({
  name: "Rand",
  age: 32,
  location: "Tulsa",
  specialty: "CSS",
  favLanguage: "React",
  catchPhrase: "My grandpa was a dragon"
});
const francisTheMan = new Instructor({
  name: "Francis",
  age: 39,
  location: "Brooklyn",
  specialty: "HTML",
  favLanguage: "C++",
  catchPhrase: "Not today"
});
console.log(stanTheMan.demo("JavaScript"));
console.log(randTheMan.grade(shelbs, "HTML"));
console.log(francisTheMan.gradeAssignment(donny));

const jakeHill = new ProjectManager({
  name: "Jake",
  age: 27,
  location: "Spokane",
  specialty: "Ruby",
  favLanguage: "Redux",
  catchPhrase: "Say goodnight Gracy",
  gradClassName: "Web 17",
  favInstructor: "Francis"
});
const lukeHoll = new ProjectManager({
  name: "Luke",
  age: 29,
  location: "Bismarck",
  specialty: "C",
  favLanguage: "Python",
  catchPhrase: "Get to the choppa",
  gradClassName: "Web 2",
  favInstructor: "Stan"
});
console.log(jakeHill.gradeAssignment(shelbs));
console.log(lukeHoll.standUp("WebPT 11"));
