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
	 custom: { }, },
});
