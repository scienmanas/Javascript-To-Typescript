function addTwo(num: number) {
  // num.toLowerCase()
  return num + 2;
}

// addTwo("5");
addTwo(5);

function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser("Manas", "Done", false);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("h", "h@g.com");

function addTwoNew(num: number): number {
  // return "hello world";
  return num + 5;
}

let myValue = addTwoNew(2);

// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//         return true;
//     }
//     return "200 OK"
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
  return `hero is ${hero}`;
//   return 1;
});


function consoleError(errmsg: string): void {
    console.log(errmsg);
}


function handleError(errmsg: string): never {
    throw new Error(errmsg);
}



export {};
