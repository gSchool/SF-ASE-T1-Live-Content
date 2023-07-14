
// user objects have:
// id: random number to identify the user
// email
// username
const users = [
  { id: 1, email: "me@me.com", username: "LaurieHayes"},
  { id: 2, email: "someone@email.com", username: "definitelyarealperson" },
  { id: 3, email: "rich.key@email.com", username: "rich.key" }
];

// loop over and print out the usernames with the email in ()s next to it
// Ex: SuperAwesomeDude (awesome@email.com)
for(let user of users) {
    console.log(`${user.username} (${user.email})`);
};

// The second loop here will NOT work
// because the first i only exists for that loop
// for(let i=0; i < 1; i++) {}
// for(i=0; i < 1; i++) {}