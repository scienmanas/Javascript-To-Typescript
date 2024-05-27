const User = {
  name: "Manas",
  email: "iamscientistmanas@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: booleam }) {}


createUser({name: "Manas", isPaid: true})

// createUser({name: "Maanas", isPaid: true, email: "h@h.com"})
let user = {
    name: "Manas",
    isPaid: true,
    email: "H@hc.com"
}

createUser(user)     // This will work, unusual behaviour.



function createCourse(): {name: string, isPaid: boolean} {
    return {name: "React", isPaid: true}
    // return {}
}


// Type aliasis

type User = {
    name: string,
    email: string,
    isPaid: boolean
}

function createUser2(user: User): User {
    return user;
}

createUser2({name: "Manas", email: "h@h.com", isPaid: true})


export {};
