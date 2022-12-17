import { Client } from '../generated/fireboom.client'
  import { AuthenticationHookRequest } from 'fireboom-wundersdk'

  export default async function postAuthentication(hook: AuthenticationHookRequest) : Promise<void>{
    console.log('ccc')
    if (hook.user) {
      const client = new Client({})
      const { avatarUrl, email, name, nickName, provider, providerId, userId } = hook.user
      const resp = await client.query.GetOneUser({
        input: {
          // provider: provider!,
          providerId: providerId!,
          providerUserId: userId!
        }
      })
      if (resp.status === 'ok') {
        if (!resp.body.errors) {
          const existedUser = resp.body.data!.data
          if (!existedUser) {
            const _name = nickName || name || email!
            const rest = await client.mutation.CreateOneUser({
              input: {
                data: {
                  name: _name,
                  provider: provider!,
                  providerId: providerId!,
                  providerUserId: userId!,
                  avatarUrl: avatarUrl
                }
              }
            })
            if (rest.status === 'ok') {
              if (!rest.body.errors) {
                console.info(`Success sync user: ${providerId} - ${_name}`)
              }
            }
          }
        }
      }
    }
  }