# !/bin/sh

pwd=${ALIYUN_REGISTRY_PASSWORD}
docker login --username=liujianli413 -p $pwd registry.cn-hangzhou.aliyuncs.com
docker tag react-github-remen:latest registry.cn-hangzhou.aliyuncs.com/ljl_demo/react-github-remen:latest
docker push registry.cn-hangzhou.aliyuncs.com/ljl_demo/react-github-remen:latest


if [ $# -gt 0 ] ; then
  tag=$1
  docker tag react-github-remen:latest registry.cn-hangzhou.aliyuncs.com/ljl_demo/react-github-remen:${tag}
  docker push registry.cn-hangzhou.aliyuncs.com/ljl_demo/react-github-remen:${tag}
fi