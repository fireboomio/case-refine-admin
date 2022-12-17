import {GraphQLObjectType, GraphQLSchema, GraphQLString} from 'graphql';
import {configureWunderGraphServer} from 'fireboom-wundersdk';
export { type AuthenticationResponse } from 'fireboom-wundersdk'
import type {HooksConfig} from './generated/fireboom.hooks';
import type {InternalClient} from './generated/fireboom.internal.client';

  import postAuthentication from './auth/postAuthentication'; 
  import GetMenuList_preResolve from './operations/GetMenuList/preResolve'; 
  

export default configureWunderGraphServer<HooksConfig, InternalClient, {}>(() => ({
   hooks:{  authentication: {
				 postAuthentication,
            }, queries:{GetMenuList :{  preResolve:GetMenuList_preResolve, },},mutations:{}, },  graphqlServers: [{
			apiNamespace: "gql",
			serverName: "gql",
			schema: new GraphQLSchema({
				query: new GraphQLObjectType({
					name: 'RootQueryType',
					fields: {
						hello: {
							type: GraphQLString,
							resolve() {
								return 'world';
							},
						},
					},
				}),
			}),
		},]

}));
