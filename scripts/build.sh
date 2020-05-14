# !/bin/sh

if [ $# -gt 1 ] ; then
docker build -t react-github-remen:$1 -t react-github-remen:latest .
else
docker build -t react-github-remen:latest .
fi