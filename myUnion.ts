let score: number | string = 33;

score = 44;
score = "55";
// score = true

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let hitesh: User | Admin = { name: "hitesh", id: 334 };

hitesh = {
  username: "hc",
  id: 334,
};

function getDbId(id: number | string) {
  // making api calls
  if (typeof id === "string") {
    id.toLowerCase();
  }
  console.log(`Db id is: ${id}`);
}

getDbId(3);
getDbId("3");

// Arrat

const data: number[] = [1, 2, 3, 4, 5];
const data1: (number | string)[] = [1, 2, 3, 4, 5, "6"];




let pi: 3.14 = 3.14;



let seatAllotment: "window" | "middle" | "aisle" = "window";





export {};
