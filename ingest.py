import requests

url="http://localhost:3000/entry"

datas=[
    {
	"level": "error",
	"message": "Failed to connect to DB",
    "resourceId": "server-1234",
	"timestamp": "2023-09-15T08:00:00Z",
	"traceId": "abc-xyz-123",
    "spanId": "span-456",
    "commit": "5e5342f",
    "metadata": {
        "parentResourceId": "server-0987"
    }
},
{
	"level": "error",
	"message": "Failed to connect to DB",
    "resourceId": "server-1234",
	"timestamp": "2023-09-15T08:00:00Z",
	"traceId": "abc-xyz-123",
    "spanId": "span-456",
    "commit": "5e5342f",
    "metadata": {
        "parentResourceId": "server-0987"
    }
},
{
	"level": "sds",
	"message": "Failed to connect to DB",
    "resourceId": "server-1234",
	"timestamp": "2023-09-15T08:00:00Z",
	"traceId": "abc-xyz-123",
    "spanId": "span-456",
    "commit": "5e5342f",
    "metadata": {
        "parentResourceId": "server-0987"
    }
}
]

getUrl=""#urlEndpoint to get log
# datas=requests.get(getUrl)

ifArray=False
if type(datas) is list:
    ifArray=True
# or recieve a array of logs as request 
if (ifArray):
    for data in datas:
        # response=data.json()
        x=requests.post(url,json=data)
else :
    # response=datas.json()
    x=requests.post(url,json=datas)