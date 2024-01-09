const http = require("http");

/**
 * Đổi code lại chỗ này, sau đó chạy lệnh: docker build -t kgks/k8s-tutorial:0.1.4 .
 * Sau đó push lên docker hub: docker push kgks/k8s-tutorial:0.1.4
 * Chạy lệnh: kubectl set image deployments.apps test-deployment test-deployment=kgks/k8s-tutorial:0.1.4
 */

const server = http.createServer((req, res) => {
  res.end("Hello application v2\n")
});

server.listen(3000, () => {
  console.log("Server listen on port 3000")
})
