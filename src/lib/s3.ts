import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  PutObjectCommandInput,
} from "@aws-sdk/client-s3";

type StreamingBlobPayloadInputTypes = PutObjectCommandInput["Body"];

const bucketName = process.env.APP_BUCKET_NAME!;
const region = process.env.APP_BUCKET_REGION!;
const accessKeyId = process.env.APP_BUCKET_KEY!;
const secretAccessKey = process.env.APP_BUCKET_SECRET!;
export const bucketAccessName = process.env.APP_BUCKET_ACCESS_NAME!;

const s3 = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export const uploadFile = async (
  file: StreamingBlobPayloadInputTypes,
  key: string
) => {
  try {
    const res = await s3.send(
      new PutObjectCommand({
        Bucket: bucketName,
        Key: key,
        Body: file,
      })
    );
    return bucketAccessName + key;
  } catch (error) {
    console.log("Error from bucket (uploadFile): ", { error });
  }
};

export const deleteFile = async (key: string) => {
  try {
    const deleteRes = await s3.send(
      new DeleteObjectCommand({
        Bucket: bucketName,
        Key: key,
      })
    );
    return deleteRes;
  } catch (error) {
    console.log({ error });
  }
};

// FOR doing request from frontend with fetch
// export const getSignedURL = async (key: string) => {
//   const putObjectCommand = new PutObjectCommand({
//     Bucket: bucketName,
//     Key: key,
//   });

//   const signedUrl = await getSignedUrl(s3, putObjectCommand, {
//     expiresIn: 100,
//   });

//   console.log({ secretAccessKey, bucketName, accessKeyId, signedUrl });
//   return signedUrl;
// };
