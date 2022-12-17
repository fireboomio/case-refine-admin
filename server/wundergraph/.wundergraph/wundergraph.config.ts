import {
    Application,
    authProviders,
    configurePublishWunderGraphAPI,
    configureWunderGraphApplication,
    cors,
    introspect,
    templates,
} from '@wundergraph/sdk';
import server from './wundergraph.server';
import operations from './wundergraph.operations';



const db_local_my_0 = introspect.mysql({
						databaseURL:"mysql://root@127.0.0.1:3306/fireboom-refine",apiNamespace:"local_my" 
					}); 


const myApplication = new Application({
    name: 'app',
    apis: [db_local_my_0],
});

// configureWunderGraph emits the configuration
configureWunderGraphApplication({
    application: myApplication,
    server,
    operations,
    authentication:{} ,
    authorization: {roles:["admin","user"]} ,
    s3UploadProvider:[],
    cors: {        ...cors.allowAll, allowedOrigins:["localhost:9123"],allowedMethods:["GET","POST"],allowedHeaders:["*"],exposedHeaders:["*"],maxAge:120,allowCredentials:true },
    security: {enableGraphQLEndpoint:true} ,
    dotGraphQLConfig: {
            hasDotWunderGraphDirectory: false,
    },
    codeGenerators: [
            {
                templates: [
                    ...templates.typescript.all,
                    templates.typescript.operations,
                    templates.typescript.linkBuilder,
                ],
            },
            {
                templates: [
                    ...templates.typescript.nextjs,
                ],
                // create-react-app expects all code to be inside /src
                path: "../../static/sdk/src",
            },
    ],
});