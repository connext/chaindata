terraform {
  backend "s3" {
    bucket = "connext-terraform-state-file-chaindata"
    key    = "state"
    region = "us-east-2"
  }
}


provider "aws" {
  region = "us-east-2"
  alias  = "aws_cloudfront"
}


provider "aws" {
  region = "us-east-2"
}


module "cloudfront_s3_assets" {
  source      = "./config"
  domain_name = "connext-chaindata"
}

