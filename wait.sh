#!/bin/sh
# wait.sh

set -e
# on passe en parametre le nom du container et le port de mysql
host="$1"
port="$2"
shift 2
cmd="$@"
#on attend grace a la commande nc qui envoie des commandes 
#vers le container mysql pour savoir si il est fonctionnel
#avant de demarrer le container spring ou php ou java
#qui a besoin de mysql
until nc -z "$host" "$port"; do
  echo "Waiting for MySQL at $host:$port..."
  sleep 1
done

exec $cmd
