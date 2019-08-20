type args = {
  accountId: String
}


export default {
  Query: {
    findUser: async (_: any, args: args, {}) => {
      const {accountId} = args;
      console.log(accountId)
      return {
        accountId: 'dany',
        createdAt: '20191111111111'
      }
    }
  }
}