
import { format } from 'url';

const createEndpoint = (
  id, { protocol = 'http', hostname = 'app.climb.social', pathname = '/api/v1/collections/' }
) => format({ protocol, hostname, pathname: pathname + id });

export default createEndpoint;
