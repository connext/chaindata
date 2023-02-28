
data "aws_route53_zone" "primary" {
  zone_id = "Z03634792TWUEHHQ5L0YX"
}

resource "aws_route53_record" "root_domain" {
  zone_id = data.aws_route53_zone.primary.zone_id
  name    = "chaindata.connext.ninja"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}
