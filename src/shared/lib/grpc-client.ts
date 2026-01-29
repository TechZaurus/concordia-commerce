import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

const PROTO_PATH = path.join(process.cwd(), 'protos', 'stats.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const statsProto = protoDescriptor.stats as any;

export interface StatsClient {
  GetDashboardStats: (
    request: { user_id: string },
    callback: (error: grpc.ServiceError | null, response: any) => void
  ) => void;
}

export const createStatsClient = (): StatsClient => {
  const GRPC_SERVER = process.env.GRPC_SERVER_URL || 'localhost:50051';

  return new statsProto.StatsService(
    GRPC_SERVER,
    grpc.credentials.createInsecure()
  ) as StatsClient;
};

export const getStatsFromGrpc = async (userId: string = 'default') => {
  return new Promise((resolve, reject) => {
    const client = createStatsClient();

    client.GetDashboardStats({ user_id: userId }, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve({
          totalSales: response.total_sales,
          activeUsers: response.active_users,
          conversionRate: response.conversion_rate,
        });
      }
    });
  });
};
