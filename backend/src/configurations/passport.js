/* eslint-disable import/no-extraneous-dependencies */
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const User = require('../DAO/models/users.model');

dotenv.config();

const { jwtTokenSecret } = process.env;

passport.use(
  new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
      console.log('Correo recibido:', email);
      console.log('Contraseña recibida:', password);

      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false, { message: 'Email not found', user });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: 'Incorrect password', user });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }),
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtTokenSecret,
}, (jwtPayload, done) => done(null, jwtPayload)));

function generateToken(prop) {
  return jwt.sign({ prop }, jwtTokenSecret, { expiresIn: '1h' });
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  jwt.verify(token, jwtTokenSecret, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token no valido' });
    }
    req.user = user;
    console.log('req.user', req.user);
    next();
  });
}

module.exports = {
  passport,
  generateToken,
  authenticateToken,
};
