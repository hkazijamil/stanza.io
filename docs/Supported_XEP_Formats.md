# JXT Definitions for XMPP

> Your XMPP is now JSON

## Table of Contents

-   [Supported RFCs and Internet-Drafts](#supported-rfcs-ids)
-   [Suported XEPs](#supported-xeps)
-   [Planned Support for XEPs](#planned-support-for-xeps)
-   [Project Information](#project-information)

## Supported RFCs/IDs

| RFC/ID                                                      | Name                                                                              | Source                   |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------ |
| [RFC 7395](https://tools.ietf.org/html/rfc7395)             | An Extensible Messaging and Presence Protocol (XMPP) Subprotocol for WebSocket    | [Source](src/rfc7395.ts) |
| [RFC 6121](https://tools.ietf.org/html/rfc6121)             | Extensible Messaging and Presence Protocol (XMPP): Instant Messaging and Presence | [Source](src/rfc6121.ts) |
| [RFC 6120](https://tools.ietf.org/html/rfc6120)             | Extensible Messaging and Presence Protocol (XMPP): Core                           | [Source](src/rfc6120.ts) |
| [RFC 3921](https://tools.ietf.org/html/rfc3921)             | Extensible Messaging and Presence Protocol (XMPP): Core                           | [Source](src/rfc3921.ts) |  | [draft-cridland-xmpp-session-01](https://tools.ietf.org/html/draft-cridland-xmpp-session-01) | Here Lies Extensible Messaging and Presence Protocol (XMPP) Session Establishment | [Source](src/rfc3921.ts) |
| [XRD](http://docs.oasis-open.org/xri/xrd/v1.0/xrd-1.0.html) | Extensible Resource Descriptor (XRD)                                              | [Source](src/xrd.ts)     |

## Supported XEPs

| XEP                                                   | Name                                               | Version | Source                   |
| ----------------------------------------------------- | -------------------------------------------------- | ------- | ------------------------ |
| [XEP-0004](https://xmpp.org/extensions/xep-0004.html) | Data Forms                                         | 2.9     | [Source](src/xep0004.ts) |
| [XEP-0016](https://xmpp.org/extensions/xep-0016.html) | Privacy Lists                                      | 1.7     | [Source](src/xep0016.ts) |
| [XEP-0030](https://xmpp.org/extensions/xep-0030.html) | Service Discovery                                  | 2.5rc3  | [Source](src/xep0030.ts) |
| [XEP-0033](https://xmpp.org/extensions/xep-0033.html) | Extended Stanza Addressing                         | 1.3.1   | [Source](src/xep0033.ts) |
| [XEP-0045](https://xmpp.org/extensions/xep-0045.html) | Multi-User Chat                                    | 1.31.1  | [Source](src/xep0045.ts) |
| [XEP-0047](https://xmpp.org/extensions/xep-0047.html) | In-Band Bytestreams                                | 2.0     | [Source](src/xep0047.ts) |
| [XEP-0048](https://xmpp.org/extensions/xep-0048.html) | Bookmarks                                          | 1.1     | [Source](src/xep0048.ts) |
| [XEP-0049](https://xmpp.org/extensions/xep-0049.html) | Private XML Storage                                | 1.2     | [Source](src/xep0049.ts) |
| [XEP-0050](https://xmpp.org/extensions/xep-0050.html) | Ad-Hoc Commands                                    | 1.2.2   | [Source](src/xep0050.ts) |
| [XEP-0054](https://xmpp.org/extensions/xep-0054.html) | vcard-temp                                         | 1.2     | [Source](src/xep0054.ts) |
| [XEP-0055](https://xmpp.org/extensions/xep-0055.html) | Jabber Search                                      | 1.3     | [Source](src/xep0055.ts) |
| [XEP-0059](https://xmpp.org/extensions/xep-0059.html) | Result Set Management                              | 1.0     | [Source](src/xep0059.ts) |
| [XEP-0060](https://xmpp.org/extensions/xep-0060.html) | Publish-Subscribe                                  | 1.15.1  | [Source](src/xep0060.ts) |
| [XEP-0065](https://xmpp.org/extensions/xep-0065.html) | SOCKS5 Bytestreams                                 | 1.8.1   | [Source](src/xep0065.ts) |
| [XEP-0066](https://xmpp.org/extensions/xep-0066.html) | Out of Band Data                                   | 1.5     | [Source](src/xep0066.ts) |
| [XEP-0071](https://xmpp.org/extensions/xep-0071.html) | XHTML-IM                                           | 1.5.4   | [Source](src/xep0071.ts) |
| [XEP-0077](https://xmpp.org/extensions/xep-0077.html) | In-Band Registration                               | 2.4     | [Source](src/xep0077.ts) |
| [XEP-0080](https://xmpp.org/extensions/xep-0080.html) | User Location                                      | 1.9     | [Source](src/xep0080.ts) |
| [XEP-0084](https://xmpp.org/extensions/xep-0084.html) | User Avatar                                        | 1.1.1   | [Source](src/xep0084.ts) |
| [XEP-0085](https://xmpp.org/extensions/xep-0085.html) | Chat State Notifications                           | 2.1     | [Source](src/xep0085.ts) |
| [XEP-0092](https://xmpp.org/extensions/xep-0092.html) | Software Version                                   | 1.1     | [Source](src/xep0092.ts) |
| [XEP-0107](https://xmpp.org/extensions/xep-0107.html) | User Mood                                          | 1.2.1   | [Source](src/xep0107.ts) |
| [XEP-0108](https://xmpp.org/extensions/xep-0108.html) | User Activity                                      | 1.3     | [Source](src/xep0108.ts) |
| [XEP-0114](https://xmpp.org/extensions/xep-0114.html) | Jabber Component Protocol                          | 1.6     | [Source](src/xep0114.ts) |
| [XEP-0115](https://xmpp.org/extensions/xep-0115.html) | Entity Capabilities                                | 1.5.1   | [Source](src/xep0115.ts) |
| [XEP-0118](https://xmpp.org/extensions/xep-0118.html) | User Tune                                          | 1.2     | [Source](src/xep0118.ts) |
| [XEP-0122](https://xmpp.org/extensions/xep-0122.html) | Data Forms Validation                              | 1.0.1   | [Source](src/xep0122.ts) |
| [XEP-0124](https://xmpp.org/extensions/xep-0124.html) | Bidirectional-streams Over Synchronous HTTP (BOSH) | 1.11.1  | [Source](src/xep0124.ts) |
| [XEP-0128](https://xmpp.org/extensions/xep-0128.html) | Service Discovery Extensions                       | 1.0     | [Source](src/xep0030.ts) |
| [XEP-0131](https://xmpp.org/extensions/xep-0131.html) | Stanza Headers and Internet Metadata               | 1.2     | [Source](src/xep0131.ts) |
| [XEP-0138](https://xmpp.org/extensions/xep-0138.html) | Stream Compression                                 | 2.0     | [Source](src/xep0138.ts) |
| [XEP-0141](https://xmpp.org/extensions/xep-0141.html) | Data Forms Layout                                  | 1.0     | [Source](src/xep0141.ts) |
| [XEP-0144](https://xmpp.org/extensions/xep-0144.html) | Roster Item Exchange                               | 1.1.1   | [Source](src/xep0144.ts) |
| [XEP-0152](https://xmpp.org/extensions/xep-0152.html) | Reachability Addresses                             | 1.0     | [Source](src/xep0152.ts) |
| [XEP-0153](https://xmpp.org/extensions/xep-0153.html) | vCard-Based Avatars                                | 1.1     | [Source](src/xep0153.ts) |
| [XEP-0166](https://xmpp.org/extensions/xep-0166.html) | Jingle                                             | 1.1.1   | [Source](src/xep0166.ts) |
| [XEP-0167](https://xmpp.org/extensions/xep-0167.html) | Jingle RTP Sessions                                | 1.1.1   | [Source](src/xep0167.ts) |
| [XEP-0172](https://xmpp.org/extensions/xep-0172.html) | User Nickname                                      | 1.1     | [Source](src/xep0172.ts) |
| [XEP-0176](https://xmpp.org/extensions/xep-0176.html) | Jingle ICE-UDP Transport Method                    | 1.0     | [Source](src/xep0176.ts) |
| [XEP-0177](https://xmpp.org/extensions/xep-0177.html) | Jingle Raw UDP Transport Method                    | 1.1     | [Source](src/xep0177.ts) |
| [XEP-0184](https://xmpp.org/extensions/xep-0184.html) | Message Delivery Receipts                          | 1.2     | [Source](src/xep0184.ts) |
| [XEP-0186](https://xmpp.org/extensions/xep-0186.html) | Invisible Command                                  | 0.13    | [Source](src/xep0186.ts) |
| [XEP-0191](https://xmpp.org/extensions/xep-0191.html) | Blocking Command                                   | 1.3     | [Source](src/xep0191.ts) |
| [XEP-0198](https://xmpp.org/extensions/xep-0198.html) | Stream Management                                  | 1.5.2   | [Source](src/xep0198.ts) |
| [XEP-0199](https://xmpp.org/extensions/xep-0199.html) | XMPP Ping                                          | 2.0     | [Source](src/xep0199.ts) |
| [XEP-0202](https://xmpp.org/extensions/xep-0202.html) | Entity Time                                        | 2.0     | [Source](src/xep0202.ts) |
| [XEP-0203](https://xmpp.org/extensions/xep-0203.html) | Delayed Delivery                                   | 2.0     | [Source](src/xep0203.ts) |
| [XEP-0206](https://xmpp.org/extensions/xep-0206.html) | XMPP over BOSH                                     | 1.4     | [Source](src/xep0124.ts) |
| [XEP-0221](https://xmpp.org/extensions/xep-0221.html) | Data Forms Media Element                           | 1.0     | [Source](src/xep0221.ts) |
| [XEP-0224](https://xmpp.org/extensions/xep-0224.html) | Attention                                          | 1.0     | [Source](src/xep0224.ts) |
| [XEP-0231](https://xmpp.org/extensions/xep-0231.html) | Bits of Binary                                     | 1.0     | [Source](src/xep0231.ts) |
| [XEP-0234](https://xmpp.org/extensions/xep-0234.html) | Jingle File Transfer                               | 0.18.3  | [Source](src/xep0234.ts) |
| [XEP-0247](https://xmpp.org/extensions/xep-0247.html) | Jingle XML Streams                                 | 0.2     | [Source](src/xep247.ts)  |
| [XEP-0249](https://xmpp.org/extensions/xep-0249.html) | Direct MUC Invitations                             | 1.2     | [Source](src/xep0045.ts) |
| [XEP-0260](https://xmpp.org/extensions/xep-0260.html) | Jingle SOCKS5 Bytestreams Transport Method         | 1.0.1   | [Source](src/xep0260.ts) |
| [XEP-0261](https://xmpp.org/extensions/xep-0261.html) | Jingle In-Band Bytestreams Transport Method        | 1.0     | [Source](src/xep0261.ts) |
| [XEP-0261](https://xmpp.org/extensions/xep-0262.html) | Use of ZRTP in Jingle RTP Sessions                 | 1.0     | [Source](src/xep0167.ts) |
| [XEP-0264](https://xmpp.org/extensions/xep-0264.html) | Jingle Content Thumbnails                          | 0.4     | [Source](src/xep0264.ts) |
| [XEP-0280](https://xmpp.org/extensions/xep-0280.html) | Message Carbons                                    | 0.12.0  | [Source](src/xep0280.ts) |
| [XEP-0293](https://xmpp.org/extensions/xep-0293.html) | Jingle RTP Feedback Negotiation                    | 1.0     | [Source](src/xep0167.ts) |
| [XEP-0294](https://xmpp.org/extensions/xep-0294.html) | Jingle RTP Header Extensions Negotiation           | 1.0     | [Source](src/xep0167.ts) |
| [XEP-0297](https://xmpp.org/extensions/xep-0297.html) | Stanza Forwarding                                  | 1.0     | [Source](src/xep0297.ts) |
| [XEP-0300](https://xmpp.org/extensions/xep-0300.html) | Use of Cryptographic Hash Functions in XMPP        | 0.5.3   | [Source](src/xep0300.ts) |
| [XEP-0301](https://xmpp.org/extensions/xep-0301.html) | In-Band Real Time Text                             | 1.0     | [Source](src/xep0301.ts) |
| [XEP-0307](https://xmpp.org/extensions/xep-0307.html) | Unique Room Names for Multi-User Chat              | 0.1     | [Source](src/xep0045.ts) |
| [XEP-0308](https://xmpp.org/extensions/xep-0308.html) | Last Message Correction                            | 1.0     | [Source](src/xep0308.ts) |
| [XEP-0313](https://xmpp.org/extensions/xep-0313.html) | Message Archive Management                         | 0.6.1   | [Source](src/xep0313.ts) |
| [XEP-0319](https://xmpp.org/extensions/xep-0319.html) | Last User Interaction in Presence                  | 1.0.2   | [Source](src/xep0319.ts) |
| [XEP-0320](https://xmpp.org/extensions/xep-0320.html) | Use of DTLS-SRTP in Jingle Sessions                | 0.3.1   | [Source](src/xep0320.ts) |
| [XEP-0328](https://xmpp.org/extensions/xep-0328.html) | JID Prep                                           | 0.1     | [Source](src/xep0328.ts) |
| [XEP-0333](https://xmpp.org/extensions/xep-0333.html) | Chat Markers                                       | 0.3.0   | [Source](src/xep0333.ts) |
| [XEP-0334](https://xmpp.org/extensions/xep-0334.html) | Message Processing Hints                           | 0.3.0   | [Source](src/xep0334.ts) |
| [XEP-0335](https://xmpp.org/extensions/xep-0335.html) | JSON Containers                                    | 0.1     | [Source](src/xep0335.ts) |
| [XEP-0339](https://xmpp.org/extensions/xep-0339.html) | Source-Specific Media Attributes in Jingle         | 0.1     | [Source](src/xep0167.ts) |
| [XEP-0350](https://xmpp.org/extensions/xep-0350.html) | Data Forms Geolocation Element                     | 0.2     | [Source](src/xep0080.ts) |
| [XEP-0352](https://xmpp.org/extensions/xep-0352.html) | Client State Indication                            | 0.2.1   | [Source](src/xep0352.ts) |
| [XEP-0357](https://xmpp.org/extensions/xep-0357.html) | Push Notifications                                 | 0.3     | [Source](src/xep0357.ts) |
| [XEP-0359](https://xmpp.org/extensions/xep-0359.html) | Unique and Stable Stanza IDs                       | 0.5     | [Source](src/xep0359.ts) |
| [XEP-0363](https://xmpp.org/extensions/xep-0363.html) | HTTP File Upload                                   | 0.5.0   | [Source](src/xep0363.ts) |
| [XEP-0380](https://xmpp.org/extensions/xep-0380.html) | Explicit Message Encryption                        | 0.2.0   | [Source](src/xep0380.ts) |

## Planned Support for XEPs

| XEP                                                   | Name                                 | Version |
| ----------------------------------------------------- | ------------------------------------ | ------- |
| [XEP-0220](https://xmpp.org/extensions/xep-0220.html) | Server Dialback                      | 1.1.1   |
| [XEP-0317](https://xmpp.org/extensions/xep-0317.html) | Hats                                 | 0.1     |
| [XEP-0353](https://xmpp.org/extensions/xep-0353.html) | Jingle Message Initiation            | 0.3     |
| [XEP-0358](https://xmpp.org/extensions/xep-0358.html) | Publishing Available Jingle Sessions | 0.4     |
| [XEP-0367](https://xmpp.org/extensions/xep-0367.html) | Message Attaching                    | 0.2     |
| [XEP-0370](https://xmpp.org/extensions/xep-0370.html) | Jingle HTTP Transport Method         | 0.2     |
| [XEP-0371](https://xmpp.org/extensions/xep-0371.html) | Jingle ICE Transport Method          | 0.2     |
| [XEP-0382](https://xmpp.org/extensions/xep-0382.html) | Spoiler Messages                     | 0.2.0   |
| [XEP-0390](https://xmpp.org/extensions/xep-0390.html) | Entity Capabilities 2.0              | 0.2     |
