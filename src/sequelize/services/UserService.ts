import {SignUpUser} from '../../types/UserTypes'
import User from '../models/User'
import { todayBasicFormat } from '../../lib/dateUtils'

export default {
  signUp: (user: SignUpUser) => {
    const today = todayBasicFormat()
    return User.create({
      ...user,
      createdAt: today,
      updatedAt: today,
      isDelete: false
    });
  },
  findUserByAccountId: (accountId: string) => {
    return User.findOne({
      where: {
        accountId: accountId,
        isDelete: false
      }
    })
  },
  findUserById: (userId: number) => {
    return User.findOne({
      where: {
        id: userId,
        isDelete: false
      }
    })
  },
  login: (userId: number, date: string) => {
    User.update({
      updatedAt: date
    },{
      where: {
        id: userId
      }
    })
  } 
}