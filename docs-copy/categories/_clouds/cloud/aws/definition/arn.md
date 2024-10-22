---
draft : false
mx:
  lp:
  ref:
    child:
      - definition/resource
---

# Definition
- 1 acronym
- 1 String
- 1 resource:ID


# Format
member:
- Partition 
- service
- region
- account-id
- resource-type
- resource-id

syntax

```bash
arn:partition:service:region:account-id:resource-id
arn:partition:service:region:account-id:resource-type/resource-id
arn:partition:service:region:account-id:resource-type:resource-id
```


## Partition 
- denote
  - 1 group of AWS Regions
  - each AWS account is scoped to one partition

- can be

|Name|Description|
|-|-|
|**aws**|AWS Regions|
|**aws-cn**|China Regions|
|**aws-us-gov**|AWS GovCloud (US) Regions|
<br>

## service
The service namespace that identifies the AWS product.
## region
The Region code. For example, us-east-2 for US East (Ohio). For the list of Region codes, see Regional endpoints.
## account-id
The ID of the AWS account that owns the resource, without the hyphens. For example, 123456789012.
## resource-type
The resource type. For example, vpc for a virtual private cloud (VPC).
## resource-id
- denote
  - the [name | id | resource path] of the resource
  - Some `resource-id` include 
    - a parent resource (sub-resource-type/parent-resource/sub-resource)
    - a qualifier such as a version (resource-type:resource-name:qualifier).




# Example    

## VPC
```bash
arn:aws:ec2:us-east-1:123456789012:vpc/vpc-0e9801d129EXAMPLE
```
## IAM user
```bash
arn:aws:iam::123456789012:user/johndoe
arn:aws:iam::account:user/user-name-with-path
```
## IAM role
```bash
arn:aws:iam::account:role/role-name-with-path
```

## IAM group
```bash
arn:aws:iam::account:group/group-name-with-path
```

## IAM policy
|syntax|tags|description|
|-|-|-|
|`arn:aws:iam::account:policy/policy-name-with-path`|
|`arn:aws:iam::aws:policy/IAMReadOnlyAccess`|
|`arn:aws:iam::aws:policy/ReadOnlyAccess`||provides read-only access to all AWS services and resources

## SNS topic
```bash
arn:aws:sns:us-east-1:123456789012:example-sns-topic-name
```

## IAM other
```bash
arn:aws:iam::account:root  
arn:aws:iam::account:instance-profile/instance-profile-name-with-path
arn:aws:sts::account:federated-user/user-name
arn:aws:sts::account:assumed-role/role-name/role-session-name
arn:aws:iam::account:mfa/virtual-device-name-with-path
arn:aws:iam::account:u2f/u2f-token-id
arn:aws:iam::account:server-certificate/certificate-name-with-path
arn:aws:iam::account:saml-provider/provider-name
arn:aws:iam::account:oidc-provider/provider-name
```

