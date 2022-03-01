let submissions = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true
    },
];

// console.log(submissions);

const addSubmission = (array, newName, newScore, newDate) => {
    array.push({name: newName, score: newScore, date: newDate, passed: newScore >= 60 })
}


// addSubmission(submissions, "Tammy", 12, "2022-02-28");
// console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
    array.splice(index,1);
}

// deleteSubmissionByIndex(submissions, 0);
// console.log(submissions);

const deleteSubmissionByName = (array, name) => {
    let index = array.findIndex(student => student.name === name)

    array.splice(index,1);
}

// deleteSubmissionByName(submissions, "Jack");
// console.log(submissions);

// 5.

const editSubmission = (array, index, score) => {
    array[index].score = score;
    array[index].passed = score >= 60;
}


// editSubmission(submissions, 2, 115);
// console.log(submissions)


// 6.
const findSubmissionByName = (array, name) => array.find(student => student.name === name)

// console.log(findSubmissionByName(submissions, "Jill"));

// function findSubmissionByName (array, name) {
//     return array.find(function(student){
//         return student.name === name
//     })
// }

// console.log(findSubmissionByName(submissions, "Jack"))

// 7.

const findLowestScore = array => {
    let lowestScore = Infinity;
    let lowestScoreStudent;

    array.forEach(jakob => {
        // console.log(jakob);
        if (jakob.score < lowestScore) {
            lowestScore = jakob.score;
            lowestScoreStudent = jakob;
        }
    })
    // when the loop is done
    return lowestScoreStudent;
}

// console.log(findLowestScore(submissions));

// 8.

const findAverageScore = array => {
    let total = 0;
    for (let student of array){
        // console.log(student.score)
        total += student.score;
    }
    return total / array.length;
}

// console.log(findAverageScore(submissions))

// 9

function filterPassing(array) {
    return array.filter(function(student){
        return student.score >= 60
    })
}

// console.log(filterPassing(submissions))
// console.log(submissions)

// 10

// function filter90AndAbove(array) {
//     let passingGrade = array.filter(function(people){
//         return people.score >= 90
//     })

//     return passingGrade
// }


const filter90AndAbove = (array) => array.filter(people => people.score >= 90)

console.log(filter90AndAbove(submissions))


const createRange = (start, end) => {
    let answer = [];
    for (let i = start; i <= end; i++) {
        answer.push(i);
    }
    return answer;
}

console.log(createRange(7,20));