type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditcardDetails?: number; // For optional properties
};

// function createUser(u: User){}

let myUser: User = {
  _id: "1",
  name: "Manas",
  email: "",
  isActive: true,
};

myUser.email = "g@h.com";
// myUser._id = "2" // Error: Cannot assign to '_id' because it is a read-only property.

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardeEtails = cardNumber &
  cardDate & {
    cvv: number;
  };
