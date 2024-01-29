<h1>CV hosted on AWS</h1>

<h2>Description</h2>
 The goal of this project was to leverage the power of the Cloud (in my case AWS) and some of it's key services to create a fully functioning serverless web application that "serves" (no pun intended) as a resume or portfolio.

The site is hosted on the S3 bucket that stores all of my HTML, CSS, and JavaScript files for the website, and the bucket is linked it as an origin to my CloudFront distribution to host the website. I set this up to be a secure site by reddirecting traffic to HTTPS and using AWS Certificate Manager (ACM) for the SSL certs. I also bought a domain to use with Route53 as my domain registrar, and created the A records to point my new domain name (https://www.yungserge.com/) to my CloudFront distribution.

 <br />


<h2>Resources Used </h2>

- <b>AWS Route 53</b>
- <b>AWS CloudFront</b>
- <b>AWS Certificate Manager</b>
- <b>Amazon S3</b>

