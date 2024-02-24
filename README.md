# Some command line in kubectl

- kubectl apply -f kube.setup.yml -> to create all the resources
- kubectl delete -f kube.setup.yml -> to delete all the resources
- kubectl get all -> to get all the resources
- kubectl get pods -> to get all the pods
- kubectl get rc -> to get all the replication controllers
- kubectl get rs -> to get all the replica sets
- kubectl get svc -> to get all the services
- kubectl get deploy -> to get all the deployments
- kubectl get endpoints -> to get all the endpoints
- kubectl get ingress -> to get all the ingress
- kubectl get configmap -> to get all the configmaps
- kubectl get secret -> to get all the secrets
- kubectl get pv -> to get all the persistent volumes
- kubectl get pvc -> to get all the persistent volume claims
- kubectl get ns -> to get all the namespaces

## Một số lý thuyết về volume

### Các loại volume trong k8s

- emptyDir: emptyDir là loại volume đơn giản nhất, nó sẽ tạo ra một empty directory bên trong Pod, các container trong một Pod có thể ghi dữ liệu vào bên trong nó. Volume chỉ tồn tại trong một lifecycle của Pod, dữ liệu trong loại volume này chỉ được lưu trữ tạm thời và sẽ mất đi khi Pod bị xóa. Ta dùng loại volume này khi ta chỉ muốn các container có thể chia sẻ dữ liệu lẫn nhau và không cần lưu trữ dữ liệu lại. Ví dụ là dữ liệu log từ một thằng container chạy web API, và ta có một thằng container khác sẽ truy cập vào log đó để xử lý log.
