output "cloudfront_domain_name" {
  value = module.cloudfront_s3_assets.cloudfront_domain_name
}

output "cloudfront_dist_id" {
  value = module.cloudfront_s3_assets.cloudfront_dist_id
}

output "s3_domain_name" {
  value = module.cloudfront_s3_assets.s3_domain_name
}

output "s3_bucket_arn" {
  value = module.cloudfront_s3_assets.s3_bucket_arn
}

output "s3_bucket_name" {
  value = module.cloudfront_s3_assets.s3_bucket_name
}