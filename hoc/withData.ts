import { withAppSyncData } from 'next-apollo-appsync'
import awsConfig from '../pages/aws-exports';

const config = {
    url: awsConfig.aws_appsync_graphqlEndpoint,
    region: awsConfig.aws_appsync_region,
    auth: {
        type: awsConfig.aws_appsync_authenticationType,
    },
}

export default withAppSyncData(config);