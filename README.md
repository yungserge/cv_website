<h1>CV hosted on AWS</h1>

<h2>Description</h2>
 The goal of this project was to leverage the power of the Cloud (AWS) and some of it's key services to create a fully functioning serverless web application.  

The site is hosted on the S3 bucket that stores all of my HTML, CSS, and JavaScript files for the website as well as documents and images, and the bucket is linked it as an origin to my CloudFront distribution to host the website. I set this up to be a secure site by reddirecting traffic to HTTPS and using AWS Certificate Manager (ACM) for the SSL certificates. I also bought a domain to use with Route53 as my domain registrar, and created the A records to point my new domain name (https://www.yungserge.com/) to my CloudFront distribution.

I also used Lambda function with Dynamo DB to keep track of how many times the page has been visited. My plan for the future improvement is to change the JS code to call the Lambda function only when my CV is downloaded, instead of counting the total number of visitors. 
 <br />


<h2>Resources Used </h2>

- <b>AWS Route 53</b>
- <b>AWS CloudFront</b>
- <b>AWS Certificate Manager</b>
- <b>Amazon S3</b>
- <b>AWS Dynamo DB</b>
- <b>AWS Lambda</b>

