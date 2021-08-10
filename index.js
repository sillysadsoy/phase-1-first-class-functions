// function runFiveMiles() {
//     console.log("Go for a five mile run");
// }

// function lift() {
//     console.log("Life weights");
// }

// function swim() {
//     console.log("Swim 40 laps");
// }

// function Monday() {
//     exerciseRoutine(liftWeights);
//   }
  
//   function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
//   }

//   exerciseRoutine(function () {
//     console.log("Stretch! Work that core!");
//   });

//   function morningRoutine(exercise) {
//     let breakfast;
  
//     if (exercise === lift) {
//       breakfast = "protein bar";
//     } else if (exercise === swim) {
//       breakfast = "kale smoothie";
//     } else {
//       breakfast = "granola";
//     }
  
//     exerciseRoutine(exercise);
//     return function () {
//         console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//       };
//     }  
//why does declaring a variable const afterExercise = morningRoutine(swim); log stuff, i guess i thought it would jsut be stored?

function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction() {
    return () => 1 + 1;
}