import {SignUpUser} from '../../types/UserTypes'
import User from '../models/User'
import { todayBasicFormat } from '../../lib/dateUtils'

export default {
  signUp: (user: SignUpUser) => {
    return User.create({
      ...user,
      createdAt: todayBasicFormat()
    });
  }
}