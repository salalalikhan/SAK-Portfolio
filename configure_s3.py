import boto3
from botocore.exceptions import NoCredentialsError, PartialCredentialsError

# Configure S3 client
try:
    s3 = boto3.client('s3', region_name='us-east-2')
    response = s3.list_objects_v2(Bucket='sak-portfolio')
    print("S3 Bucket Contents:", response)
except NoCredentialsError:
    print("No AWS credentials were found.")
except PartialCredentialsError:
    print("Incomplete AWS credentials provided.")
except Exception as e:
    print(f"An error occurred: {e}")
