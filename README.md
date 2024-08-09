# Kafka implementaion 

## Configaration & Requirment

 1.Docker
 2.Nodejs

 # Docker 
  
 ###  First Start Zookerp like 

  `docker run -p 2181:2181 zookeeper`


### Connect confluentinc/cp-kafka with zookeeper


  `docker run -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=192.168.1.48:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.1.48:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka`


# Nodejs

 Run admin.js separate/new terminal  it will create the topic and clustered

 `node admin.js`

 Run producer.js  separate/new terminal it will produce the message enter your message after > this symbols

 ```node producer.js```

 Run consumer.js separate/new terminal it will consume the message whatever producer will producer the message 
 
 `node consumer.js`

 
Reference: https://gist.github.com/piyushgarg-dev/32cadf6420c452b66a9a6d977ade0b01

