import {SignUpUser} from '../../../../../types/UserTypes'
import UserService from '../../../../../sequelize/services/UserService'

export default {
  Mutation: {
    signUp: async (_: any, args: SignUpUser, {}) => {
      //const {accountId, password} = args;
      const signUpUser = await UserService.signUp(args);
      console.log(signUpUser.dataValues);
      return null
    }
  }
}