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

## Deployment command line

- kubectl describe deployments.app <deployment_name> -> get detail information. VD: kubectl describe deployments.app test-deployment
- kubectl set image deployments.apps <deployment_name> <container_name>=<new_image> -> update image of pod. VD: kubectl set image deployments.apps test-deployment test-deployment=kgks/k8s-tutorial:0.1.4
- kubectl rollout status deploy <deployment_name> -> get status of update deployment processing. VD: kubectl rollout status deploy test-deployment
- kubectl rollout history deploy <deployment_name> -> get histories of update deployment. VD: kubectl rollout history deploy test-deployment
- kubectl rollout undo deployment <deployment_name> --to-revision=<version_deployment> -> rollback old version. VD: kubectl rollout undo deployment test-deployment --to-revision=1
