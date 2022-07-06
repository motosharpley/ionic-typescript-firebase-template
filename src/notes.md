There are 3 Primary Data Sources - Users : Channels : Posts
Users | who can have Channels that Users Subscribe to which are lists of Posts created by Users and have Comments From Users

Users<collection> : {
user: {
displayName: ''
email: ''
bioDescription: ''
profileBanner: {}
avatarImages: []
channels: [{}]
posts: [{}]
comments: []
media: []
subscriptions: []
userType: default, creator, admin, SUPER
upVotes: number
downVotes: number
tags: []
}
}

Channels<collection> : {
channel: {
banner: {}
bio: ''
links: []
creators: []
posts: [{}]
subscribers: []
channelThread: [{posts}]
upVotes: number
downVotes: number
views: number
tags: []
}
}

Posts<collection> : {
post: {
channel: ''
title: ''
description: ''
images: []
videos: []
body: {}
meta: {}
upVotes: number
downVotes: number
views: number
creator: ''
comments: [{}]
tags: []
}
}
