import { confirmPassword, generateJwtToken } from '../../../../../lib/authUtils'

import {SignInUser} from '../../../../../types/UserTypes'
import UserService from '../../../../../sequelize/services/UserService'
import { todayBasicFormat } from '../../../../../lib/dateUtils'

export default {
  Mutation: {
    signIn: async (_: any, args: SignInUser, {}) => {
      const {accountId, password} = args;
      const dbUser = await UserService.findUserByAccountId(accountId)

      if (!dbUser) {
        throw Error('AccountId Not Found')
      }

      const isMatchPassword: any = await confirmPassword(dbUser.dataValues.password, password)
      
      if(isMatchPassword.error) {
        throw Error('It is error to confirm password currently')
      }

      if(!isMatchPassword.result) {
        throw Error('Password is incorrect')
      }
      
      const today = todayBasicFormat()
      UserService.login(dbUser.dataValues.id, today)
      const token = generateJwtToken(dbUser.dataValues.id)

      return {
        user: {
          ...dbUser.dataValues,
          updatedAt: today
        },
        token: token
      }
    } 
  }
}