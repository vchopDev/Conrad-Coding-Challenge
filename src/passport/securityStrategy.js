const passport = require("passport");
const BasicStrategy = require("passport-http").BasicStrategy;

const users = [{ username: "test", password: "12345678" }];

passport.use(
  new BasicStrategy((username, password, done) => {
    const user = users.find(x => x.username === username);

    if (!user) {
      return done(null, false);
    }

    if (!ValidatePassword(password, user)) {
      return done(null, false);
    }
    return done(null, user);
  })
);

const ValidatePassword = (password, user) => {
  return user.password === password;
};

module.exports = passport;
