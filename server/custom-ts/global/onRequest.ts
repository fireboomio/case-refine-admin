
import { HttpTransportHookRequest, SKIP, CANCEL } from 'generated/fireboom.hooks'
import type { WunderGraphRequest } from 'fireboom-wundersdk'

export default async function onOriginRequest(hook: HttpTransportHookRequest) : Promise<WunderGraphRequest | SKIP | CANCEL>{
	console.log('111')
	return hook.request
}
