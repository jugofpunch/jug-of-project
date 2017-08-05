import os
import elasticsearch

def lambda_handler(event, context):
    ES_URL = os.environ['ES_URL']
    es = elasticsearch.Elasticsearch([ES_URL])
    res = es.search(index="booze", body={"query":{
        "match_all": {}
        }})
    return res

