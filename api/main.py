from fastapi import FastAPI
from fastapi_utils.openapi import simplify_operation_ids

app = FastAPI()

@app.get('/')
async def root():
    return {'message': 'Hello World'}

simplify_operation_ids(app)