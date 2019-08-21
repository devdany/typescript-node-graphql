import {JWT_SECRET_KEY, PASSWORD_SALT_ROUND} from '../../config/secretkey'

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const generateJwtToken = (id: number) => jwt.sign({ id: id }, JWT_SECRET_KEY, {
  expiresIn: '7d',
  issuer: 'strum',
  subject: 'login_user'
});

export const confirmJwtToken = (token: string) => jwt.verify(token, JWT_SECRET_KEY);

export const generatePasswordHash = (password: string) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, PASSWORD_SALT_ROUND, (err: any, hash: string) => {
      if (!err) {
        resolve({ result: hash, error: null })
      } else {
        reject({ error: err, result: null })
      }
    });
  })
}

export const confirmPassword = (encoded: string, plain: string) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(plain, encoded, (err, res) => {
      if (!err) {
        resolve({ result: res, error: null })
      } else {
        reject({ result: null, error: err })
      }
    });
  })
};