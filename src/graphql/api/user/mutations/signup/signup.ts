import {generateJwtToken, generatePasswordHash} from '../../../../../lib/authUtils'

import {SignUpUser} from '../../../../../types/UserTypes'
import UserService from '../../../../../sequelize/services/UserService'

export default {
  Mutation: {
    signUp: async (_: any, args: SignUpUser, {}) => {
      const {accountId, password} = args;
      
      const dbUser = await UserService.findUserByAccountId(accountId)
      if(dbUser) {
        throw Error('Already used AccountId!')
      }

      const encoded: any = await generatePasswordHash(password)
      
      if (encoded.error) {
        throw Error('Fail to encrypt password for security')
      }

      const signUpUser = await UserService.signUp({
        accountId: accountId,
        password: encoded.result
      });

      const token = generateJwtToken(signUpUser.dataValues.id)
      return {
        user: signUpUser.dataValues,
        token: token
      }
    }
  }
}