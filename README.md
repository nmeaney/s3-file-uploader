# S3 File Uploader

Utility to upload small (text) files to S3.


### Installation

```sh
# Clone it
git clone https://github.com/nmeaney/s3-file-uploader.git

# Change folder
cd s3-file-uploader

# Install dependencies
npm install
```

### Demo Operation

1. Setup your AWS credentials and default region locally.
    
  See http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/configuring-the-jssdk.html

2. Create a bucket on S3 to receive your files.

3. In `config.js`, set `bucketName` to the name of your bucket.

4. In `config.js`, set `sourceFilePath` to the absolute path of your log files folder.

5. Execute `npm start` to copy files from `sourceFilePath` to your S3 bucket.
