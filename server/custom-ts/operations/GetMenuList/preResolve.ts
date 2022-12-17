import { HookRequest } from 'generated/fireboom.hooks'

export default async function preResolve(hook: HookRequest) : Promise<void>{
	// TODO: 在此处添加代码
    console.log(111)
}