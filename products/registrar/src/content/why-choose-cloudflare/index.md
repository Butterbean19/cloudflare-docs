---
title: Why choose Cloudflare
order: 1
pcx-content-type: concept
---

# How domain registration works

![Domain Registration Overview](../static/domain-registry-process.png)

When you register a domain, you become the owner, or registrant, for that domain for a set period of time. Now that you are the registrant, you can create an authoritative record that tells the world the name servers for your domain. The domain name system, or DNS, uses those name servers to direct traffic to the IP address of your server.

When you put your site behind Cloudflare, you change your name servers at your registry to the ones Cloudflare provides. Once Cloudflare is responsible for your authoritative DNS, Cloudflare can deliver the features that make your site faster and safer.

Your registry keeps the authoritative record for your name servers. Each top-level domain (TLD) has a single registry that is responsible for maintaining those records. For example, `.com` is a TLD. Verisign is the exclusive registry for `.com`. As the TLD’s registry, Verisign stores the contact information and the name servers for every `.com` domain in the world. As the registrant for a domain, you can tell your domain’s registry which name servers a DNS resolver should use.

Where do registrars fit in this relationship? Domain registrars communicate your ownership, and subsequent changes, of a domain to the registry for that TLD. Registries trust registrars to only accept changes from the domain owner and to accurately convey that information so that the registry can update their record. While there is one registry for every TLD, hundreds of registrars are able to register a domain.

Beyond this, Cloudflare also offers you services such Domain Name System Security Extensions, custom domain protection, and WHOIS redaction.