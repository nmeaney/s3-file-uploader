// NOTE: All file operations are synchronous

const fs = require('fs');
const AWS = require('aws-sdk');
const config = require('./config');

const s3 = new AWS.S3();
let uploadedCount = 0;
let emptyCount = 0;

// Check that file contains data
function containsData(file) {

  const fileDescriptor = fs.openSync(`${config.sourceFilePath}/${file}`, 'r');
  const fileStatistics = fs.fstatSync(fileDescriptor);

  if (fileStatistics.size <= 0) {

    emptyCount++;
    return false;
  }

  return file;
}

// Build S3 upload object
function buildUploadOptions(file) {

  return {

    Key: file,
    Bucket: config.bucketName,
    ContentType: config.contentType,
    Body: fs.readFileSync(`${config.sourceFilePath}/${file}`)
  };
}

// Upload a file to S3
function uploadFile(file) {

  s3.putObject(buildUploadOptions(file), (err, data) => {

    if (err) { throw err; }

    if (data) {

      process.stdout.write('.');
      uploadedCount++;
    }
  });
}

// Upload all non-empty files in config.sourceFilePath to S3
fs.readdirSync(config.sourceFilePath)
.filter(containsData)
.forEach(uploadFile);

// Output status
process.on('exit', function() {

  console.log('\nFinished uploading files:');
  console.log('- Uploaded %s files to S3 bucket "%s"', uploadedCount, config.bucketName);
  console.log('- Ignored %s empty files', emptyCount);
});
