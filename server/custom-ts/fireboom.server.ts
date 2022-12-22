import {GraphQLObjectType, GraphQLSchema, GraphQLString} from 'graphql';
import {configureWunderGraphServer} from 'fireboom-wundersdk';
export { type AuthenticationResponse } from 'fireboom-wundersdk'
import type {HooksConfig} from './generated/fireboom.hooks';
import type {InternalClient} from './generated/fireboom.internal.client';

  import postAuthentication from './auth/postAuthentication'; 
   

export default configureWunderGraphServer<HooksConfig, InternalClient, {}>(() => ({
   hooks:{  authentication: {
				 postAuthentication,
            },  },  graphqlServers: [{
			apiNamespace: "gql",
			serverName: "gql",
			enableGraphQLEndpoint:true,
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
