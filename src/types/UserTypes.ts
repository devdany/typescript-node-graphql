type SignUpUser = {
  accountId: string
  password: string
}

type SignInUser = {
  accountId: string
  password: string
}

type TokenArg = {
  token: string
}

export {SignUpUser, SignInUser, TokenArg}
