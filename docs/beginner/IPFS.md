---
title: What is IPFS?
hide_table_of_contents: true
---

IPFS stands for Interplanetary File System. At its core it is a versioned file system which can store files and track versions over time, very much like Git. It also defines how files move across a network, making it a distributed file system, much like BitTorrent. In combining these two properties, IPFS enables a new permanent web and augments the way we use existing internet protocols like HTTP.

Simply put, the internet is a collection of protocols that describe how data moves around a network. Developers adopted these protocols over time and built their applications on top of this infrastructure. One of the protocols that serves as the backbone of the web is HTTP or HyperText Transfer Protocol. This was invented by Tim Berners-Lee in 1991.

HTTP is a request-response protocol. A client, for example a web browser, sends a request to an external server. The server then returns a response message, for example, the Google homepage back to the client. This is a location-addressed protocol which means when I type google.com into my browser, it gets translated into an IP address of some Google server, then the request-response cycle is initiated with that server.

### Problems with HTTP

Let’s say you are sitting in a lecture hall, and the professor asks you to go to a specific website. Every student in the lecture makes a request to that website and are given a response. This means that the same exact data was sent individually to each student in the room. If there are 100 students, then that’s 100 requests and 100 responses. This is obviously not the most efficient way to do things. Ideally, the students will be able to leverage their physical proximity to more efficiently retrieve the information they need.

HTTP also presents a big problem if there is some problem in the networks line of communication and the client is unable to connect with the server. This can happen if an ISP has an outage, a country is blocking some content, or if the content was simply deleted or moved. These types of broken links exist everywhere on the HTTP web.

The location-based addressing model of HTTP encourages centralization. It’s convenient to trust a handful of applications with all our data but because of this much of the data on the web becomes siloed. This leaves those providers with enormous responsibility and power over our information.

### How does IPFS work?

IPFS seeks to create a permanent and distributed web. It does this by using a content-addressed system instead of HTTP’s location-based system.

An HTTP request would look like `http://10.20.30.40/folder/file.txt`

An IPFS request would look like `/ipfs/QmT5NvUtoM5n/folder/file.txt`

Instead of using an location address, IPFS uses a representation of the content itself to address the content. This is done using a cryptographic hash on a file and that is used as the address. The hash represents a root object and other objects can be found in its path. Instead of talking to a server, you gain access to this “starting point” of data. This way the system leverages physical proximity. If someone very close to me has what I want, I’ll get it directly from them instead of connecting to a central server. In the lecture example from earlier, the students in the classroom can pull the data from each other without all having to establish their own communication with the a server. With HTTP you are asking what is at a certain location whereas with IPFS you are asking where a certain file is. In order to accomplish this, IPFS synthesizes a few successful ideas from other peer-to-peer systems.

To store data, IPFS uses a Distributed Hash Table, or DHT. Once we have a hash, we ask the peer network who has the content located at that hash and we download the content directly from the node that has the data I want. Data is transferred between the nodes in the network using mechanisms similar to BitTorrent. A user looking for some content on the IPFS web finds neighbors who have access to that content. They then download small bits of the content from those neighbors. On top of the DHT and the BitTorrent protocols, IPFS uses a Merkle Tree. This is a data structure similar to the one Git uses as a version control system and the protocol used in the bitcoin blockchain. In Git, its used to track versions of source code, whereas in IPFS it’s used to track content across the entire web.

### IPFS and Blockchains

Because of the similarity in their structure, IPFS and blockchains can work well together. In fact, Juan Benet, the inventor of IPFS calls this a “great marriage.” IPFS is one of a few projects that are part of a group called Protocol Labs, which was also founded by Benet. Some projects from Protocol Labs closely related to IPFS are IPLD (Inter-Planetary Linked Data) and Filecoin. IPLD is a data model for distributed data structures like blockchains. This model allows for easy storage and access of blockchain data through IPFS. Users willing to store IPFS data will be rewarded with Filecoin. IPLD allows users to seamlessly interact with multiple blockchains and has been integrated with Ethereum and Bitcoin.

> IPFS connects all these different blockchains in a way that’s similar to how the web connects all these websites together. The same way that you can drop a link on one page that links to another page, you can drop a link in ethereum [for example] that links to zcash and IPFS can resolve all of that. — Juan Benet

IPFS and other projects from Protocol Labs are ambitious by nature. The idea of a permanent web that is resilient and efficient were no doubt also the goals of the original inventors of our internet protocols. However, over time as our usage of the web changed, weaknesses in these protocols became evident. Although it is in its early stages, IPFS shows promise in being a crucial piece of a new decentralized technology stack.