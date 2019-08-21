import { confirmJwtToken, confirmPassword, generateJwtToken } from '../../../../../lib/authUtils'

import { TokenArg } from '../../../../../types/UserTypes'
import UserService from '../../../../../sequelize/services/UserService'
import { todayBasicFormat } from '../../../../../lib/dateUtils'

export default {
  Mutation: {
    confirmToken: async (_: any, args: TokenArg , {}) => {
      const { token } = args;
      if (!token) {
        throw Error('Your login is expired')
      }
      try {
        const decoded: any = confirmJwtToken(token);
        const loginUser = await UserService.findUserById(decoded.id)
        const newToken = generateJwtToken(decoded.id)
        
        if(!loginUser) {
          throw Error('Not found user!')
        }

        const today = todayBasicFormat();
        UserService.login(loginUser.dataValues.id, today);
        return {
          user: {
            ...loginUser.dataValues,
            updatedAt: today
          },
          token: newToken
        }
      } catch (e) {
        throw Error('Your login is expired')
      }
    } 
  }
}