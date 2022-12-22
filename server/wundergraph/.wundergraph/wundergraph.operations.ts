import { configureWunderGraphOperations } from 'fireboom-wundersdk';
import type { OperationsConfiguration } from './generated/fireboom.operations';

export default configureWunderGraphOperations<OperationsConfiguration>({
	operations: { 
		defaultConfig:{authentication:{required:false}},
		queries : (config :any) => ({
			...config,
			caching : {enable:false,staleWhileRevalidate:60,maxAge:60,public:false},
			liveQuery: {enable:false,pollingIntervalSeconds:0},
	}),
 		mutations : (config :any) => ({
		...config,
	}),
       	subscriptions : (config :any) => ({
		...config,
	}),
	 custom: {GetUserList : (config :any) => ({
				...config,
				 
				caching:{
		...config.caching,
		
		
		
	}, 
				liveQuery:{
		...config.liveQuery,
		
		
	}, 
			}), GetRoleList : (config :any) => ({
				...config,
				 
				caching:{
		...config.caching,
		
		
		
	}, 
				liveQuery:{
		...config.liveQuery,
		
		
	}, 
			}), GetMenuList : (config :any) => ({
				...config,
				 
				caching:{
		...config.caching,
		
		
		
	}, 
				liveQuery:{
		...config.liveQuery,
		
		
	}, 
			}), CreateOneMenu : (config :any)  => ({
				...config,
				 
			}), GetOneMenu : (config :any) => ({
				...config,
				 
				caching:{
		...config.caching,
		
		
		
	}, 
				liveQuery:{
		...config.liveQuery,
		
		
	}, 
			}), UpdateOneMenu : (config :any)  => ({
				...config,
				 
			}), DeleteOneMenu : (config :any)  => ({
				...config,
				 
			}), GetUserRoles : (config :any) => ({
				...config,
				 
				caching:{
		...config.caching,
		
		
		
	}, 
				liveQuery:{
		...config.liveQuery,
		
		
	}, 
			}), DisconnectOneUserRole : (config :any)  => ({
				...config,
				 
			}), ConnectOneUserRole : (config :any)  => ({
				...config,
				 
			}), GetRoleUsers : (config :any) => ({
				...config,
				 
				caching:{
		...config.caching,
		
		
		
	}, 
				liveQuery:{
		...config.liveQuery,
		
		
	}, 
			}), GetRoleMenus : (config :any) => ({
				...config,
				 
				caching:{
		...config.caching,
		
		
		
	}, 
				liveQuery:{
		...config.liveQuery,
		
		
	}, 
			}), DisconnectOneRoleMenu : (config :any)  => ({
				...config,
				 
			}), ConnectOneRoleMenu : (config :any)  => ({
				...config,
				 
			}), GetOneUser : (config :any) => ({
				...config,
				 
				caching:{
		...config.caching,
		
		
		
	}, 
				liveQuery:{
		...config.liveQuery,
		
		
	}, 
			}), CreateOneUser : (config :any)  => ({
				...config,
				 
			}), GetUserRoleMenu : (config :any) => ({
				...config,
				 
				caching:{
		...config.caching,
		
		
		
	}, 
				liveQuery:{
		...config.liveQuery,
		
		
	}, 
			}), CreateOnePet : (config :any)  => ({
				...config,
				 
			}), DeleteOnePet : (config :any)  => ({
				...config,
				 
			}), UpdateOnePet : (config :any)  => ({
				...config,
				 
			}), GetPetList : (config :any) => ({
				...config,
				 
				caching:{
		...config.caching,
		
		
		
	}, 
				liveQuery:{
		...config.liveQuery,
		
		
	}, 
			}), GetOnePet : (config :any) => ({
				...config,
				 
				caching:{
		...config.caching,
		
		
		
	}, 
				liveQuery:{
		...config.liveQuery,
		
		
	}, 
			}), DeleteManyPet : (config :any)  => ({
				...config,
				 
			}), GetManyPet : (config :any) => ({
				...config,
				 
				caching:{
		...config.caching,
		
		
		
	}, 
				liveQuery:{
		...config.liveQuery,
		
		
	}, 
			}),  }, },
});
