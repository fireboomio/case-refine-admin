
// import { AuthenticationHookRequest, AuthenticationResponse } from 'generated/fireboom.hooks'

export default async function mutatingPostAuthentication(hook: any) : Promise<any>{
	console.log(2222)
	return {
		status:'ok',
		user: { id: 1 }
	}
}
