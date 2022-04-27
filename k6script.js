import { sleep, check } from 'k6';
import http from 'k6/http';

export const options = {
  stages: [
    { duration: '2m', target: 1},
    // { duration: '1m30s', target: 90},
    // { duration: '10s', target: 20},
    { duration: '30s', target: 0}
  ]
}

//tests the general get function
export default function () {

  const res = http.get(`http://localhost:3005/products/116/related`);
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
}